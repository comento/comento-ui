<template>
	<div class="c-application c-list" :class="computedSpacing">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'List',
	props: {
		spacing: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		computedSpacing() {
			return this.spacing && 'spacing';
		},
	},
};
</script>

<style lang="scss" scoped>
.c-list {
	background: $white;

	// 마지막 divider 숨기기
	hr:last-child {
		display: none;
	}

	&.spacing {
		> .c-list-item {
			margin: 6px 0;

			&:first-child,
			&:last-child {
				margin-top: 0;
			}
		}
	}
}
</style>
