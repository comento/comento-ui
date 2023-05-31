<template>
	<div class="c-application c-new-row" :class="[computedGutters]">
		<slot />
	</div>
</template>

<script>
/**
 * @displayName c-new-row
 */
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'NewRow',
	props: {
		noGutters: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		computedGutters() {
			return this.noGutters ? 'no-gutters' : '';
		},
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
