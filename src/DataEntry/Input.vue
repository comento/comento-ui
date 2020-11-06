<template>
	<div class="c-application c-input-motion-box" :class="[computedAlign, computedFull, computedType]">
		<input
			id="title"
			ref="question"
			v-model="sync_value"
			autocomplete="off"
			type="text"
			class="c-input-box full"
			:class="[computedAlign]"
			:placeholder="placeholder"
			:style="computedStyle"
			v-bind="$attrs"
			v-on="$listeners"
			@input="typing"
		/>
	</div>
</template>

<script>
export default {
	name: 'Input',
	inheritAttrs: false,
	props: {
		placeholder: {
			type: String,
			default: '내용을 입력해주세요.',
		},
		float: {
			type: String,
			default: 'left',
		},
		value: [String, Number],
		align: {
			type: String,
			default: 'left',
		},
		full: {
			type: Boolean,
			default: false,
		},
		type: {
			type: String,
			default: 'outlined',
			validator(value) {
				return ['outlined', 'underlined'].indexOf(value) !== -1;
			},
		},
	},
	computed: {
		computedStyle() {
			return {
				float: this.float,
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
		computedAlign() {
			return this.align;
		},
		computedType() {
			return this.type;
		},
		computedFull() {
			return this.full && 'full';
		},
	},
	methods: {
		typing(e) {
			this.sync_value = e.target.value;
		},
	},
};
</script>

<style scoped lang="scss">
input {
	&::placeholder {
		@include body1();
		color: $gray300;
	}
}

.c-input-motion-box {
	@include clearfix();
	position: relative;

	&.full {
		width: 100%;
		.c-input-box {
			width: 100%;
		}
	}

	&.underlined {
		.c-input-box {
			border-top: 0;
			border-left: 0;
			border-right: 0;
			height: 36px;
			padding: 0 4px;
		}
	}

	.c-input-box {
		box-sizing: border-box;
		height: 40px;
		line-height: 24px;
		padding: 0 12px;
		font-size: 16px;
		border: 1px solid $gray200;
		@include border-radius(3px);
		-webkit-appearance: none;
		@include inline-block();
		vertical-align: top;
		@include transition(all 0.2s ease);
		&-lg {
			height: 48px;
		}

		@include pc {
			margin: 0;
		}
	}
	+ .input-motion-box {
		margin-top: 8px;
		@include pc {
			margin-top: 12px;
		}
	}
}

.center {
	input {
		text-align: center;
	}
	::-webkit-input-placeholder {
		text-align: center;
	}

	:-moz-placeholder {
		/* Firefox 18- */
		text-align: center;
	}

	::-moz-placeholder {
		/* Firefox 19+ */
		text-align: center;
	}

	:-ms-input-placeholder {
		text-align: center;
	}
}
</style>
