<template>
	<div class="c-application c-dropdown--container">
		<slot />
		<div v-if="$slots['contents']" class="c-dropdown--wrapper" :style="computedStyle">
			<slot name="contents" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Dropdown',
	props: {
		maxHeight: {
			type: String,
			default: 'auto',
		},
	},
	computed: {
		computedStyle() {
			return {
				maxHeight: this.maxHeight !== 'auto' && this.maxHeight,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.c-dropdown {
	&--container {
		position: relative;
	}

	&--wrapper {
		position: absolute;
		width: 100%;
		padding: 8px 12px;
		background: $white;
		@include shadow4();
		overflow-y: auto;
		box-sizing: border-box;
	}
}
</style>
