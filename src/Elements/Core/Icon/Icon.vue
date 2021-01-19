<template>
	<!--컴포넌트 전환시 캐싱 가능 keep-alive-->
	<keep-alive>
		<component
			:is="name"
			ref="icon"
			class="c-application c-icon"
			:style="styles"
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</keep-alive>
</template>

<script>
// small
import IconCheckSmallLine from '@/assets/images/icon/icon-check-small-line.svg?inline';
import IconPlusSmallLine from '@/assets/images/icon/icon-plus-small-line.svg?inline';
import IconArrowSmallLine from '@/assets/images/icon/icon-arrow-small-line.svg?inline';
import IconThreeDotSmallFill from '@/assets/images/icon/icon-threeDot-small-fill.svg?inline';
import IconTextArrowSmallFill from '@/assets/images/icon/icon-textArrow-small-fill.svg?inline';
import IconOfficialSmallFill from '@/assets/images/icon/icon-official-small-fill.svg?inline';
import IconExclamationSmallFill from '@/assets/images/icon/icon-exclamation-small-fill.svg?inline';
import IconProfileSmallFill from '@/assets/images/icon/icon-profile-small-fill.svg?inline';
import IconCheckSmallFill from '@/assets/images/icon/icon-check-small-fill.svg?inline';
import IconCloseSmallLine from '@/assets/images/icon/icon-close-small-line.svg?inline';
// medium
import IconCheckMediumFill from '@/assets/images/icon/icon-check-medium-fill.svg?inline';
import IconQuestionMediumLine from '@/assets/images/icon/icon-question-medium-line.svg?inline';
import IconLikeMediumLine from '@/assets/images/icon/icon-like-medium-line.svg?inline';
import IconLikeMediumFill from '@/assets/images/icon/icon-like-medium-fill.svg?inline';
import IconCommentMediumLine from '@/assets/images/icon/icon-comment-medium-line.svg?inline';
import IconCheckMediumLine from '@/assets/images/icon/icon-check-medium-line.svg?inline';
import IconPlusMediumLine from '@/assets/images/icon/icon-plus-medium-line.svg?inline';
import IconExclamationMediumLine from '@/assets/images/icon/icon-exclamation-medium-line.svg?inline';
import IconArrowMediumLine from '@/assets/images/icon/icon-arrow-medium-line.svg?inline';
import IconTextArrowMediumLine from '@/assets/images/icon/icon-textArrow-medium-line.svg?inline';
import IconFileMediumLineLight from '@/assets/images/icon/icon-file-medium-line-light.svg?inline';
import IconTrashMediumLineLight from '@/assets/images/icon/icon-trash-medium-line-light.svg?inline';
import IconDownloadMediumLineLight from '@/assets/images/icon/icon-download-medium-line-light.svg?inline';
import IconThreeDotMediumFill from '@/assets/images/icon/icon-threeDot-medium-fill.svg?inline';
import IconHourglassMediumLine from '@/assets/images/icon/icon-hourglass-medium-line.svg?inline';
import IconCloseMediumFill from '@/assets/images/icon/icon-close-medium-fill.svg?inline';
import IconInfoMediumFill from '@/assets/images/icon/icon-info-medium-fill.svg?inline';
import IconInfoMediumLine from '@/assets/images/icon/icon-info-medium-line.svg?inline';
import IconCloseMediumLine from '@/assets/images/icon/icon-close-medium-line.svg?inline';
import IconCheckRoundMediumLine from '@/assets/images/icon/icon-checkRound-medium-line.svg?inline';
import IconFilterMediumLine from '@/assets/images/icon/icon-filter-medium-line.svg?inline';
import IconLocationMediumFill from '@/assets/images/icon/icon-location-medium-fill.svg?inline';
import IconMentoringMediumLine from '@/assets/images/icon/icon-mentoring-medium-line.svg?inline';
import IconResumeMediumLine from '@/assets/images/icon/icon-resume-medium-line.svg?inline';
import IconJobWikiMediumLine from '@/assets/images/icon/icon-jobWiki-medium-line.svg?inline';
import IconAnalyticsMediumLine from '@/assets/images/icon/icon-analytics-medium-line.svg?inline';
import IconInterviewMediumLine from '@/assets/images/icon/icon-interview-medium-line.svg?inline';
import IconEssayMediumLine from '@/assets/images/icon/icon-essay-medium-line.svg?inline';
import IconVodMediumLine from '@/assets/images/icon/icon-vod-medium-line.svg?inline';
import IconEduMediumLine from '@/assets/images/icon/icon-edu-medium-line.svg?inline';
import IconCouponMediumLine from '@/assets/images/icon/icon-coupon-medium-line.svg?inline';
import IconRevertMediumLine from '@/assets/images/icon/icon-revert-medium-line.svg?inline';
// large
import IconProfileLargeFill from '@/assets/images/icon/icon-profile-large-fill.svg?inline';
import IconSelectedLargeLine from '@/assets/images/icon/icon-selected-large-line.svg?inline';
import IconReplyLargeLine from '@/assets/images/icon/icon-reply-large-line.svg?inline';
import IconSendLargeFill from '@/assets/images/icon/icon-send-large-fill.svg?inline';
import IconPlusLargeLine from '@/assets/images/icon/icon-plus-large-line.svg?inline';
import IconProfileLargeLine from '@/assets/images/icon/icon-profile-large-line.svg?inline';
import IconAlarmLargeLine from '@/assets/images/icon/icon-alarm-large-line.svg?inline';
import IconSearchLargeLine from '@/assets/images/icon/icon-search-large-line.svg?inline';
import IconBackwardLargeLine from '@/assets/images/icon/icon-backward-large-line.svg?inline';
import IconArrowLargeLine from '@/assets/images/icon/icon-arrow-large-line.svg?inline';
import IconTextArrowLargeLine from '@/assets/images/icon/icon-textArrow-large-line.svg?inline';
import IconCloseLargeLine from '@/assets/images/icon/icon-close-large-line.svg?inline';
import IconKeylineLargeLine from '@/assets/images/icon/icon-keyline-large-line.svg?inline';
import IconExclamationLargeLine from '@/assets/images/icon/icon-exclamation-large-line.svg?inline';
import IconFilterLargeLine from '@/assets/images/icon/icon-filter-large-line.svg?inline';
import IconCheckLargeFill from '@/assets/images/icon/icon-check-large-fill.svg?inline';
import IconSecurityLargeFill from '@/assets/images/icon/icon-security-large-fill.svg?inline';
import IconDownloadLargeLine from '@/assets/images/icon/icon-download-large-line.svg?inline';
import IconMentoringLargeLine from '@/assets/images/icon/icon-mentoring-large-line.svg?inline';
import IconVodLargeLine from '@/assets/images/icon/icon-vod-large-line.svg?inline';
import IconAnswerLargeLine from '@/assets/images/icon/icon-answer-large-line.svg?inline';
import IconEduLargeLine from '@/assets/images/icon/icon-edu-large-line.svg?inline';
import IconAnalyticsLargeLine from '@/assets/images/icon/icon-analytics-large-line.svg?inline';
import IconInterviewLargeLine from '@/assets/images/icon/icon-interview-large-line.svg?inline';
import IconEssayLargeLine from '@/assets/images/icon/icon-essay-large-line.svg?inline';
import IconCheckLargeLine from '@/assets/images/icon/icon-check-large-line.svg?inline';
import IconResumeLargeLine from '@/assets/images/icon/icon-resume-large-line.svg?inline';
import IconQuestionLargeLine from '@/assets/images/icon/icon-question-large-line.svg?inline';
import IconVideoLargeFill from '@/assets/images/icon/icon-video-large-fill.svg?inline';
// x-large
import IconArrowXLargeLine from '@/assets/images/icon/icon-arrow-xlarge-line.svg?inline';
import IconCloseXLargeLine from '@/assets/images/icon/icon-close-xlarge-line.svg?inline';
import IconQuestionXLargeLine from '@/assets/images/icon/icon-question-xlarge-line.svg?inline';
import IconAdoptXLargeLine from '@/assets/images/icon/icon-adopt-xlarge-line.svg?inline';
import IconCreditPlusXLargeLine from '@/assets/images/icon/icon-creditPlus-xlarge-line.svg?inline';
import IconCreditMinusXLargeLine from '@/assets/images/icon/icon-creditMinus-xlarge-line.svg?inline';
import IconLikeXLargeLine from '@/assets/images/icon/icon-like-xlarge-line.svg?inline';
import IconCelebrateXLargeLine from '@/assets/images/icon/icon-celebrate-xlarge-line.svg?inline';
import IconAnswerXLargeLine from '@/assets/images/icon/icon-answer-xlarge-line.svg?inline';
import IconMegaphoneXLargeLine from '@/assets/images/icon/icon-megaphone-xlarge-line.svg?inline';
import IconProfileXLargeFill from '@/assets/images/icon/icon-profile-xlarge-fill.svg?inline';
// 2x-large
import IconProfile2XLargeFill from '@/assets/images/icon/icon-profile-2xlarge-fill.svg?inline';

import { colors, colorKeys } from '@/src/Elements/Core/Colors';

export const IconNames = [
	// small
	'IconCheckSmallLine',
	'IconPlusSmallLine',
	'IconArrowSmallLine',
	'IconThreeDotSmallFill',
	'IconTextArrowSmallFill',
	'IconOfficialSmallFill',
	'IconExclamationSmallFill',
	'IconProfileSmallFill',
	'IconCheckSmallFill',
	'IconCloseSmallLine',
	// medium
	'IconCheckMediumFill',
	'IconQuestionMediumLine',
	'IconLikeMediumLine',
	'IconLikeMediumFill',
	'IconCommentMediumLine',
	'IconCheckMediumLine',
	'IconPlusMediumLine',
	'IconExclamationMediumLine',
	'IconArrowMediumLine',
	'IconTextArrowMediumLine',
	'IconFileMediumLineLight',
	'IconTrashMediumLineLight',
	'IconDownloadMediumLineLight',
	'IconThreeDotMediumFill',
	'IconHourglassMediumLine',
	'IconCloseMediumFill',
	'IconInfoMediumFill',
	'IconInfoMediumLine',
	'IconCloseMediumLine',
	'IconCheckRoundMediumLine',
	'IconFilterMediumLine',
	'IconLocationMediumFill',
	'IconMentoringMediumLine',
	'IconResumeMediumLine',
	'IconJobWikiMediumLine',
	'IconAnalyticsMediumLine',
	'IconInterviewMediumLine',
	'IconEssayMediumLine',
	'IconVodMediumLine',
	'IconEduMediumLine',
	'IconCouponMediumLine',
	'IconRevertMediumLine',
	// large
	'IconProfileLargeFill',
	'IconSelectedLargeLine',
	'IconReplyLargeLine',
	'IconSendLargeFill',
	'IconPlusLargeLine',
	'IconProfileLargeLine',
	'IconAlarmLargeLine',
	'IconSearchLargeLine',
	'IconBackwardLargeLine',
	'IconArrowLargeLine',
	'IconTextArrowLargeLine',
	'IconCloseLargeLine',
	'IconKeylineLargeLine',
	'IconExclamationLargeLine',
	'IconFilterLargeLine',
	'IconCheckLargeFill',
	'IconSecurityLargeFill',
	'IconDownloadLargeLine',
	'IconMentoringLargeLine',
	'IconVodLargeLine',
	'IconAnswerLargeLine',
	'IconEduLargeLine',
	'IconAnalyticsLargeLine',
	'IconInterviewLargeLine',
	'IconEssayLargeLine',
	'IconCheckLargeLine',
	'IconResumeLargeLine',
	'IconQuestionLargeLine',
	'IconVideoLargeFill',
	// XLarge
	'IconProfileXLargeFill',
	'IconArrowXLargeLine',
	'IconCloseXLargeLine',
	'IconQuestionXLargeLine',
	'IconAdoptXLargeLine',
	'IconCreditPlusXLargeLine',
	'IconCreditMinusXLargeLine',
	'IconLikeXLargeLine',
	'IconCelebrateXLargeLine',
	'IconAnswerXLargeLine',
	'IconMegaphoneXLargeLine',
	'IconProfile2XLargeFill',
];

export default {
	name: 'Icon',
	props: {
		name: {
			type: String,
			default: null,
			validator(value) {
				const isValid = IconNames.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the icon`);
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
					console.error(`${value} is not a valid name of the icon color`);
				}
				return isValid;
			},
		},
		rotate: {
			type: Number,
			default: 0,
			validator(value) {
				return typeof value === 'number';
			},
		},
	},
	computed: {
		computedRotate() {
			return this.rotate !== 0 ? { transform: `rotate(${this.rotate}deg)` } : null;
		},
		computedFill() {
			if (this.color) {
				return { fill: colors[this.color] };
			} else {
				return null;
			}
		},
		styles() {
			return {
				...this.computedFill,
				...this.computedRotate,
			};
		},
	},
	components: {
		// small
		IconCheckSmallLine,
		IconPlusSmallLine,
		IconArrowSmallLine,
		IconThreeDotSmallFill,
		IconTextArrowSmallFill,
		IconOfficialSmallFill,
		IconExclamationSmallFill,
		IconProfileSmallFill,
		IconCheckSmallFill,
		IconCloseSmallLine,
		// medium
		IconCheckMediumFill,
		IconQuestionMediumLine,
		IconLikeMediumLine,
		IconLikeMediumFill,
		IconCommentMediumLine,
		IconCheckMediumLine,
		IconPlusMediumLine,
		IconExclamationMediumLine,
		IconArrowMediumLine,
		IconTextArrowMediumLine,
		IconFileMediumLineLight,
		IconTrashMediumLineLight,
		IconDownloadMediumLineLight,
		IconThreeDotMediumFill,
		IconHourglassMediumLine,
		IconCloseMediumFill,
		IconInfoMediumFill,
		IconInfoMediumLine,
		IconCloseMediumLine,
		IconCheckRoundMediumLine,
		IconFilterMediumLine,
		IconLocationMediumFill,
		IconMentoringMediumLine,
		IconResumeMediumLine,
		IconJobWikiMediumLine,
		IconAnalyticsMediumLine,
		IconInterviewMediumLine,
		IconEssayMediumLine,
		IconVodMediumLine,
		IconEduMediumLine,
		IconCouponMediumLine,
		IconRevertMediumLine,
		// large
		IconProfileLargeFill,
		IconSelectedLargeLine,
		IconReplyLargeLine,
		IconSendLargeFill,
		IconPlusLargeLine,
		IconProfileLargeLine,
		IconAlarmLargeLine,
		IconSearchLargeLine,
		IconBackwardLargeLine,
		IconArrowLargeLine,
		IconTextArrowLargeLine,
		IconCloseLargeLine,
		IconKeylineLargeLine,
		IconExclamationLargeLine,
		IconFilterLargeLine,
		IconCheckLargeFill,
		IconSecurityLargeFill,
		IconMentoringLargeLine,
		IconVodLargeLine,
		IconAnswerLargeLine,
		IconEduLargeLine,
		IconAnalyticsLargeLine,
		IconInterviewLargeLine,
		IconEssayLargeLine,
		IconDownloadLargeLine,
		IconCheckLargeLine,
		IconResumeLargeLine,
		IconQuestionLargeLine,
		IconVideoLargeFill,
		// x-large
		IconArrowXLargeLine,
		IconCloseXLargeLine,
		IconQuestionXLargeLine,
		IconAdoptXLargeLine,
		IconCreditPlusXLargeLine,
		IconCreditMinusXLargeLine,
		IconLikeXLargeLine,
		IconCelebrateXLargeLine,
		IconAnswerXLargeLine,
		IconMegaphoneXLargeLine,
		IconProfileXLargeFill,
		// 2x-large
		IconProfile2XLargeFill,
	},
};
</script>

<style lang="scss" scoped>
.c-icon {
	cursor: pointer;
	background: transparent !important;
}
</style>
