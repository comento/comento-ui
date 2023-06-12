<template>
	<div class="c-application c-new-row" :class="[computedGutters]">
		<slot />
	</div>
</template>

<script>
import { defineComponent, computed, toRefs } from 'vue';

export default defineComponent({
	name: 'CNewRow',
	props: {
		noGutters: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		const { noGutters } = toRefs(props);
		const computedGutters = computed(() => (noGutters.value ? 'no-gutters' : ''));

		return {
			computedGutters,
		};
	},
});
</script>

<style lang="scss" scoped>
/* Mobile first */
.c-new-row {
	display: flex;
	flex-wrap: wrap;
	margin-right: calc($grid-gutter-width-mobile * (-1) / 2);
	margin-left: calc($grid-gutter-width-mobile * (-1) / 2);
	&.no-gutters {
		margin-right: 0;
		margin-left: 0;
	}
	@include pc {
		margin-right: calc($grid-gutter-width-pc * (-1) / 2);
		margin-left: calc($grid-gutter-width-pc * (-1) / 2);
	}
}
</style>
