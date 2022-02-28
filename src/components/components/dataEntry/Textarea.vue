<template>
	<div class="c-application c-textarea" :class="[computedType]">
		<textarea
			ref="textarea"
			v-model="sync_value"
			:style="[computedHeight, computedStyles]"
			:placeholder="placeholder"
			:readonly="readOnly"
			v-bind="$attrs"
			v-on="$listeners"
			@input="resize"
		/>
		<Icon
			v-if="type === 'reply' && !readOnly"
			class="c-textarea--reply-icon"
			name="IconSendLargeFill"
			:color="replyIconColor"
			:class="value && 'active'"
			@click="onSubmitReply"
		/>
	</div>
</template>

<script>
import Icon from '@/components/elements/core/icon/Icon';

export const textareaTypes = ['basic', 'outlined', 'reply'];

/**
 * @displayName c-textarea
 */
export default {
	name: 'Textarea',
	inheritAttrs: false,
	props: {
		placeholder: {
			type: String,
			default: '내용을 입력해주세요.',
		},
		/**
		 * 타입(basic, outlined, reply)
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
			default: '110px',
		},
		readOnly: {
			type: Boolean,
			default: false,
		},
		value: {
			type: String,
		},
	},
	computed: {
		computedType() {
			return `${this.type}`;
		},
		computedHeight() {
			return {
				'max-height': this.maxHeight,
				'min-height': this.minHeight,
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
			if (this.value) {
				return 'blue600';
			} else {
				return 'gray200';
			}
		},
	},
	methods: {
		resize(event) {
			event.target.style.height = '1px';
			event.target.style.height = `${event.target.scrollHeight}px`;
			this.$emit('input', event.target.value);
		},
		onSubmitReply() {
			this.value && this.$emit('submit');
		},
	},
	components: { Icon },
};
</script>

<style lang="scss" scoped>
/* 공통 */
.c-textarea {
	display: block;
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
			@include body2;
		}
	}
	&.basic {
		textarea {
			background: $white;
		}
	}
	&.outlined {
		textarea {
			background: $white;
			border: 1px solid $input-border-color;
			@include border-radius(4px);
			&:focus {
				border-color: $input-hover-border-color;
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
		position: relative;
		right: -6px;
		bottom: 8px;

		&.active {
			cursor: pointer;
		}
	}
}
</style>
