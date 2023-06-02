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
import { defineComponent } from 'vue';

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
	computed: {
		classes() {
			return [this.computedType, this.computedError];
		},
		computedType() {
			return `${this.type}`;
		},
		computedError() {
			if (this.error) return 'c-textarea--error';
			return null;
		},
		computedStyles() {
			return {
				'max-height': this.maxHeight,
				'min-height': this.minHeight ? this.minHeight : this.type === 'reply' ? '38px' : '110px',
				'overflow-y': this.maxHeight === 'auto' ? 'hidden' : 'auto',
			};
		},
		sync_value: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('update:value', val);
			},
		},
		replyIconColor() {
			if (this.sync_value) {
				return 'blue600';
			} else {
				return 'gray200';
			}
		},
		isShowHint() {
			return this.type === 'outline' && this.error;
		},
	},
	methods: {
		onInput(event) {
			event.target.style.height = '1px';
			event.target.style.height = `${event.target.scrollHeight}px`;
			this.$emit('input', event.target.value);
		},
		onSubmitReply() {
			this.value && this.$emit('submit');
		},
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
