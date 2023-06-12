<template>
	<component :is="element" class="c-application c-box" :class="classes" :style="styles" v-bind="$attrs">
		<slot />
	</component>
</template>

<script>
import { setBackgroundColor, setBorderColor } from '@/utils/get-colors';
import getPadding from '@/utils/get-padding';
import { defineComponent, computed, toRefs } from 'vue';
import useWindowResize from '@/services/useWindowResize';
export const Elements = ['div', 'article'];

export default defineComponent({
	name: 'CBox',
	props: {
		hasBorder: {
			type: Boolean,
			default: false,
		},
		backgroundColor: {
			type: String,
			default: null,
		},
		borderColor: {
			type: String,
			default: null,
		},
		paddings: {
			type: Array,
			default() {
				return null;
			},
		},
		hasShadow: {
			type: Boolean,
			default: false,
		},
		element: {
			type: String,
			default: 'div',
		},
	},
	setup(props) {
		const { hasBorder, hasShadow, paddings, backgroundColor, borderColor } = toRefs(props);
		const { isMobile } = useWindowResize();
		const classes = computed(() => ({
			'c-box--has-border': hasBorder,
			'c-box--has-shadow': hasShadow,
		}));

		const styles = computed(() => {
			let boxPaddings;
			if (!paddings.value) {
				if (isMobile) {
					boxPaddings = [16, 16, 16, 16];
				} else {
					boxPaddings = [16, 20, 16, 20];
				}
			} else {
				boxPaddings = paddings;
			}
			return {
				...(backgroundColor.value && setBackgroundColor(backgroundColor)),
				...(borderColor.value && setBorderColor(borderColor)),
				...getPadding(boxPaddings),
			};
		});

		return {
			classes,
			styles,
		};
	},
});
</script>

<style lang="scss" scoped>
.c-box {
	display: block;
	&--has-border {
		border: 1px solid;
		border-radius: 2px;
	}
	&--has-shadow {
		@include shadow2();
	}
}
</style>
