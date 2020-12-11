<!--
그리드 적용시 최 상단에 적용해야 합니다
ex) <grid> <- 이부분
        <row>
            <style-col>
        </row>
    </grid>
-->
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
		/* grid type
		 * container : 1140px
		 * fluid: 100%
		 * */
		fluid: {
			type: Boolean,
			default: false,
		},
		/* grid color (배경색상
		 * gray000
		 * */
		gridColor: {
			type: String,
			default: '',
		},
	},
	computed: {
		computedFluid() {
			return `grid_type_${this.fluid ? 'fluid' : 'container'}`;
		},
		computedBgColor() {
			return {
				backgroundColor: this.mappedColor,
			};
		},
		mappedColor() {
			return this.gridColor ? colors[this.gridColor] : 'inherit';
		},
	},
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

/* Mobile first */
.c-grid {
	position: relative;
	padding-right: 16px;
	padding-left: 16px;
	margin-right: auto;
	margin-left: auto;
	width: 100%;
	box-sizing: border-box;
	&.grid_type_fluid {
		width: 100%;
		padding: 0;
	}
}
@include pc {
	.c-grid {
		padding-right: 24px;
		padding-left: 24px;
		&.grid_type_container {
			max-width: 1140px;
			width: 100%;
		}
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
