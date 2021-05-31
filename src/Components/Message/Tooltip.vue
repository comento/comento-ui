<template>
	<v-popover
		class="c-application"
		:placement="mapPlacement"
		:handle-resize="true"
		popover-base-class="c-tooltip"
		popover-arrow-class="c-tooltip--arrow"
		popover-inner-class="c-tooltip--inner"
		:container="false"
		v-bind="$attrs"
		v-on="$listeners"
		@show="$emit('showTooltip')"
	>
		<slot> </slot>
		<template slot="popover">
			<Typography
				class="c-tooltip--content-wrapper"
				:style="styles"
				:type="type === 'tooltip' ? 'body2' : null"
				:color="type === 'tooltip' ? 'gray700' : null"
			>
				<slot name="tooltip"> </slot>
			</Typography>
		</template>
	</v-popover>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';
import customValidator from '@/utils/custom-validator';

export const placements = ['bottom', 'bottom-right', 'bottom-left', 'right-top', 'right', 'right-bottom'];
export const types = ['tooltip', 'popover'];

export default {
	name: 'Tooltip',
	inheritAttrs: false,
	props: {
		type: {
			type: String,
			default: 'tooltip',
			validator(value) {
				return customValidator(value, types.indexOf(value) !== -1, 'Tooltip', 'type');
			},
		},
		placement: {
			type: String,
			default: 'bottom',
			validator(val) {
				const isValid = placements.indexOf(val) !== -1;
				if (!isValid) {
					console.error(`${val} is not a valid props`);
				}
				return isValid;
			},
		},
		paddingX: {
			type: Number,
			default: 12,
			validator(value) {
				return typeof value === 'number';
			},
		},
	},
	computed: {
		mapPlacement() {
			const placementMap = {
				'bottom-right': 'bottom-end',
				bottom: 'bottom',
				'bottom-left': 'bottom-start',
				'right-top': 'right-start',
				right: 'right',
				'right-bottom': 'right-end',
			};
			return placementMap[this.placement];
		},
		styles() {
			return {
				'padding-left': `${this.paddingX}px`,
				'padding-right': `${this.paddingX}px`,
			};
		},
	},
	components: { Typography },
};
</script>

<!--storybook 과의 동기화 때문에 전역으로 적용해야 함-->
<!--main.scss에서 import하는 식으로 하려면 따로 설정해야 함-->
<style lang="scss" scoped>
::v-deep {
	@import '@/assets/style/tooltip/tooltip';
}
</style>
