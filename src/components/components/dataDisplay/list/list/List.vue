<template>
	<div class="c-application c-list" :class="computedSpacing">
		<slot />
	</div>
</template>

<script>
import { defineComponent } from 'vue';

/**
 * @displayName c-list
 */
export default defineComponent({
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
});
</script>

<style lang="scss" scoped>
.c-list {
	background: $white;

	// 마지막 divider 숨기기
	hr:last-child {
		display: none;
	}

	&.spacing {
		> .c-list-item + .c-list-item {
			margin-top: 12px;
		}
	}
}
</style>
