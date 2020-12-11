<!--
ex) <grid>
        <row>
            <stylecol>
            	<row>
            		<stylecolGroup>
            		<stylecol>
            		</stylecol>
            		</stylecolGroup>
            	</row>
			</stylecol>
        </row>
    </grid>
-->
<template>
	<div class="c-application c-style-col-group" :style="[computedBgColor]">
		<slot />
	</div>
</template>

<script>
import { colors } from '@/src/Elements/Core/Colors';
export default {
	name: 'StyleColGroup',
	props: {
		bgColor: {
			type: String,
			default: 'inherit',
		},
	},
	computed: {
		computedBgColor() {
			return {
				backgroundColor: this.mappedColor,
			};
		},
		mappedColor() {
			return this.bgColor && colors[this.bgColor] ? colors[this.bgColor] : 'inherit';
		},
	},
};
</script>

<style scoped lang="scss">
.c-style-col-group {
	@include clearfix();
	display: flex;
	flex-wrap: wrap;
	margin-right: -16px;
	margin-left: -16px;
	@include pc {
		margin-right: -24px;
		margin-left: -24px;
	}
}
</style>
