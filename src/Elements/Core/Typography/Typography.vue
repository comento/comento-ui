<template>
	<component :is="element" class="c-application" :class="computedClass" :style="computedStyle" v-on="$listeners">
		<slot />
	</component>
</template>

<script>
import { colors } from '@/src/Elements/Core/Colors';

export default {
	name: 'Typography',
	props: {
		element: {
			type: String,
			default: 'div',
		}, // 적용 tag h1,h2,h3,p ...
		// left, center, right
		align: {
			type: String,
			default: 'left',
		},
		color: {
			type: String,
			default: '$gray900',
		},
		fontWeight: {
			type: Number,
			default: undefined,
		},
		type: {
			type: String,
			default: 'body1',
			validator(value) {
				// 값이 항상 아래 세 개의 값중 하나여야 합니다.
				return (
					[
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
					].indexOf(value) !== -1
				);
			},
		},
	},
	computed: {
		mappedColor() {
			return this.color ? colors[this.color] : 'inherit';
		},
		computedStyle() {
			return {
				color: this.mappedColor,
				'text-align': this.align,
				'font-weight': this.fontWeight,
			};
		},
		computedClass() {
			return `c_${this.type}`;
		},
	},
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

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
	line-height: 150%;
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
