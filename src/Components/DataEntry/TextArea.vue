<template>
	<div class="c-textarea" :class="[computedType]">
		<textarea
			ref="input"
			v-model="sync_value"
			:placeholder="placeholder"
			:style="inputStyle"
			@input="$emit('input', $event.target.value)"
		/>
	</div>
</template>

<script>
export default {
	name: 'TextArea',
	props: {
		// textarea placeholder 문구
		placeholder: {
			type: String,
			default: null,
		},
		/* textarea type
		 * default : 흰화면
		 * reply : 회색 + border */
		type: {
			type: String,
			default: 'default',
		},
		value: {
			type: String,
			default: null,
		},
	},
	data() {
		return {
			inputHeight: '176',
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
		computedType() {
			return `${this.type}`;
		},
		inputStyle() {
			return {
				'min-height': this.inputHeight,
			};
		},
	},
	watch: {
		sync_value() {
			this.resize();
		},
	},
	mounted() {
		this.resize();
	},
	methods: {
		resize() {
			this.inputHeight = `${this.$refs.input.scrollHeight}px`;
		},
	},
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

/* 공통 */
.c-textarea {
	position: relative;
	textarea {
		width: 100%;
		height: 176px;
		padding: 16px;
	}
	/* 기본 - type_default */
	&.default {
		textarea {
			border: 1px solid $gray200;
		}
	}
	/* 기본 - type_reply */
	&.reply {
		textarea {
			border-radius: 20px;
			border: 1px solid $gray200;
			background: $gray100;
			min-height: 40px;
			height: 40px;
			padding-top: 8px;
			padding-bottom: 8px;
		}
	}
}
</style>
