<template>
	<div class="c-application c-textarea" :class="[computedType]" :style="[computedStyles]">
		<textarea
			ref="textarea"
			:value="value"
			:style="[computedHeight]"
			:placeholder="placeholder"
			:readonly="readOnly"
			@input="resize"
		/>
	</div>
</template>

<script>
export const textareaTypes = ['basic', 'outlined', 'reply'];
export default {
	name: 'Textarea',
	props: {
		placeholder: {
			type: String,
			default: '내용을 입력해주세요.',
		},
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
	},
	computed: {
		computedType() {
			return `${this.type}`;
		},
		computedHeight() {
			return {
				maxHeight: this.maxHeight,
				overflowY: this.maxHeight === 'auto' ? 'hidden' : 'auto',
			};
		},
		computedStyles() {
			return {
				minHeight: this.minHeight,
			};
		},
	},
	methods: {
		resize(event) {
			event.target.style.height = '1px';
			event.target.style.height = `${event.target.scrollHeight}px`;
			this.$emit('input', event.target.value);
		},
	},
};
</script>

<style scoped lang="scss">
/* 공통 */
.c-textarea {
	position: relative;
	textarea {
		padding: 16px;
		display: block;
		width: 100%;
		border: 0;
		height: 100%;
		box-sizing: border-box;
		min-height: inherit;
		background: transparent;
		color: $gray800;
		overflow: hidden;
		@include body1;
		resize: none;
		&::placeholder {
			color: $gray300;
		}
	}
	&.basic {
		background: $white;
	}
	&.outlined {
		background: $white;
		textarea {
			border: 1px solid $input-border-color;
			&:focus {
				border-color: $input-hover-border-color;
			}
		}
	}
	&.reply {
		width: calc(100% - 100px);
		background: $gray100;
		border: 1px solid $input-border-color;
		@include border-radius(20px);
		textarea {
			min-height: 38px;
			height: 38px;
			padding: 8px 16px;
		}
	}
}
</style>
