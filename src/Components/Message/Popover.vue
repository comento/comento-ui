<template>
	<v-popover
		v-bind="$attrs"
		class="c-application"
		:placement="mapPlacement"
		:handle-resize="true"
		popover-base-class="c-popover"
		popover-arrow-class="c-popover_arrow"
		popover-inner-class="c-popover_inner"
		v-on="$listeners"
		@show="$emit('showPopover')"
	>
		<slot> </slot>
		<template slot="popover">
			<Typography class="c-pointer c-popover--contents-wrapper" :style="styles" type="body2" color="gray800">
				<slot name="popover"> </slot>
			</Typography>
		</template>
	</v-popover>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';
export default {
	name: 'Popover',
	inheritAttrs: false,
	props: {
		placement: {
			type: String,
			default: 'bottom',
		},
	},
	computed: {
		mapPlacement() {
			const placementMap = {
				'bottom-right': 'bottom-end',
				bottom: 'bottom',
				'bottom-left': 'bottom-start',
			};
			return placementMap[this.placement];
		},
	},
	components: { Typography },
};
</script>

<!--storybook 과의 동기화 때문에 전역으로 적용해야 함-->
<!--main.scss에서 import하는 식으로 하려면 따로 설정해야 함-->
<style lang="scss">
@import '@/assets/style/tooltip/popover';
</style>
