<template>
	<!--컴포넌트 전환시 캐싱 가능 keep-alive-->
	<keep-alive>
		<component :is="computedName" ref="icon" class="c-application c-icon" v-bind="$attrs" v-on="$listeners" />
	</keep-alive>
</template>

<script>
// spinner
import IconSpinnerSmall from '@/src/assets/images/icon/icon-spinner-small.svg?inline';
import IconSpinnerMedium from '@/src/assets/images/icon/icon-spinner-medium.svg?inline';
import IconSpinnerLarge from '@/src/assets/images/icon/icon-spinner-large.svg?inline';
import { colors } from '@/src/components/elements/core/colors';
const {
	gray200,
	gray500,
	green100,
	green600,
	green800,
	blue100,
	blue600,
	blue800,
	red100,
	red600,
	red800,
	white,
} = colors;

export const LoaderSizes = ['small', 'medium', 'large'];
export const LoaderColors = ['secondary', 'primary', 'success', 'error'];

const colorMap = {
	secondary: {
		stroke: gray200,
		fill: gray500,
	},
	secondaryReversed: {
		stroke: gray200,
		fill: gray500,
	},
	primary: {
		stroke: green100,
		fill: green600,
	},
	primaryReversed: {
		stroke: green800,
		fill: white,
	},
	success: {
		stroke: blue100,
		fill: blue600,
	},
	successReversed: {
		stroke: blue800,
		fill: white,
	},
	error: {
		stroke: red100,
		fill: red600,
	},
	errorReversed: {
		stroke: red800,
		fill: white,
	},
};

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
				return LoaderSizes.indexOf(value) !== -1;
			},
		},
		/**
		 * 색상(secondary, primary, success, error)
		 */
		color: {
			type: String,
			default: 'secondary',
			validator(value) {
				return LoaderColors.indexOf(value) !== -1;
			},
		},
		reversed: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
	},
	computed: {
		computedName() {
			const capitalizedSize = this.size.charAt(0).toUpperCase() + this.size.slice(1);
			return `IconSpinner${capitalizedSize}`;
		},
	},
	mounted() {
		const colorMapKey = this.reversed ? `${this.color}Reversed` : this.color;
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
