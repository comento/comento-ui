<template>
	<v-popover
		class="c-application"
		:placement="mapPlacement"
		:handle-resize="true"
		popover-base-class="c-popover"
		popover-arrow-class="c-popover_arrow"
		popover-inner-class="c-popover_inner"
		@show="$emit('showPopOver')"
	>
		<slot> </slot>
		<template slot="popover">
			<Typography class="c-pointer popover_contents_wrapper" type="caption1" color="gray700" align="center">
				<slot name="popover"> </slot>
			</Typography>
		</template>
	</v-popover>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';
export default {
	name: 'Popover',
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
