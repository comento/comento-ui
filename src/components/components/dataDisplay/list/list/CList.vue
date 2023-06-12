<template>
	<div class="c-application c-list" :class="computedSpacing">
		<slot />
	</div>
</template>

<script>
import { defineComponent, computed, toRefs } from 'vue';

export default defineComponent({
	name: 'CList',
	props: {
		spacing: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		const { spacing } = toRefs(props);
		const computedSpacing = computed(() => spacing.value && 'spacing');
		return { computedSpacing };
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
