<!--
그리드 적용시 최 상단에 적용해야 합니다
ex) <grid> <- 이부분
        <row>
            <style-col>
        </row>
    </grid>
-->
<template>
	<div class="c-application c-grid" :class="[computedFluid, computedColor]">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'Grid',
	props: {
		/* grid type
		 * container : 1170px
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
		computedColor() {
			if (this.gridColor !== '') {
				return `grid_color_${this.gridColor}`;
			} else {
				return null;
			}
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
	&.grid_color_white {
		background: $white;
	}
	&.grid_color_gray000 {
		background: $gray000;
	}
	&.grid_color_gray100 {
		background: $gray100;
	}
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
			width: 1170px;
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
