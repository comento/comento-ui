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
import { colors, colorKeys } from '@/src/Elements/Core/Colors';

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

export const Elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'p'];

export const Aligns = ['left', 'center', 'right'];
export default {
	name: 'Typography',
	props: {
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
			validator(value) {
				const isValid = colorKeys.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the typography color`);
				}
				return isValid;
			},
		},
		fontWeight: {
			type: Number,
			default: undefined,
		},
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
			return this.color && colors[this.color] ? colors[this.color] : 'inherit';
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
}
.c_display1 {
	font-size: 42px;
	line-height: 120%;
	font-weight: bold;
}
.c_headline1 {
	font-size: 32px;
	line-height: 130%;
	font-weight: bold;
}
.c_headline2 {
	font-size: 28px;
	line-height: 130%;
	font-weight: bold;
}
.c_headline3 {
	font-size: 26px;
	line-height: 130%;
	font-weight: bold;
}
.c_headline4 {
	font-size: 24px;
	line-height: 125%;
	font-weight: bold;
}
.c_headline5 {
	font-size: 22px;
	line-height: 135%;
	font-weight: normal;
}
.c_headline6 {
	font-size: 18px;
	line-height: 135%;
	font-weight: bold;
}
.c_body1 {
	font-size: 16px;
	line-height: 150%;
	font-weight: normal;
}
.c_body2 {
	font-size: 14px;
	line-height: 145%;
	font-weight: normal;
}
.c_caption1 {
	font-size: 12px;
	line-height: 115%;
	font-weight: 300;
}
.c_caption2 {
	font-size: 10px;
	line-height: 100%;
	font-weight: 300;
}
</style>
