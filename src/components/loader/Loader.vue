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
import IconSpinnerXLarge from '@/assets/images/icon/xlarge/icon-spinner-xlarge.svg?inline';
import { colors } from '@/utils/constants/color.js';
const {
	gray200,
	gray500,
	gray600,
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

import { buttonColors, ghostTypeButtonColors } from '@/components/button/Button.vue';

export const LoaderSizes = ['small', 'medium', 'large', 'xlarge'];

const colorMap = {
	primary: {
		stroke: blue100,
		fill: blue600,
	},
	'primary-reversed': {
		stroke: blue800,
		fill: white,
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
		stroke: green100,
		fill: green600,
	},
	'success-reversed': {
		stroke: green800,
		fill: white,
	},
	error: {
		stroke: red100,
		fill: red600,
	},
	'error-reversed': {
		stroke: red800,
		fill: white,
	},
	secondary: {
		stroke: orange100,
		fill: orange600,
	},
	'secondary-reversed': {
		stroke: orange800,
		fill: white,
	},
	info: {
		stroke: gray200,
		fill: gray600,
	},
	'info-reversed': {
		stroke: gray500,
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
		 * 크기(small, medium, large, xlarge)
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
		capitalizedSize() {
			switch (this.size) {
				case 'xlarge':
					return this.size.substr(0, 2).toUpperCase() + this.size.slice(2);
				default:
					return this.size.charAt(0).toUpperCase() + this.size.slice(1);
			}
		},
		computedName() {
			return `IconSpinner${this.capitalizedSize}`;
		},
	},
	watch: {
		color() {
			this.changeColor();
		},
		reversed() {
			this.changeColor();
		},
	},
	mounted() {
		this.changeColor();
	},
	methods: {
		changeColor() {
			const colorMapKey = this.reversed ? `${this.color}-reversed` : this.color;
			this.$refs['icon'].querySelectorAll('.circle')[0].setAttribute('stroke', colorMap[colorMapKey]['stroke']);
			this.$refs['icon'].querySelectorAll('.quarter')[0].setAttribute('fill', colorMap[colorMapKey]['fill']);
		},
	},
	components: {
		IconSpinnerSmall,
		IconSpinnerMedium,
		IconSpinnerLarge,
		IconSpinnerXLarge,
	},
};
</script>

<style lang="scss" scoped>
.c-icon {
	cursor: wait;
	background: transparent !important;
}
</style>
