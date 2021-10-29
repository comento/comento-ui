<template>
	<div class="c-application c-text-field" :class="[computedLabel, computedFull]">
		<div class="c-text-field--input-wrapper">
			<input
				:id="computedId"
				:ref="computedId"
				v-model="sync_value"
				class="c-text-field--input"
				:type="type"
				:placeholder="placeholder"
				:name="computedId"
				:label="label"
				:align="align"
				:readonly="readonly"
				:disabled="disabled"
				:color="color"
				:style="[computedAlign]"
				:class="[computedLined, computedColor, computedActive]"
				v-bind="$attrs"
				:autocomplete="computedAutocomplete"
				@input="handleTyping"
				v-on="$listeners"
				@focus="onFocus"
				@blur="blurFocus"
			/>
			<label v-if="computedShowLabel" :for="computedId" class="c-text-field--label">{{ label }}</label>
			<div v-if="$slots['append']" class="c-text-field--append">
				<slot name="append" />
			</div>
		</div>
		<Hint v-if="computedShowHint" :color="color">
			{{ hint }}
		</Hint>
	</div>
</template>

<script>
import Hint from '@/src/components/components/dataDisplay/Hint';
import uniqueId from '@/src/utils/unique-id';

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
		active: {
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
			default: 'secondary',
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
		persistentHint: {
			type: Boolean,
			default: false,
		},
		full: {
			type: Boolean,
			default: false,
		},
		autocomplete: {
			type: Boolean,
			default: false,
		},
		id: {
			type: String,
		},
	},
	data() {
		return {
			isFocused: false,
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
		computedLined() {
			if (this.outlined) {
				return 'outlined';
			} else {
				return 'underlined';
			}
		},
		computedId() {
			return this.id || `text-field-${this.uid}`;
		},
		computedShowLabel() {
			return this.label;
		},
		computedShowHint() {
			return !!this.hint && (this.persistentHint || this.isFocused || this.active);
		},
		computedLabel() {
			return { label: this.computedShowLabel };
		},
		computedFull() {
			return this.full && 'full';
		},
		computedAlign() {
			return {
				textAlign: this.align,
			};
		},
		computedColor() {
			return this.color;
		},
		computedActive() {
			return { active: this.active };
		},
		computedAutocomplete() {
			return this.autocomplete ? 'on' : 'off';
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.handleTextFieldPadding();
		});
	},
	methods: {
		handleTyping(e) {
			this.sync_value = e.target.value;
		},
		onFocus() {
			this.isFocused = true;
		},
		blurFocus() {
			this.isFocused = false;
		},
		handleTextFieldPadding() {
			const textField = this.$refs[this.computedId];
			const textFieldItems = textField.parentElement.childNodes;
			textFieldItems.forEach(item => {
				if (item && item.className === 'c-text-field--append') {
					const appendWidth = item.offsetWidth;
					const textField = this.$refs[this.computedId];
					textField.style.paddingRight = `${appendWidth + 2}px`;
				}
			});
		},
	},
	components: { Hint },
};
</script>

<style lang="scss" scoped>
$outlined-padding: 16px;
$underlined-padding: 4px;

.c-text-field {
	position: relative;
	&.full {
		width: 100%;
	}
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

		&-wrapper {
			position: relative;
		}

		&.outlined {
			padding: 0 $outlined-padding;
			border: 1px solid $input-border-color;
			@include border-radius(2px);
			&:focus,
			&.active {
				border-color: $secondary;
			}
			&.error {
				&:focus,
				&.active {
					border-color: $error;
				}
			}
			&.primary {
				&:focus,
				&.active {
					border-color: $primary;
				}
			}
			&.success {
				&:focus,
				&.active {
					border-color: $success;
				}
			}
			&.secondary {
				&:focus,
				&.active {
					border-color: $secondary;
				}
			}

			~ .c-text-field--append {
				padding-right: $outlined-padding - 4px;
			}
		}
		&.underlined {
			padding: 0 $underlined-padding;
			border-bottom: 1px solid $input-border-color;
			&:focus,
			&.active {
				border-color: $secondary;
			}
			&.error {
				&:focus,
				&.active {
					border-color: $error;
				}
			}
			&.primary {
				&:focus,
				&.active {
					border-color: $primary;
				}
			}
			&.success {
				&:focus,
				&.active {
					border-color: $success;
				}
			}
			&.secondary {
				&:focus {
					border-color: $secondary;
				}
			}

			~ .c-text-field--append {
				padding-right: $underlined-padding;
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
		.c-text-field--input-wrapper {
			.c-text-field--input {
				&:focus,
				&.active {
					+ .c-text-field--label {
						opacity: 1;
					}
				}
				&.error {
					&:focus,
					&.active {
						border-color: $error;
						+ .c-text-field--label {
							color: $error;
						}
					}
				}
				&.primary {
					&:focus,
					&.active {
						border-color: $primary;
						+ .c-text-field--label {
							color: $primary;
						}
					}
				}
				&.success {
					&:focus,
					&.active {
						border-color: $success;
						+ .c-text-field--label {
							color: $success;
						}
					}
				}
				&.secondary {
					&:focus,
					&.active {
						border-color: $secondary;
						+ .c-text-field--label {
							color: $secondary;
						}
					}
				}

				&[readonly],
				&[readonly='readonly'] {
					&:focus,
					&.active {
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

	&--append {
		@include flexbox();
		@include align-items(center);
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 1px;
		background: white;
		height: calc(100% - 2px);
		padding-left: 10px;
	}
}
</style>
