<template>
	<div class="c-application c-input-motion-box" :class="[computedAlign]">
		<input
			id="title"
			ref="question"
			v-model="sync_value"
			autocomplete="off"
			type="text"
			class="inputbox full"
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

	.inputbox {
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
	}
	+ .input-motion-box {
		margin-top: 8px;
		@include pc {
			margin-top: 12px;
		}
	}

	@include pc {
		.inputbox {
			margin: 0;
		}
	}
}

.center {
	input {
		text-align: center;
	}
}
</style>
