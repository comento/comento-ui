<template>
	<div class="c-application c-textarea" :class="classes">
		<div class="flex">
			<textarea
				ref="textarea"
				v-model="sync_value"
				:style="[computedStyles]"
				:placeholder="placeholder"
				:readonly="readOnly"
				v-bind="$attrs"
				@input="onInput"
			/>
			<!-- v-bind="$attrs" -->
			<CIconButton
				v-if="type === 'reply' && !readOnly"
				class="c-textarea--reply-icon"
				icon-name="IconSendLargeFill"
				:color="replyIconColor"
				:disabled="!sync_value"
				@click="onSubmitReply"
			/>
		</div>
		<CHint v-if="isShowHint" color="error">
			{{ hintMessage }}
		</CHint>
	</div>
</template>

<script>
import CIconButton from '@/components/components/general/button/CIconButton.vue';
import CHint from '@/components/components/dataDisplay/CHint.vue';
import { defineComponent, computed, toRefs, ref } from 'vue';

export const textareaTypes = ['basic', 'outline', 'reply'];

export default defineComponent({
	name: 'CTextarea',
	inheritAttrs: false,
	props: {
		placeholder: {
			type: String,
			default: '내용을 입력해주세요.',
		},
		/**
		 * 타입(basic, outline, reply)
		 */
		type: {
			type: String,
			default: 'basic',
			validator(value) {
				const isValid = textareaTypes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid value of textarea type`);
				}
				return isValid;
			},
		},
		maxHeight: {
			type: String,
			default: 'auto',
		},
		minHeight: {
			type: String,
			default: null,
		},
		readOnly: {
			type: Boolean,
			default: false,
		},
		value: {
			type: String,
		},
		error: {
			type: Boolean,
		},
		hintMessage: {
			type: String,
			default: '메시지는 선택사항입니다',
		},
	},
	emits: ['update:value', 'input', 'submit'],
	setup(props, { emit }) {
		const { value, type, error, maxHeight, minHeight } = toRefs(props);
		const sync_value = computed({
			get: () => value,
			set: val => emit('update:value', val),
		});

		const classes = computed(() => [`${value.value}`, error.value ? 'c-textarea--error' : null]);

		const computedStyles = computed(() => ({
			'max-height': maxHeight,
			'min-height': minHeight.value ? minHeight : type.value === 'reply' ? '38px' : '110px',
			'overflow-y': maxHeight.value === 'auto' ? 'hidden' : 'auto',
		}));

		const replyIconColor = computed(() => (sync_value.value ? 'blue600' : 'gray200'));

		const isShowHint = computed(() => type.value === 'outline' && error);

		const textareaRef = ref(null);

		const onInput = () => {
			textareaRef.value.style.height = '1px';
			textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
			emit('input', textareaRef.value.value);
		};

		const onSubmitReply = () => {
			if (sync_value.value) {
				emit('submit');
			}
		};

		return {
			sync_value,
			classes,
			computedStyles,
			replyIconColor,
			isShowHint,
			textareaRef,
			onInput,
			onSubmitReply,
		};
	},
	components: { CHint, CIconButton },
});
</script>

<style lang="scss" scoped>
/* 공통 */
.c-textarea {
	position: relative;
	textarea {
		padding: 16px;
		width: 100%;
		border: 0;
		height: 100%;
		box-sizing: border-box;
		background: transparent;
		color: $gray800;
		overflow: hidden;
		@include body1;
		resize: none;
		&::placeholder {
			color: $gray300;
			@include body1;
		}
	}
	&.basic {
		textarea {
			background: $white;
		}
	}
	&.outline {
		textarea {
			background: $white;
			border: 1px solid $input-border-color;
			@include border-radius(4px);
			&:focus {
				border-color: $input-hover-border-color;
			}
		}
		&.c-textarea--error {
			textarea {
				border: 1px solid $red600;
				&::placeholder {
					color: $red100;
				}
			}
		}
	}
	&.reply {
		textarea {
			width: calc(100% - 34px);
			border: 1px solid $input-border-color;
			@include border-radius(4px);
			background: $gray100;
			min-height: 38px;
			height: 38px;
			padding: 8px 16px;
		}
	}

	&--reply-icon {
		margin: auto 0 4px 8px;

		&.active {
			cursor: pointer;
		}
	}
}
</style>
