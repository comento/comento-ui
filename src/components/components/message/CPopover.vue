<template>
	<v-popover
		class="c-application"
		:placement="mapPlacement"
		:handle-resize="true"
		popover-base-class="c-popover"
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
			<CTypography class="c-pointer c-popover--content-wrapper" :style="styles" type="body2" color="gray800">
				<slot name="popover"> </slot>
			</CTypography>
		</template>
	</v-popover>
</template>

<script>
import CTypography from '@/components/elements/core/typography/CTypography';
import { placements, placementMap } from '@/utils/constants/tooltip';

export default {
	name: 'CPopover',
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
	components: { CTypography },
};
</script>
