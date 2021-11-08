<template>
	<v-popover
		class="c-application"
		:placement="mapPlacement"
		:handle-resize="true"
		popover-base-class="c-tooltip"
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
			<Typography class="c-tooltip--content-wrapper" type="body2" color="gray700">
				<slot name="popover"> </slot>
			</Typography>
		</template>
	</v-popover>
</template>

<script>
import Typography from '@/components/elements/core/typography/Typography';

export const placements = ['bottom', 'bottom-right', 'bottom-left', 'right-top', 'right', 'right-bottom'];

/**
 * @displayName c-tooltip
 */
export default {
	name: 'Tooltip',
	inheritAttrs: false,
	props: {
		/**
		 * 위치(bottom, bottom-right, bottom-left, right-top, right, right-bottom)
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
	},
	components: { Typography },
};
</script>
