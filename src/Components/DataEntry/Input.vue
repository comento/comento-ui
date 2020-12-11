<template>
	<div class="c-application c-input--motion-box" :class="[computedAlign, computedFull, computedType]">
		<input
			:id="computedId"
			ref="question"
			v-model="sync_value"
			autocomplete="off"
			type="text"
			class="c-input--box full"
			:class="[computedAlign, computedError]"
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
			validator(value) {
				return ['left', 'center'].indexOf(value) !== -1;
			},
		},
		id: {
			type: String,
			default: '',
		},
		full: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		type: {
			type: String,
			default: 'outlined',
			validator(value) {
				return ['outlined', 'underlined'].indexOf(value) !== -1;
			},
		},
		error: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
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
		computedId() {
			return this.id || `input-${this._uid}`;
		},
		computedType() {
			return this.type;
		},
		computedFull() {
			return this.full && 'full';
		},
		computedError() {
			return this.error && 'error';
		},
	},
	methods: {
		typing(e) {
			this.sync_value = e.target.value;
		},
	},
};
</script>

<style lang="scss" scoped>
input {
	&::placeholder {
		@include body1();
		color: $gray300;
	}
}

.c-input {
	&--motion-box {
		@include clearfix();
		position: relative;

		&.full {
			width: 100%;
			.c-input--box {
				width: 100%;
			}
		}

		&.underlined {
			.c-input--box {
				border-top: 0;
				border-left: 0;
				border-right: 0;
				border-radius: 0;
				padding: 0 4px;

				&.error {
					border-radius: 0;
				}
			}
		}

		.c-input--box {
			box-sizing: border-box;
			height: 40px;
			line-height: 24px;
			padding: 0 16px;
			font-size: 16px;
			border: 1px solid $gray200;
			@include border-radius(3px);
			-webkit-appearance: none;
			@include inline-block();
			vertical-align: top;
			@include transition(all 0.2s ease);
			color: $gray800;
			&-lg {
				height: 48px;
			}

			&.error {
				border-color: $red600;
			}

			@include pc {
				margin: 0;
			}
		}

		&.center {
			input {
				text-align: center;
			}
		}
	}
}
</style>
