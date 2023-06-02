<script>
import IconCheckRoundSmallLineAnimation from '@/assets/images/icon/animation/icon-checkRound-small-line-animation.svg?inline';
import IconThreeDotSmallFillAnimation from '@/assets/images/icon/animation/icon-threeDot-small-fill-animation.svg?inline';
import BaseIcon from '@/components/elements/core/icon/BaseIcon';
import customValidator from '@/utils/custom-validator';
import { defineComponent } from 'vue';

export const AnimationIconNames = ['IconCheckRoundSmallLineAnimation', 'IconThreeDotSmallFillAnimation'];

export default defineComponent({
	name: 'CAnimationIcon',
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
		IconCheckRoundSmallLineAnimation,
		IconThreeDotSmallFillAnimation,
	},
});
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
