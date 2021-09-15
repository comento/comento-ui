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

export const Elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'p', 'u', 'strong', 'dt', 'dd', 'em'];

export const Aligns = ['left', 'center', 'right'];

export const FontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900, 'normal', 'bold', 'lighter', 'bolder'];

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
	word-wrap: break-word;
}

@mixin trans-font-size($size, $line, $math: round) {
	font-size: $size;
	@if $math == 'round' {
		line-height: round($size * $line);
	} @else if $math == 'floor' {
		line-height: floor($size * $line);
	}
}

.c_display1 {
	@include trans-font-size(42px, 1.2);
	font-weight: bold;
}
.c_headline1 {
	@include trans-font-size(32px, 1.25);
	font-weight: bold;
}
.c_headline2 {
	@include trans-font-size(28px, 1.3);
	font-weight: bold;
}
.c_headline3 {
	@include trans-font-size(26px, 1.3);
	font-weight: bold;
}
.c_headline4 {
	@include trans-font-size(24px, 1.25);
	font-weight: bold;
}
.c_headline5 {
	@include trans-font-size(22px, 1.3);
	font-weight: normal;
}
.c_headline6 {
	@include trans-font-size(18px, 1.35);
	font-weight: bold;
}
.c_body1 {
	@include trans-font-size(16px, 1.5);
	font-weight: normal;
}
.c_body2 {
	@include trans-font-size(14px, 1.45);
	font-weight: normal;
}

.c_caption1 {
	@include trans-font-size(12px, 1.15);
	font-weight: 300;
}
.c_caption2 {
	@include trans-font-size(10px, 1.15, floor);
	font-weight: 300;
}
</style>
