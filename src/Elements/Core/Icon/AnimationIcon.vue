<template>
	<!--컴포넌트 전환시 캐싱 가능 keep-alive-->
	<keep-alive>
		<component
			:is="name"
			ref="icon"
			class="c-application c-animation-icon"
			:class="classes"
			:style="styles"
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</keep-alive>
</template>

<script>
import IconCheckRoundMediumLineAnimation from '@/assets/images/icon/animation/icon-checkRound-medium-line-animation.svg?inline';
import IconThreeDotMediumFillAnimation from '@/assets/images/icon/animation/icon-threeDot-medium-fill-animation.svg?inline';

export const AnimationIconNames = ['IconCheckRoundMediumLineAnimation', 'IconThreeDotMediumFillAnimation'];

export default {
	name: 'AnimationIcon',
	props: {
		name: {
			type: String,
			default: null,
			validator(value) {
				const isValid = AnimationIconNames.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the AnimationIcon`);
				}
				return isValid;
			},
		},
		rotate: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		computedRotate() {
			return this.rotate !== 0 ? { transform: `rotate(${this.rotate}deg)` } : null;
		},
		hasEventListener() {
			return Boolean(this.$listeners && this.$listeners.click);
		},
		classes() {
			return [this.hasEventListener && 'c-icon--link'];
		},
		styles() {
			return {
				...this.computedRotate,
			};
		},
	},
	components: {
		IconCheckRoundMediumLineAnimation,
		IconThreeDotMediumFillAnimation,
	},
};
</script>

<style lang="scss" scoped>
@import '../../../../assets/style/animation/icon-threeDot-fill-animation';
@import '../../../../assets/style/animation/icon-checkRound-line-animation';

.c-animation-icon {
	cursor: auto;
	background: transparent !important;

	&--link {
		cursor: pointer;
	}
}
</style>
