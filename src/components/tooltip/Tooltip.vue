<template>
	<v-popover
		class="c-application"
		:placement="mapPlacement"
		handle-resize
		:popover-base-class="`c-tooltip ${color}`"
		popover-arrow-class="c-tooltip--arrow"
		popover-inner-class="c-tooltip--inner"
		:popper-options="popperOptions"
		:container="container"
		v-bind="$attrs"
		v-on="$listeners"
		@show="$emit('showTooltip')"
	>
		<slot> </slot>
		<template slot="popover">
			<Typography class="c-tooltip--content-wrapper" type="body2" :color="typographyColor">
				<slot name="popover" />
			</Typography>
		</template>
	</v-popover>
</template>

<script>
import Typography from '@/components/typography/Typography.vue';
import { placements, placementMap } from '@/utils/constants/tooltip.js';

export const TOOLTIP_COLORS = ['white', 'black'];

/**
 * @displayName c-tooltip
 */
export default {
	name: 'Tooltip',
	inheritAttrs: false,
	props: {
		/**
		 * 위치(top, top-right, top-left, bottom, bottom-right, bottom-left, right-top, right, right-bottom, left-top, left, left-bottom)
		 */
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
		flip: {
			type: Boolean,
			default: false,
		},
		popperOptions: {
			type: Object,
			default() {
				return {
					modifiers: {
						flip: {
							enabled: false,
						},
						preventOverflow: {
							escapeWithReference: true,
						},
					},
				};
			},
		},
		container: {
			type: [Boolean, String],
			default: false,
		},
		color: {
			type: String,
			default: 'white',
			validator(value) {
				return TOOLTIP_COLORS.includes(value);
			},
		},
	},
	computed: {
		mapPlacement() {
			return placementMap[this.placement];
		},
		typographyColor() {
			return this.color === 'white' ? 'gray700' : 'white';
		},
	},
	components: { Typography },
};
</script>
