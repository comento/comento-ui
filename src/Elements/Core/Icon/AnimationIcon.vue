<script>
import IconCheckRoundMediumLineAnimation from '@/assets/images/icon/animation/icon-checkRound-medium-line-animation.svg?inline';
import IconThreeDotMediumFillAnimation from '@/assets/images/icon/animation/icon-threeDot-medium-fill-animation.svg?inline';
import BaseIcon from '@/src/Elements/Core/Icon/BaseIcon';
import customValidator from '@/utils/custom-validator';

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
@import '@/assets/style/animation/icon-threeDot-fill-animation';
@import '@/assets/style/animation/icon-checkRound-line-animation';

.c-animation-icon {
	cursor: auto;
	background: transparent !important;

	&--link {
		cursor: pointer;
	}
}
</style>
