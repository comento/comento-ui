<template>
	<div class="c-application c-grid" :class="[computedFluid]" :style="[computedBgColor]">
		<slot />
	</div>
</template>

<script>
import { colors } from '@/src/Elements/Core/Colors';
export default {
	name: 'Grid',
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
.c-grid {
	position: relative;
	width: 100%;
	padding-right: 16px;
	padding-left: 16px;
	margin-right: auto;
	margin-left: auto;
	box-sizing: border-box;
	&.fluid {
		width: 100%;
		padding: 0;
	}
}
@include pc {
	.c-grid {
		&.container {
			max-width: $container-max-width-mobile;
			width: 100%;
			@include pc {
				max-width: $container-max-width-pc;
			}
		}
		//&::v-deep > .c-row {
		//	margin-right: -24px;
		//	margin-left: -24px;
		//}
	}
}

.main_grid_component {
	padding-top: 48px !important;
	overflow-x: hidden;
	-ms-overflow-x: hidden;
	height: 100%;

	@include pc {
		padding-top: 70px !important;
	}
}
</style>
