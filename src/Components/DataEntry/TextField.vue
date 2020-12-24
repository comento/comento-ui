<template>
	<div class="c-application c-text-field" :class="[computedLabel]">
		<input
			:id="computedId"
			:ref="computedId"
			v-model="sync_value"
			class="c-text-field--input"
			:value="value"
			:type="type"
			:placeholder="placeholder"
			:name="computedId"
			:label="label"
			:align="align"
			:focus="focus"
			:readonly="readonly"
			:disabled="disabled"
			:error="error"
			:style="[computedAlign]"
			:class="[computedLined, computedError]"
			v-bind="$attrs"
			@input="$emit('input', $event.target.value)"
			v-on="$listeners"
		/>
		<label v-if="computedShowLabel" :for="computedId" class="c-text-field--label">{{ label }}</label>
		<Typography v-if="errorMessage !== ''" type="caption2" color="red400" element="p" class="c-text-field--message">
			<Icon name="IconExclamationSmallFill" color="red600" class="mr-2" />{{ errorMessage }}
		</Typography>
	</div>
</template>

<script>
import Icon from '@/src/Elements/Core/Icon/Icon';
import Typography from '@/src/Elements/Core/Typography/Typography';
export const textfieldTypes = ['text', 'number', 'password', 'email', 'tel', 'url'];
export const textfieldAligns = ['left', 'center', 'right'];

export default {
	name: 'TextField',
	inheritAttrs: false,
	props: {
		type: {
			type: String,
			default: 'text',
			validator(value) {
				const isValid = textfieldTypes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the textfield type`);
				}
				return isValid;
			},
		},
		value: {
			type: String,
			default: '',
		},
		placeholder: {
			type: String,
			default: '내용을 입력하세요.',
		},
		label: {
			type: String,
			default: null,
		},
		outlined: {
			type: Boolean,
			default: false,
		},
		align: {
			type: String,
			default: 'left',
			validator(value) {
				const isValid = textfieldAligns.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the textfield align`);
				}
				return isValid;
			},
		},
		focus: {
			type: Boolean,
			default: false,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		error: {
			type: Boolean,
			default: false,
		},
		errorMessage: {
			type: String,
			default: '',
		},
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
		computedLined() {
			if (this.outlined) {
				return 'outlined';
			} else {
				return 'underlined';
			}
		},
		computedId() {
			return this.id || `textField-${this._uid}`;
		},
		computedShowLabel() {
			return this.outlined && this.label;
		},
		computedLabel() {
			return { label: this.computedShowLabel };
		},
		computedAlign() {
			return {
				textAlign: this.align,
			};
		},
		computedError() {
			if (this.error) {
				return { error: this.error };
			} else {
				return false;
			}
		},
	},

	mounted() {
		if (this.focus) {
			this.$refs[this.computedId].focus();
		}
	},
	components: { Typography, Icon },
};
</script>

<style lang="scss" scoped>
.c-text-field {
	position: relative;
	&--input {
		display: block;
		width: 100%;
		height: 40px;
		border: 0;
		color: $gray800;
		@include body1;
		@include transition(all 0.2s ease);
		&::placeholder {
			color: $gray300;
		}
		&.outlined {
			padding: 0 16px;
			border: 1px solid $gray200;
			@include border-radius(2px);
			&.error {
				border-color: $red400;
				&:focus {
					border-color: $red400;
				}
			}
			&:focus {
				border-color: $gray400;
			}
		}
		&.underlined {
			padding: 0 4px;
			border-bottom: 1px solid $gray200;
			&.error {
				border-color: $red400;
				&:focus {
					border-color: $red400;
				}
			}
			&:focus {
				border-color: $gray400;
			}
		}
		&:disabled {
			cursor: not-allowed !important;
			&:active {
				pointer-events: none;
			}
		}
		&[readonly],
		&[readonly='readonly'] {
			&:focus {
				border-color: $gray200;
			}
		}
	}
	&.label {
		.c-text-field--input {
			&.error {
				border-color: $red400;
				&:focus {
					border-color: $red400;
					+ .c-text-field--label {
						opacity: 1;
						color: $red400;
					}
				}
			}
			&:focus {
				border-color: $green600;
				+ .c-text-field--label {
					opacity: 1;
					color: $green600;
				}
			}
			&[readonly],
			&[readonly='readonly'] {
				&:focus {
					border-color: $gray200;
				}
				+ .c-text-field--label {
					opacity: 0;
				}
			}
		}
		.c-text-field--label {
			@include transition(all 0.2s ease);
			position: absolute;
			top: -6px;
			left: 12px;
			padding: 0 2px;
			background: $white;
			@include caption2;
			opacity: 0;
		}
	}
	&--message {
		margin-top: 5px;
		@include clearfix;
		&::v-deep .c-icon {
			float: left;
			margin-top: -1px;
		}
	}
}
</style>
