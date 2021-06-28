<template>
	<div class="c-application c-radio-button" :class="computedClasses">
		<input
			:id="computedId"
			v-model="sync_value"
			type="radio"
			:disabled="disabled"
			:checked="checked"
			v-bind="$attrs"
			:name="name"
			v-on="$listeners"
		/>
		<label :class="{ disabled, checked }" :for="computedId">
			<Typography :color="computedColor" :type="computedTypographyType">
				<slot />
			</Typography>
		</label>
	</div>
</template>

<script>
import { colorKeys } from '@/src/Elements/Core/Colors';
import Typography from '@/src/Elements/Core/Typography/Typography';
import uniqueId from '@/utils/unique-id';
export const radioButtonSizes = ['small', 'medium'];

export default {
	name: 'RadioButton',
	inheritAttrs: false,
	props: {
		value: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		disabled: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		checked: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		id: {
			type: String,
			default: '',
			validator(value) {
				return typeof value === 'string';
			},
		},
		name: {
			type: String,
			default: '',
			validator(value) {
				return typeof value === 'string';
			},
		},
		color: {
			type: String,
			default: 'gray500',
			validator(value) {
				const isValid = colorKeys.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the typography color`);
				}
				return isValid;
			},
		},
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				const isValid = radioButtonSizes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid value of the Checkbox size`);
				}
				return isValid;
			},
		},
	},
	data() {
		return {
			uid: uniqueId(),
		};
	},
	computed: {
		sync_value: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('update:value', val);
			},
		},
		computedId() {
			return this.id || `c-checkbox-${this.uid}`;
		},
		computedColor() {
			return this.disabled ? 'gray300' : this.color;
		},
		computedClasses() {
			return [this.size];
		},
		computedTypographyType() {
			const sizeForTypeList = {
				small: 'body2',
				medium: 'body1',
			};
			return sizeForTypeList[this.size];
		},
	},
	components: { Typography },
};
</script>

<style lang="scss" scoped>
.c-radio-button {
	@include flexbox();

	input[type='radio'] {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		padding: 0;
		border: 0;
		height: 1px;
		width: 1px;
		overflow: hidden;

		&:hover:not(:disabled),
		&:focus:not(:disabled) {
			& + label:before {
				background-color: $green000;
				border-color: $green600;
			}
		}
		&:disabled {
			cursor: not-allowed !important;
			& + label {
				cursor: not-allowed !important;

				&:active {
					pointer-events: none;
				}
				&.checked {
					&:after {
						display: block;
						background-color: $input-border-color;
					}
				}
			}
			& + label:before {
				background-color: $gray100;
			}
		}

		&:checked:not(:disabled) {
			& + label:before {
				background-color: $gray000;
				border-color: $green600;
			}
			& + label:after {
				display: block;
				background-color: $green600;
			}
		}

		& + label {
			display: inline-flex;
			flex-direction: row;
			align-items: flex-start;
			cursor: pointer;
			position: relative;
			> div {
				display: inline-block;
			}
			&:before {
				width: 20px;
				height: 20px;
				content: '';
				background-color: $gray000;
				background-position: center center;
				border: 1px solid $input-border-color;
				@include border-radius(20px);
				display: inline-block;
				margin-top: 3px;
				margin-right: 8px;
				box-sizing: border-box;
			}
			&:after {
				content: '';
				position: absolute;
				top: 8px;
				left: 5px;
				width: 10px;
				height: 10px;
				@include border-radius(10px);
				display: none;
			}
			&.checked {
				&:after {
					display: block;
					background-color: $green600;
				}
			}
		}
	}

	&.small {
		input[type='radio'] {
			& + label:before {
				width: 18px;
				height: 18px;
			}
			& + label:after {
				width: 8px;
				height: 8px;
			}
		}
	}
}
</style>
