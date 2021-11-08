<template>
	<hr
		class="c-application c-divider"
		:style="computedStyle"
		:class="[computedType, computedVertical, computedColor]"
	/>
</template>

<script>
import { colors, colorKeys } from '@/utils/constants/color';

export const dividerTypes = ['line', 'dash'];

/**
 * @displayName c-divider
 */
export default {
	name: 'Divider',
	props: {
		/**
		 * 타입(line, dash)
		 */
		type: {
			type: String,
			default: 'line',
			validator(value) {
				const isValid = dividerTypes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the Divider type`);
				}
				return isValid;
			},
		},
		vertical: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: 'gray200',
			validator(value) {
				const isValid = colorKeys.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the typography color`);
				}
				return isValid;
			},
		},
	},
	data: () => ({}),
	computed: {
		computedType() {
			return this.type;
		},
		computedVertical() {
			if (this.vertical) {
				return 'vertical';
			} else {
				return 'horizontal';
			}
		},
		computedColor() {
			return this.color && colors[this.color] ? colors[this.color] : 'inherit';
		},
		computedStyle() {
			return {
				borderColor: this.computedColor,
			};
		},
	},
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/
.c-divider {
	margin: 0;
	border: 0;
	&.vertical {
		border-left: 1px;
		width: 0;
		height: inherit;
	}
	&.horizontal {
		border-top: 1px;
		width: inherit;
		height: 0;
	}
	&.line {
		border-style: solid;
	}
	&.dash {
		border-style: dashed;
	}
}
</style>
