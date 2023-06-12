<template>
	<component
		:is="element"
		class="c-application c-typography"
		:class="computedClass"
		:style="computedStyle"
		v-bind="$attrs"
	>
		<slot />
	</component>
</template>

<script>
import { colors } from '@/utils/constants/color';
import { defineComponent, toRefs, computed } from 'vue';

export const TypographyTypes = [
	'display1',
	'headline1',
	'headline2',
	'headline3',
	'headline4',
	'headline5',
	'headline6',
	'headline7',
	'body1',
	'body2',
	'caption1',
	'caption2',
];

export const Elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'p', 'u', 'strong', 'dt', 'dd', 'em'];

export const Aligns = ['left', 'center', 'right'];

export const FontWeights = [300, 400, 500, 600, 'light', 'regular', 'medium', 'semi-bold'];

export default defineComponent({
	name: 'CTypography',
	props: {
		/**
		 * 태그(h1~6, span, div, p, u, strong, dt, dd, em)
		 */
		element: {
			type: String,
			default: 'div',
			validator(value) {
				const isValid = Elements.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the typography element type`);
				}
				return isValid;
			},
		},
		/**
		 * 정렬(left, center, right)
		 */
		align: {
			type: String,
			default: null,
			validator(value) {
				const isValid = Aligns.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the typography align type`);
				}
				return isValid;
			},
		},
		color: {
			type: String,
			default: null,
		},
		/**
		 * 굵기(300~600, light, regular, medium, semi-bold)
		 */
		fontWeight: {
			type: [Number, String],
			default: null,
			validator(value) {
				const isValid = FontWeights.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the typography font weight`);
				}
				return isValid;
			},
		},
		/**
		 * 타입(display1, headline1~6, body1~2, caption1~2)
		 */
		type: {
			type: String,
			default: null,
			validator(value) {
				const isValid = [...TypographyTypes].indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid props`);
				}
				return isValid;
			},
		},
	},
	setup(props) {
		const { color, fontWeight, align, type } = toRefs(props);

		const computedColor = computed(() => {
			if (!color.value) return 'inherit';
			return colors[color.value] ? colors[color.value] : color.value;
		});

		const isNumberFontWeight = computed(() => {
			return Number.isInteger(fontWeight.value);
		});

		const computedStyle = computed(() => {
			return [
				{
					color: computedColor.value,
					textAlign: align.value,
				},
				isNumberFontWeight.value && { fontWeight: fontWeight.value },
			];
		});

		const computedClass = computed(() => {
			return [type.value && `c-${type.value}`, fontWeightClass.value];
		});

		const fontWeightClass = computed(() => {
			return fontWeight.value && !isNumberFontWeight.value ? `f-${fontWeight.value}` : '';
		});

		return {
			computedColor,
			isNumberFontWeight,
			computedStyle,
			computedClass,
			fontWeightClass,
		};
	},
});
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6,
span,
div,
p {
	word-break: keep-all;
	word-wrap: break-word;
}

.c-display1 {
	@include display1();
}
.c-headline1 {
	@include headline1();
}
.c-headline2 {
	@include headline2();
}
.c-headline3 {
	@include headline3();
}
.c-headline4 {
	@include headline4();
}
.c-headline5 {
	@include headline5();
}
.c-headline6 {
	@include headline6();
}
.c-headline7 {
	@include headline7();
}
.c-body1 {
	@include body1();
}
.c-body2 {
	@include body2();
}
.c-caption1 {
	@include caption1();
}
.c-caption2 {
	@include caption2();
}
</style>
