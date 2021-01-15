<template>
	<div class="c-application c-textfield" :class="[computedLabel]">
		<input
			:ref="computedId"
			v-model="sync_value"
			class="c-textfield--input"
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
			@focusout="hintColor = 'gray400'"
		/>
		<label v-if="computedShowLabel" :for="computedId" class="c-textfield--label">{{ label }}</label>
		<Hint :color="hintColor" :value="hint" />
	</div>
</template>

<script>
import Hint from '../DataDisplay/Hint';

export const TextfieldTypes = ['text', 'number', 'password', 'email', 'tel', 'url'];
export const TextfieldAligns = ['left', 'center', 'right'];
export const TextfieldColor = ['primary', 'success', 'secondary', 'error'];

export default {
	name: 'Textfield',
	inheritAttrs: false,
	props: {
		type: {
			type: String,
			default: 'text',
			validator(value) {
				const isValid = TextfieldTypes.indexOf(value) !== -1;
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
				const isValid = TextfieldAligns.indexOf(value) !== -1;
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
				const isValid = TextfieldColor.indexOf(value) !== -1;
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
		hintColor: 'gray400',
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
		&:disabled {
			background: $gray000;
		}
		&.outlined {
			padding: 0 16px;
			border: 1px solid $input-border-color;
			@include border-radius(2px);
			&:focus {
				border-color: $gray400;
			}
			&.error {
				&:focus {
					border-color: $red400;
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
				border-color: $gray400;
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
		.c-textfield--input {
			&:focus {
				+ .c-textfield--label {
					opacity: 1;
				}
			}
			&.error {
				&:focus {
					border-color: $red400;
					+ .c-textfield--label {
						color: $error;
					}
				}
			}
			&.primary {
				&:focus {
					border-color: $primary;
					+ .c-textfield--label {
						color: $primary;
					}
				}
			}
			&.success {
				&:focus {
					border-color: $success;
					+ .c-textfield--label {
						color: $success;
					}
				}
			}
			&.secondary {
				&:focus {
					border-color: $secondary;
					+ .c-textfield--label {
						color: $secondary;
					}
				}
			}

			&[readonly],
			&[readonly='readonly'] {
				&:focus {
					border-color: $input-border-color;
				}
				+ .c-textfield--label {
					opacity: 0;
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
}
</style>
