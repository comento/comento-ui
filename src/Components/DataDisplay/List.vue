<template>
	<div class="c-application c-list_container" :style="computedStyle">
		<slot name="label"></slot>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'List',
	props: {
		maxItemsLengthToShow: {
			type: Number,
			default: null,
		},
		itemHeight: {
			type: Number,
			default: null,
		},
	},
	computed: {
		computedStyle() {
			if (this.maxItemsLengthToShow && this.itemHeight) {
				return {
					height: `${this.maxItemsLengthToShow * this.itemHeight}px`,
					'overflow-y': 'auto',
				};
			} else {
				return null;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
/*@import '@/assets/style/base/main';*/

.c-list_container {
	background: $white;

	> li {
		&:last-child > hr {
			display: none;
		}
	}
}
</style>
