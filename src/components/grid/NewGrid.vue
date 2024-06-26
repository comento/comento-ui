<template>
	<div class="c-application c-new-grid" :class="[computedFluid]" :style="[computedBgColor]">
		<slot />
	</div>
</template>

<script>
import { colors } from '@/utils/constants/color.js';

/**
 * @displayName c-new-grid
 */
export default {
	name: 'NewGrid',
	props: {
		fluid: {
			type: Boolean,
			default: false,
		},
		gridColor: {
			type: String,
			default: '',
		},
	},
	computed: {
		computedFluid() {
			return `${this.fluid ? 'fluid' : 'container'}`;
		},
		computedColor() {
			return this.gridColor && colors[this.gridColor] ? colors[this.gridColor] : 'inherit';
		},
		computedBgColor() {
			return {
				backgroundColor: this.computedColor,
			};
		},
	},
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

/* Mobile first */
.c-new-grid {
	position: relative;
	width: 100%;
	padding-right: 16px;
	padding-left: 16px;
	margin-right: auto;
	margin-left: auto;
	box-sizing: border-box;
	&.fluid {
		padding: 0;
	}
	&.container {
		max-width: 100vw;
		@include pc {
			max-width: $container-max-width-pc;
		}
	}
}

.main-grid-component {
	padding-top: 48px !important;
	overflow-x: hidden;
	-ms-overflow-x: hidden;
	height: 100%;

	@include pc {
		padding-top: 70px !important;
	}
}
</style>
