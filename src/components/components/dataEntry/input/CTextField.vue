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
				@focus="onFocus"
				@blur="blurFocus"
			/>
			<label v-if="computedShowLabel" :for="computedId" class="c-text-field--label">{{ label }}</label>
			<div v-if="$slots['append']" class="c-text-field--append">
				<slot name="append" />
			</div>
		</div>
		<CHint v-if="computedShowHint" :color="hintColor">
			{{ hint }}
		</CHint>
	</div>
</template>

<script>
import CHint from '@/components/components/dataDisplay/CHint.vue';
import uniqueId from '@/utils/unique-id';
import { defineComponent, computed, toRefs, ref, onMounted, nextTick } from 'vue';

export const TextFieldTypes = ['text', 'number', 'password', 'email', 'tel', 'url'];
export const TextFieldAligns = ['left', 'center', 'right'];

export default defineComponent({
	name: 'CTextField',
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
			default: null,
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
	emits: ['update:value'],
	setup(props, { emit }) {
		const { value, outline, id, label, hint, persistentHint, full, align, active, autocomplete, error } =
			toRefs(props);
		const isFocused = ref(false);
		const uid = ref(uniqueId());
		const textField = ref(null);

		const sync_value = computed({
			get: () => value.value,
			set: val => emit('update:value', val),
		});

		const computedLined = computed(() => (outline.value ? 'c-text-field--outline' : 'c-text-field--underline'));
		const computedId = computed(() => id.value || `text-field-${uid.value}`);
		const computedShowLabel = computed(() => label.value);
		const computedShowHint = computed(
			() => !!hint.value && (persistentHint.value || isFocused.value || active.value),
		);
		const computedLabel = computed(() => ({ label: computedShowLabel.value }));
		const computedFull = computed(() => full.value && 'full');
		const computedAlign = computed(() => ({ textAlign: align.value }));
		const computedActive = computed(() => ({ active: active.value }));
		const computedAutocomplete = computed(() => (autocomplete.value ? 'on' : 'off'));
		const computedError = computed(() => ({ error: error.value }));
		const hintColor = computed(() => {
			if (error.value) {
				return 'error';
			}
			if (outline.value && label.value && (isFocused.value || active.value)) {
				return 'primary';
			}

			return 'gray400';
		});

		const handleTyping = e => (sync_value.value = e.target.value);
		const onFocus = () => (isFocused.value = true);
		const blurFocus = () => (isFocused.value = false);
		const handleTextFieldPadding = () => {
			const textFieldItems = textField.value.parentElement.childNodes;
			textFieldItems.forEach(item => {
				if (item && item.className === 'c-text-field--append') {
					const appendWidth = item.offsetWidth;
					textField.value.style.paddingRight = `${appendWidth + 2}px`;
				}
			});
		};

		onMounted(() => {
			nextTick(() => {
				handleTextFieldPadding();
			});
		});

		return {
			sync_value,
			isFocused,
			uid,
			computedLined,
			computedId,
			computedShowLabel,
			computedShowHint,
			computedLabel,
			computedFull,
			computedAlign,
			computedActive,
			computedAutocomplete,
			computedError,
			hintColor,
			handleTyping,
			onFocus,
			blurFocus,
			textField,
		};
	},
	components: { CHint },
});
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
				&.outline {
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
							opacity: 0;
						}
					}

					&.error {
						border-color: $error;
						+ .c-text-field--label {
							color: $error;
						}
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
