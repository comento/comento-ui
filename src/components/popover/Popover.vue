<template>
	<v-popover
		class="c-application"
		:placement="mapPlacement"
		handle-resize
		:popover-base-class="`c-popover ${color}`"
		popover-arrow-class="c-popover--arrow"
		popover-inner-class="c-popover--inner"
		:popper-options="popperOptions"
		:container="container"
		v-bind="$attrs"
		v-on="$listeners"
		@show="$emit('showPopover')"
	>
		<slot> </slot>
		<template slot="popover">
			<div class="c-pointer c-popover--content-wrapper" :style="styles">
				<slot name="popover" />
			</div>
		</template>
	</v-popover>
</template>

<script>
import { placements, placementMap } from '@/utils/constants/tooltip.js';

export const POPOVER_COLORS = ['white', 'black'];

/**
 * @displayName c-popover
 */
export default {
	name: 'Popover',
	inheritAttrs: false,
	props: {
		/**
		 * 위치(top, top-right, top-left, bottom, bottom-right, bottom-left, right-top, right, right-bottom)
		 */
		placement: {
			type: String,
			default: 'bottom',
			validator(value) {
				return placements.indexOf(value) !== -1;
			},
		},
		paddingX: {
			type: Number,
			default: 12,
			validator(value) {
				return typeof value === 'number';
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
				return POPOVER_COLORS.includes(value);
			},
		},
	},
	computed: {
		mapPlacement() {
			return placementMap[this.placement];
		},
		styles() {
			return {
				'padding-left': `${this.paddingX}px`,
				'padding-right': `${this.paddingX}px`,
			};
		},
	},
};
</script>
