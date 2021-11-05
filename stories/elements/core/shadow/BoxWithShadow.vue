<template>
	<div class="c-application c-box" :class="classes">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'BoxWithShadow',
	props: {
		shadowType: {
			type: String,
			default: '',
			validator(value) {
				return ['', 'shadow1', 'shadow2', 'shadow3', 'shadow4'].indexOf(value) !== -1;
			},
		},
	},
	computed: {
		classes() {
			return `c-box--${this.shadowType}`;
		},
	},
};
</script>

<style lang="scss" scoped>
.c-box {
	display: inline-block;
	padding: 10px;
	&--shadow1 {
		@include shadow1();
	}
	&--shadow2 {
		@include shadow2();
	}
	&--shadow3 {
		@include shadow3();
	}
	&--shadow4 {
		@include shadow4();
	}
}
</style>
