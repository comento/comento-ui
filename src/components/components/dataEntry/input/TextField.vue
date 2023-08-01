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
				:style="[computedAlign]"
				:class="[computedLined, computedActive, computedError]"
				:error="error"
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
		<Hint v-if="computedShowHint" :color="hintColor">
			{{ hint }}
		</Hint>
	</div>
</template>

<script>
import Hint from '@/components/components/dataDisplay/Hint';
import uniqueId from '@/utils/unique-id';

export const TextFieldTypes = ['text', 'number', 'password', 'email', 'tel', 'url'];
export const TextFieldAligns = ['left', 'center', 'right'];

/**
 * @displayName c-text-field
 */
export default {
	name: 'TextField',
	inheritAttrs: false,
	props: {
		/**
		 * 타입(text, number, password, email, tel, url)
		 */
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
			type: [String, Number],
			default: '',
		},
		placeholder: {
			type: String,
			default: '내용을 입력하세요.',
		},
		label: {
			type: String,
			default: '',
		},
		outline: {
			type: Boolean,
			default: false,
		},
		active: {
			type: Boolean,
			default: false,
		},
		/**
		 * 정렬(left, center, right)
		 */
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
		error: {
			type: Boolean,
			default: false,
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
			if (this.outline) {
				return 'c-text-field--outline';
			} else {
				return 'c-text-field--underline';
			}
		},
		computedId() {
			return this.id || `text-field-${this.uid}`;
		},
		computedShowLabel() {
			return !!this.label && this.outline && !this.disabled;
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
		computedActive() {
			return { active: this.active };
		},
		computedAutocomplete() {
			return this.autocomplete ? 'on' : 'off';
		},
		computedError() {
			return { error: this.error };
		},
		hintColor() {
			if (this.error) {
				return 'error';
			}

			if (this.outline && this.label && (this.isFocused || this.active)) {
				return 'primary';
			}

			return 'gray400';
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
$outline-padding: 16px;
$underline-padding: 4px;
$disabled-background-color: $gray000;

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
			cursor: not-allowed !important;
			background: $disabled-background-color;
			border-color: $gray250;

			&:active {
				pointer-events: none;
			}

			~ .c-text-field--append {
				cursor: not-allowed !important;
				background: $disabled-background-color;
			}
		}

		&-wrapper {
			position: relative;
		}

		&.c-text-field--outline {
			padding: 0 $outline-padding;
			border: 1px solid $input-border-color;
			@include border-radius(4px);
			&:focus,
			&.active {
				border-color: $gray400;
			}

			~ .c-text-field--append {
				padding-right: $outline-padding - 4px;
				@include border-radius(4px);
			}
		}
		&.c-text-field--underline {
			padding: 0 $underline-padding;
			border-bottom: 1px solid $input-border-color;
			&:focus,
			&.active {
				border-color: $info;
			}

			~ .c-text-field--append {
				padding-right: $underline-padding;
			}
		}

		&[readonly],
		&[readonly='readonly'] {
			&:focus {
				border-color: $input-border-color;
			}
		}

		&.c-text-field--outline.error,
		&.c-text-field--underline.error {
			color: $error;
			border-color: $error;

			&::placeholder {
				color: $red100;
			}
		}
	}
	&.label {
		.c-text-field--input-wrapper {
			.c-text-field--input {
				&.c-text-field--outline {
					&:focus,
					&.active {
						border-color: $primary;
						+ .c-text-field--label {
							opacity: 1;
							color: $primary;
						}
					}
					&[readonly],
					&[readonly='readonly'] {
						&:focus,
						&.active {
							border-color: $input-border-color;
						}
						+ .c-text-field--label {
							opacity: 1;
							color: $gray250;
						}
					}

					&.error {
						border-color: $error;
						+ .c-text-field--label {
							color: $error;
						}
					}

					+ .c-text-field--label {
						@include transition(all 0.2s ease);
						position: absolute;
						top: -6px;
						left: 12px;
						padding: 0 2px;
						background: $white;
						color: $gray250;
						opacity: 1;
						@include caption2;
					}
				}
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
