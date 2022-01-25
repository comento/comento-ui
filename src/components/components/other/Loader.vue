<template>
	<!--컴포넌트 전환시 캐싱 가능 keep-alive-->
	<keep-alive>
		<component :is="computedName" ref="icon" class="c-application c-icon" v-bind="$attrs" v-on="$listeners" />
	</keep-alive>
</template>

<script>
// spinner
import IconSpinnerSmall from '@/assets/images/icon/small/icon-spinner-small.svg?inline';
import IconSpinnerMedium from '@/assets/images/icon/medium/icon-spinner-medium.svg?inline';
import IconSpinnerLarge from '@/assets/images/icon/large/icon-spinner-large.svg?inline';
import { colors } from '@/utils/constants/color';
const {
	gray200,
	gray400,
	gray800,
	blue000,
	blue100,
	blue400,
	blue800,
	red100,
	red800,
	orange800,
	green100,
	green800,
	white,
} = colors;

import { buttonColors } from '@/components/components/general/button/Button';

export const LoaderSizes = ['small', 'medium', 'large'];
export const LoaderColors = buttonColors;

const colorMap = {
	primary: {
		stroke: blue100,
		fill: blue800,
	},
	'primary-reversed': {
		stroke: blue800,
		fill: white,
	},
	'light-primary': {
		stroke: '#E8EAED',
		fill: red800,
	},
	'light-primary-reversed': {
		stroke: blue000,
		fill: blue400,
	},
	success: {
		stroke: green100,
		fill: green800,
	},
	'success-reversed': {
		stroke: green800,
		fill: white,
	},
	error: {
		stroke: red100,
		fill: red800,
	},
	'error-reversed': {
		stroke: red800,
		fill: white,
	},
	secondary: {
		stroke: gray200,
		fill: orange800,
	},
	'secondary-reversed': {
		stroke: orange800,
		fill: white,
	},
	gray: {
		stroke: '#979CA2',
		fill: gray400,
	},
	'gray-reversed': {
		stroke: '#979CA2',
		fill: gray800,
	},
};

/**
 * @displayName c-loader
 */
export default {
	name: 'Loader',
	props: {
		/**
		 * 크기(small, medium, large)
		 */
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return LoaderSizes.includes(value);
			},
		},
		/**
		 * 색상(secondary, primary, success, error)
		 */
		color: {
			type: String,
			default: 'secondary',
			validator(value) {
				return buttonColors.includes(value);
			},
		},
		reversed: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		computedName() {
			const capitalizedSize = this.size.charAt(0).toUpperCase() + this.size.slice(1);
			return `IconSpinner${capitalizedSize}`;
		},
	},
	mounted() {
		const colorMapKey = this.reversed ? `${this.color}-reversed` : this.color;
		this.$refs['icon'].querySelectorAll('.circle')[0].setAttribute('stroke', colorMap[colorMapKey]['stroke']);
		this.$refs['icon'].querySelectorAll('.quarter')[0].setAttribute('fill', colorMap[colorMapKey]['fill']);
	},
	components: {
		IconSpinnerSmall,
		IconSpinnerMedium,
		IconSpinnerLarge,
	},
};
</script>

<style lang="scss" scoped>
.c-icon {
	cursor: wait;
	background: transparent !important;
}
</style>
