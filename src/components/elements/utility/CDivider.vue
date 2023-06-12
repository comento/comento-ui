<template>
	<hr
		class="c-application c-divider"
		:style="computedStyle"
		:class="[computedType, computedVertical, computedColor]"
	/>
</template>

<script>
import { colors, colorKeys } from '@/utils/constants/color';
import { defineComponent, toRefs, computed } from 'vue';

export const dividerTypes = ['line', 'dash'];

export default defineComponent({
	name: 'CDivider',
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
	setup(props) {
		const { type, vertical, color } = toRefs(props);

		const computedType = computed(() => {
			return type.value;
		});

		const computedVertical = computed(() => {
			if (vertical.value) {
				return 'vertical';
			} else {
				return 'horizontal';
			}
		});

		const computedColor = computed(() => {
			return color.value && colors[color.value] ? colors[color.value] : 'inherit';
		});

		const computedStyle = computed(() => {
			return {
				borderColor: computedColor.value,
			};
		});

		return {
			computedType,
			computedVertical,
			computedColor,
			computedStyle,
		};
	},
});
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
