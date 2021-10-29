<script>
import IconCheckRoundMediumLineAnimation from '@/src/assets/images/icon/animation/icon-checkRound-medium-line-animation.svg?inline';
import IconThreeDotMediumFillAnimation from '@/src/assets/images/icon/animation/icon-threeDot-medium-fill-animation.svg?inline';
import BaseIcon from '@/src/components/elements/core/icon/BaseIcon';
import customValidator from '@/src/utils/custom-validator';

export const AnimationIconNames = ['IconCheckRoundMediumLineAnimation', 'IconThreeDotMediumFillAnimation'];

export default {
	name: 'AnimationIcon',
	extends: BaseIcon,
	props: {
		name: {
			type: String,
			default: null,
			validator(value) {
				const isValid = AnimationIconNames.indexOf(value) !== -1;
				return customValidator(value, isValid, 'AnimationIcon', 'name');
			},
		},
	},
	components: {
		IconCheckRoundMediumLineAnimation,
		IconThreeDotMediumFillAnimation,
	},
};
</script>

<style lang="scss" scoped>
@import '@/src/assets/style/animation/icon-threeDot-fill-animation';
@import '@/src/assets/style/animation/icon-checkRound-line-animation';

.c-animation-icon {
	cursor: auto;
	background: transparent !important;

	&--link {
		cursor: pointer;
	}
}
</style>
