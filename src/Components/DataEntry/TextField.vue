<template>
	<div class="c-application c-text-field" :class="[computedLabel]">
		<input
			:ref="computedId"
			v-model="sync_value"
			class="c-text-field--input"
			:type="type"
			:placeholder="placeholder"
			:name="computedId"
			:label="label"
			:align="align"
			:focus="focus"
			:readonly="readonly"
			:disabled="disabled"
			:color="color"
			:style="[computedAlign]"
			:class="[computedLined, computedColor]"
			v-bind="$attrs"
			@input="handleTyping"
			v-on="$listeners"
			@focusin="hintColor = color"
			@focusout="hintColor = 'secondary'"
		/>
		<label v-if="computedShowLabel" :for="computedId" class="c-text-field--label">{{ label }}</label>
		<Hint :color="hintColor" :value="hint" />
	</div>
</template>

<script>
import Hint from '../DataDisplay/Hint';

export const TextFieldTypes = ['text', 'number', 'password', 'email', 'tel', 'url'];
export const TextFieldAligns = ['left', 'center', 'right'];
export const TextFieldColor = ['primary', 'success', 'secondary', 'error'];

export default {
	name: 'TextField',
	inheritAttrs: false,
	props: {
		type: {
			type: String,
			default: 'text',
			validator(value) {
				const isValid = TextFieldTypes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the TextField type`);
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
				const isValid = TextFieldAligns.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the TextField align`);
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
		color: {
			type: String,
			default: 'error',
			validator(value) {
				const isValid = TextFieldColor.indexOf(value) !== -1;
				if (isValid) {
					return isValid;
				}
			},
		},
		hint: {
			type: String,
			default: '',
		},
	},
	data: () => ({
		hintColor: 'secondary',
	}),
	computed: {
		sync_value: {
			get() {
				return this.value;
			},
			set(val) {
				this.hintColor = this.color;
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
			return `textField-${this._uid}`;
		},
		computedShowLabel() {
			return this.label;
		},
		computedLabel() {
			return { label: this.computedShowLabel };
		},
		computedAlign() {
			return {
				textAlign: this.align,
			};
		},
		computedColor() {
			return this.color;
		},
	},

	mounted() {
		if (this.focus) {
			this.$refs[this.computedId].focus();
		}
	},
	methods: {
		handleTyping(e) {
			this.sync_value = e.target.value;
		},
	},
	components: { Hint },
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
		&:disabled {
			background: $gray000;
		}
		&.outlined {
			padding: 0 16px;
			border: 1px solid $input-border-color;
			@include border-radius(2px);
			&:focus {
				border-color: $secondary;
			}
			&.error {
				&:focus {
					border-color: $error;
				}
			}
			&.primary {
				&:focus {
					border-color: $primary;
				}
			}
			&.success {
				&:focus {
					border-color: $success;
				}
			}
			&.secondary {
				&:focus {
					border-color: $secondary;
				}
			}
		}
		&.underlined {
			padding: 0 4px;
			border-bottom: 1px solid $input-border-color;
			&:focus {
				border-color: $secondary;
			}
			&.error {
				&:focus {
					border-color: $error;
				}
			}
			&.primary {
				&:focus {
					border-color: $primary;
				}
			}
			&.success {
				&:focus {
					border-color: $success;
				}
			}
			&.secondary {
				&:focus {
					border-color: $secondary;
				}
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
				border-color: $input-border-color;
			}
		}
	}
	&.label {
		.c-text-field--input {
			&:focus {
				+ .c-text-field--label {
					opacity: 1;
				}
			}
			&.error {
				&:focus {
					border-color: $error;
					+ .c-text-field--label {
						color: $error;
					}
				}
			}
			&.primary {
				&:focus {
					border-color: $primary;
					+ .c-text-field--label {
						color: $primary;
					}
				}
			}
			&.success {
				&:focus {
					border-color: $success;
					+ .c-text-field--label {
						color: $success;
					}
				}
			}
			&.secondary {
				&:focus {
					border-color: $secondary;
					+ .c-text-field--label {
						color: $secondary;
					}
				}
			}

			&[readonly],
			&[readonly='readonly'] {
				&:focus {
					border-color: $input-border-color;
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
}
</style>
