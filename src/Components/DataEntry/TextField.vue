<template>
	<div class="c-application c-textfield" :class="[computedLabelStyle]">
		<input
			:id="computedId"
			class="c-textfield--input"
			:value="value"
			:type="type"
			:placeholder="placeholder"
			:name="computedId"
			:label="label"
			:align="align"
			:focus="focus"
			:readonly="readOnly"
			:disabled="disabled"
			:error="error"
			:style="[computedAlign]"
			:class="[computedLined, computedError]"
			v-bind="$attrs"
			@input="$emit('input', $event.target.value)"
			v-on="$listeners"
		/>
		<label v-if="label !== ''" :for="computedId" class="c-textfield--label">{{ label }}</label>
		<Typography v-if="error" type="caption2" color="red400" element="p" class="c-textfield--message">
			<slot name="errorMessage" />
		</Typography>
	</div>
</template>

<script>
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
			validator(value) {
				return typeof value === 'string';
			},
		},
		placeholder: {
			type: String,
			default: '내용을 입력하세요.',
			validator(value) {
				return typeof value === 'string';
			},
		},
		label: {
			type: String,
			default: '',
			validator(value) {
				return typeof value === 'string';
			},
		},
		filled: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
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
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		readOnly: {
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
		error: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
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
			if (this.filled) {
				return 'outlined';
			} else {
				return 'underlined';
			}
		},
		computedId() {
			return this.id || `textField-${this._uid}`;
		},
		computedLabelStyle() {
			if (this.label !== '') {
				return 'label';
			} else {
				return false;
			}
		},
		computedAlign() {
			return {
				textAlign: this.align,
			};
		},
		computedError() {
			if (this.error) {
				return 'error';
			} else {
				return false;
			}
		},
	},

	mounted() {
		if (this.focus) {
			document.getElementById(this.computedId).focus();
		}
	},
	components: { Typography },
};
</script>

<style lang="scss" scoped>
.c-textfield {
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
	}
	&.label {
		.c-textfield--input {
			&.error {
				border-color: $red400;
				&:focus {
					border-color: $red400;
					+ .c-textfield--label {
						opacity: 1;
						color: $red400;
					}
				}
			}
			&:focus {
				border-color: $green600;
				+ .c-textfield--label {
					opacity: 1;
					color: $green600;
				}
			}
		}
		.c-textfield--label {
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
	}
}
</style>
