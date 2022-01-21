<template>
	<component
		:is="element"
		class="c-application c-typography"
		:class="computedClass"
		:style="computedStyle"
		v-on="$listeners"
	>
		<slot />
	</component>
</template>

<script>
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

export const FontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900, 'normal', 'bold', 'lighter', 'bolder'];

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
		 * 굵기(100~900, normal, bold, lighter, bolder)
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
		computedStyle() {
			return {
				color: this.computedColor,
				'text-align': this.align,
				'font-weight': this.fontWeight,
			};
		},
		computedClass() {
			return this.type ? `c_${this.type}` : null;
		},
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

.c_display1 {
	@include display1();
}
.c_headline1 {
	@include headline1();
}
.c_headline2 {
	@include headline2();
}
.c_headline3 {
	@include headline3();
}
.c_headline4 {
	@include headline4();
}
.c_headline5 {
	@include headline5();
}
.c_headline6 {
	@include headline6();
}
.c_body1 {
	@include body1();
}
.c_body2 {
	@include body2();
}

.c_caption1 {
	@include caption1();
}
.c_caption2 {
	@include caption2();
}
</style>
