<template>
	<div class="c-application c-row" :class="[computedGutters]">
		<slot />
	</div>
</template>

<script>
import { defineComponent, computed, toRefs } from 'vue';

/**
 * [deprecated]
 */
export default defineComponent({
	name: 'CRow',
	props: {
		rowGutters: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		const { rowGutters } = toRefs(props);

		const computedGutters = computed(() => {
			return rowGutters.value ? 'no-gutters' : '';
		});

		return {
			computedGutters,
		};
	},
});
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

/* Mobile first */
.c-row {
	display: flex;
	flex-wrap: wrap;
	margin-right: -16px;
	margin-left: -16px;
	&.no-gutters {
		margin-right: 0;
		margin-left: 0;
	}
}
@include pc {
	.c-row {
		margin-right: -24px;
		margin-left: -24px;
		&.no-gutters {
			margin-right: 0;
			margin-left: 0;
		}
	}
}
</style>
