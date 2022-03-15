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
	gray500,
	gray800,
	blue000,
	blue100,
	blue400,
	blue600,
	blue800,
	red100,
	red600,
	red800,
	orange100,
	orange600,
	orange800,
	green100,
	green600,
	green800,
	white,
} = colors;

import { buttonColors, ghostTypeButtonColors } from '@/components/components/general/button/Button';

export const LoaderSizes = ['small', 'medium', 'large'];

const colorMap = {
	primary: {
		stroke: blue600,
		fill: blue100,
	},
	'primary-reversed': {
		stroke: white,
		fill: blue800,
	},
	'light-primary': {
		stroke: blue400,
		fill: blue000,
	},
	'light-primary-reversed': {
		stroke: blue000,
		fill: blue400,
	},
	success: {
		stroke: green600,
		fill: green100,
	},
	'success-reversed': {
		stroke: white,
		fill: green800,
	},
	error: {
		stroke: red600,
		fill: red100,
	},
	'error-reversed': {
		stroke: white,
		fill: red800,
	},
	secondary: {
		stroke: orange600,
		fill: orange100,
	},
	'secondary-reversed': {
		stroke: white,
		fill: orange800,
	},
	info: {
		stroke: gray800,
		fill: gray400,
	},
	'info-reversed': {
		stroke: gray800,
		fill: gray500,
	},
	white: {
		stroke: gray500,
		fill: gray200,
	},
	'white-reversed': {
		stroke: gray200,
		fill: gray500,
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
		 * 색상(primary, light-primary, success, error, secondary, info)
		 */
		color: {
			type: String,
			default: 'info',
			validator(value) {
				return [...buttonColors, ...ghostTypeButtonColors].includes(value);
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
