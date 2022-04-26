<template>
	<component
		:is="element"
		v-linkify:options="{ className: 'linkified' }"
		class="c-application c-typography"
		:class="computedClass"
		:style="computedStyle"
		v-on="$listeners"
	>
		<slot />
	</component>
</template>

<script>
import linkify from 'vue-linkify';
import { colors } from '@/utils/constants/color';

export const TypographyTypes = [
	'display1',
	'headline1',
	'headline2',
	'headline3',
	'headline4',
	'headline5',
	'headline6',
	'body1',
	'body2',
	'caption1',
	'caption2',
];

export const Elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'p', 'u', 'strong', 'dt', 'dd', 'em'];

export const Aligns = ['left', 'center', 'right'];

export const FontWeights = [300, 400, 500, 600, 'light', 'regular', 'medium', 'semi-bold'];

/**
 * @displayName c-typography
 */
export default {
	name: 'Typography',
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
	computed: {
		computedColor() {
			if (!this.color) return 'inherit';
			return colors[this.color] ? colors[this.color] : this.color;
		},
		isNumberFontWeight() {
			return Number.isInteger(this.fontWeight);
		},
		computedStyle() {
			return [
				{
					color: this.computedColor,
					textAlign: this.align,
				},
				this.isNumberFontWeight && { fontWeight: this.fontWeight },
			];
		},
		computedClass() {
			return [this.type && `c-${this.type}`, this.fontWeightClass];
		},
		fontWeightClass() {
			return this.fontWeight && !this.isNumberFontWeight ? `f-${this.fontWeight}` : '';
		},
	},
	directives: {
		linkify,
	},
};
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
