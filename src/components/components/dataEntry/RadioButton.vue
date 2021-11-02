<template>
	<div class="c-application c-radio-button" :class="[computedClasses, computedRadioColor]">
		<input
			:id="computedId"
			v-model="sync_value"
			type="radio"
			:disabled="disabled"
			v-bind="$attrs"
			:name="name"
			v-on="$listeners"
		/>
		<label :class="{ disabled, checked: value }" :for="computedId">
			<Typography :color="computedColor" :type="computedTypographyType">
				<slot />
			</Typography>
		</label>
	</div>
</template>

<script>
import { colorKeys } from '@/src/components/elements/core/colors';
import Typography from '@/src/components/elements/core/typography/Typography';
import uniqueId from '@/src/utils/unique-id';
import customValidator from '@/src/utils/custom-validator';
export const radioColors = ['primary', 'success', 'secondary', 'error'];
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
		radioColor: {
			type: String,
			default: 'primary',
			validator(value) {
				return radioColors.indexOf(value) !== -1;
			},
		},
		fontColor: {
			type: String,
			default: 'gray500',
			validator(value) {
				const isValid = colorKeys.indexOf(value) !== -1;
				return customValidator(value, isValid, 'RadioButton', 'fontColor');
			},
		},
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				const isValid = radioButtonSizes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid value of the RadioButton size`);
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
			return this.id || `c-radio-button-${this.uid}`;
		},
		computedColor() {
			return this.disabled ? 'gray300' : this.fontColor;
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
		computedRadioColor() {
			return this.radioColor;
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

		&:disabled {
			cursor: not-allowed !important;
			& + label {
				cursor: not-allowed !important;

				&:active {
					pointer-events: none;
				}
				&.checked {
					&:after {
						background-color: $input-border-color !important;
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
			}
			& + label:after {
				display: block;
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
			&.checked {
				&:after {
					display: block;
				}
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
		}
	}
	&.primary {
		input[type='radio'] {
			&:hover:not(:disabled),
			&:focus:not(:disabled) {
				& + label:before {
					background-color: $green000;
					border-color: $primary;
				}
			}
			& + label {
				&.checked {
					&:after {
						background-color: $primary;
					}
				}
			}
			&:checked:not(:disabled) {
				& + label:before {
					border-color: $primary;
				}
				& + label:after {
					background-color: $primary;
				}
			}
		}
	}
	&.success {
		input[type='radio'] {
			&:hover:not(:disabled),
			&:focus:not(:disabled) {
				& + label:before {
					background-color: $blue000;
					border-color: $success;
				}
			}
			& + label {
				&.checked {
					&:after {
						background-color: $success;
					}
				}
			}
			&:checked:not(:disabled) {
				& + label:before {
					border-color: $success;
				}
				& + label:after {
					background-color: $success;
				}
			}
		}
	}
	&.secondary {
		input[type='radio'] {
			&:hover:not(:disabled),
			&:focus:not(:disabled) {
				& + label:before {
					background-color: $gray000;
					border-color: $secondary;
				}
			}
			& + label {
				&.checked {
					&:after {
						background-color: $secondary;
					}
				}
			}
			&:checked:not(:disabled) {
				& + label:before {
					border-color: $secondary;
				}
				& + label:after {
					background-color: $secondary;
				}
			}
		}
	}
	&.error {
		input[type='radio'] {
			&:hover:not(:disabled),
			&:focus:not(:disabled) {
				& + label:before {
					background-color: $red000;
					border-color: $error;
				}
			}
			& + label {
				&.checked {
					&:after {
						background-color: $error;
					}
				}
			}
			&:checked:not(:disabled) {
				& + label:before {
					border-color: $error;
				}
				& + label:after {
					background-color: $error;
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
