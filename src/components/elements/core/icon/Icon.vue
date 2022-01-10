<script>
import BaseIcon from '@/components/elements/core/icon/BaseIcon';

// small
import IconProfileSmallLine from '@/assets/images/icon/icon-profile-small-line.svg?inline';
import IconProfileSmallFill from '@/assets/images/icon/icon-profile-small-fill.svg?inline';
import IconArrowSmallLine from '@/assets/images/icon/icon-arrow-small-line.svg?inline';
import IconTextArrowSmallLine from '@/assets/images/icon/icon-textArrow-small-line.svg?inline';
import IconPlusSmallLine from '@/assets/images/icon/icon-plus-small-line.svg?inline';
import IconCloseSmallLine from '@/assets/images/icon/icon-close-small-line.svg?inline';
import IconSearchSmallLine from '@/assets/images/icon/icon-search-small-line.svg?inline';
import IconCheckSmallLine from '@/assets/images/icon/icon-check-small-line.svg?inline';
import IconCheckRoundSmallLine from '@/assets/images/icon/icon-checkRound-small-line.svg?inline';
import IconCheckRoundSmallFill from '@/assets/images/icon/icon-checkRound-small-fill.svg?inline';
import IconQuestionMarkSmallLine from '@/assets/images/icon/icon-questionMark-small-line.svg?inline';
import IconQuestionMarkSmallFill from '@/assets/images/icon/icon-questionMark-small-fill.svg?inline';
import IconExclamationSmallLine from '@/assets/images/icon/icon-exclamation-small-line.svg?inline';
import IconExclamationSmallFill from '@/assets/images/icon/icon-exclamation-small-fill.svg?inline';
import IconSettingSmallFill from '@/assets/images/icon/icon-setting-small-fill.svg?inline';
import IconMegaphoneSmallLine from '@/assets/images/icon/icon-megaphone-small-line.svg?inline';
import IconStarSmallLine from '@/assets/images/icon/icon-star-small-line.svg?inline';
import IconStarSmallFill from '@/assets/images/icon/icon-star-small-fill.svg?inline';
import IconFileSmallLine from '@/assets/images/icon/icon-file-small-line.svg?inline';
import IconLinkSmallLine from '@/assets/images/icon/icon-link-small-line.svg?inline';
import IconLikeSmallLine from '@/assets/images/icon/icon-like-small-line.svg?inline';
import IconLikeSmallFill from '@/assets/images/icon/icon-like-small-fill.svg?inline';

// 제외
import IconThreeDotSmallFill from '@/assets/images/icon/icon-threeDot-small-fill.svg?inline';
import IconTextArrowSmallFill from '@/assets/images/icon/icon-textArrow-small-fill.svg?inline';
import IconOfficialSmallFill from '@/assets/images/icon/icon-official-small-fill.svg?inline';
import IconCheckSmallFill from '@/assets/images/icon/icon-check-small-fill.svg?inline';

// medium
import IconCheckMediumFill from '@/assets/images/icon/medium/icon-check-medium-fill.svg';
import IconQuestionMediumLine from '@/assets/images/icon/medium/icon-question-medium-line.svg';
import IconLikeMediumLine from '@/assets/images/icon/medium/icon-like-medium-line.svg';
import IconLikeMediumFill from '@/assets/images/icon/medium/icon-like-medium-fill.svg';
import IconCommentMediumLine from '@/assets/images/icon/medium/icon-comment-medium-line.svg';
import IconCheckMediumLine from '@/assets/images/icon/medium/icon-check-medium-line.svg';
import IconPlusMediumLine from '@/assets/images/icon/medium/icon-plus-medium-line.svg';
import IconExclamationMediumLine from '@/assets/images/icon/medium/icon-exclamation-medium-line.svg';
import IconArrowMediumLine from '@/assets/images/icon/medium/icon-arrow-medium-line.svg';
import IconTextArrowMediumLine from '@/assets/images/icon/medium/icon-textArrow-medium-line.svg';
import IconFileMediumLineLight from '@/assets/images/icon/medium/icon-file-medium-line-light.svg';
import IconTrashMediumLineLight from '@/assets/images/icon/medium/icon-trash-medium-line-light.svg';
import IconDownloadMediumLineLight from '@/assets/images/icon/medium/icon-download-medium-line-light.svg';
import IconThreeDotMediumFill from '@/assets/images/icon/medium/icon-threeDot-medium-fill.svg';
import IconHourglassMediumLine from '@/assets/images/icon/medium/icon-hourglass-medium-line.svg';
import IconCloseMediumFill from '@/assets/images/icon/medium/icon-close-medium-fill.svg';
import IconInfoMediumFill from '@/assets/images/icon/medium/icon-info-medium-fill.svg';
import IconInfoMediumLine from '@/assets/images/icon/medium/icon-info-medium-line.svg';
import IconCloseMediumLine from '@/assets/images/icon/medium/icon-close-medium-line.svg';
import IconCheckRoundMediumLine from '@/assets/images/icon/medium/icon-checkRound-medium-line.svg';
import IconFilterMediumLine from '@/assets/images/icon/medium/icon-filter-medium-line.svg';
import IconLocationMediumFill from '@/assets/images/icon/medium/icon-location-medium-fill.svg';
import IconMentoringMediumLine from '@/assets/images/icon/medium/icon-mentoring-medium-line.svg';
import IconResumeMediumLine from '@/assets/images/icon/medium/icon-resume-medium-line.svg';
import IconJobWikiMediumLine from '@/assets/images/icon/medium/icon-jobWiki-medium-line.svg';
import IconAnalyticsMediumLine from '@/assets/images/icon/medium/icon-analytics-medium-line.svg';
import IconInterviewMediumLine from '@/assets/images/icon/medium/icon-interview-medium-line.svg';
import IconEssayMediumLine from '@/assets/images/icon/medium/icon-essay-medium-line.svg';
import IconVodMediumLine from '@/assets/images/icon/medium/icon-vod-medium-line.svg';
import IconEduMediumLine from '@/assets/images/icon/medium/icon-edu-medium-line.svg';
import IconCouponMediumLine from '@/assets/images/icon/medium/icon-coupon-medium-line.svg';
import IconRevertMediumLine from '@/assets/images/icon/medium/icon-revert-medium-line.svg';
import IconDownloadMediumLine from '@/assets/images/icon/medium/icon-download-medium-line.svg';
import IconExportMediumLine from '@/assets/images/icon/medium/icon-export-medium-line.svg';
import IconClockMediumFill from '@/assets/images/icon/medium/icon-clock-medium-fill.svg';
import IconClockMediumLine from '@/assets/images/icon/medium/icon-clock-medium-line.svg';
import IconSupportMediumLine from '@/assets/images/icon/medium/icon-support-medium-line.svg';
import IconStarMediumFill from '@/assets/images/icon/medium/icon-star-medium-fill.svg';
import IconQuestionMarkMediumLine from '@/assets/images/icon/medium/icon-questionMark-medium-line.svg';
import IconMegaphoneMediumLine from '@/assets/images/icon/medium/icon-megaphone-medium-line.svg';
import IconMinusMediumLine from '@/assets/images/icon/medium/icon-minus-medium-line.svg';
import IconDiscountMediumLine from '@/assets/images/icon/medium/icon-discount-medium-line.svg';
import IconLinkMediumLine from '@/assets/images/icon/medium/icon-link-medium-line.svg';
import IconBrowseMediumLine from '@/assets/images/icon/medium/icon-browse-medium-line.svg';
import IconVideoMediumFill from '@/assets/images/icon/medium/icon-video-medium-fill.svg';
import IconPriceMediumLine from '@/assets/images/icon/medium/icon-price-medium-line.svg';
import IconProfileMediumLine from '@/assets/images/icon/medium/icon-profile-medium-line.svg';
import IconBookmarkMediumFill from '@/assets/images/icon/medium/icon-bookmark-medium-fill.svg';
import IconBookmarkMediumLine from '@/assets/images/icon/medium/icon-bookmark-medium-line.svg';

// large
import IconLongArrowLargeLine from '@/assets/images/icon/icon-longArrow-large-line.svg?inline';
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
import IconStarLargeFill from '@/assets/images/icon/icon-star-large-fill.svg?inline';
import IconHamburgerLargeLine from '@/assets/images/icon/icon-hamburger-large-line.svg?inline';
import IconWarningLargeFill from '@/assets/images/icon/icon-warning-large-fill.svg?inline';
import IconBookmarkLargeLine from '@/assets/images/icon/icon-bookmark-large-line.svg?inline';
import IconBookmarkLargeFill from '@/assets/images/icon/icon-bookmark-large-fill.svg?inline';
import IconLockLargeFill from '@/assets/images/icon/icon-lock-large-fill.svg?inline';

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
import IconCheckXLargeFill from '@/assets/images/icon/icon-check-xlarge-fill.svg?inline';
import IconUnCheckedXLargeFill from '@/assets/images/icon/icon-unchecked-xlarge-fill.svg?inline';
import IconStarXLargeFill from '@/assets/images/icon/icon-star-xlarge-fill.svg?inline';
import IconProfileXLargeLine from '@/assets/images/icon/icon-profile-xlarge-line.svg?inline';
import IconSettingXLargeLine from '@/assets/images/icon/icon-setting-xlarge-line.svg?inline';
import IconSupportXLargeLine from '@/assets/images/icon/icon-support-xlarge-line.svg?inline';
import IconBookmarkXLargeFill from '@/assets/images/icon/icon-bookmark-xlarge-fill.svg?inline';
import IconPhotoXLargeLine from '@/assets/images/icon/icon-photo-xlarge-line.svg?inline';

// 2x-large
import IconProfile2XLargeFill from '@/assets/images/icon/icon-profile-2xlarge-fill.svg?inline';
import IconWriting2XLargeLine from '@/assets/images/icon/icon-writing-2xlarge-line.svg?inline';
import IconCalendarError2XLargeFill from '@/assets/images/icon/icon-calendar-error-2xlarge-fill.svg?inline';

// 4x-large
import IconStar4XLargeFill from '@/assets/images/icon/icon-star-4xlarge-fill.svg?inline';
import customValidator from '@/utils/custom-validator';

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
	'IconSettingSmallFill',
	'IconQuestionMarkSmallFill',
	'IconFileSmallLine',
	'IconStarSmallFill',
	'IconMegaphoneSmallLine',
	'IconLinkSmallLine',
	'IconTextArrowSmallLine',

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
	'IconDownloadMediumLine',
	'IconExportMediumLine',
	'IconClockMediumFill',
	'IconClockMediumLine',
	'IconSupportMediumLine',
	'IconStarMediumFill',
	'IconQuestionMarkMediumLine',
	'IconMegaphoneMediumLine',
	'IconMinusMediumLine',
	'IconDiscountMediumLine',
	'IconLinkMediumLine',
	'IconBrowseMediumLine',
	'IconVideoMediumFill',
	'IconPriceMediumLine',
	'IconProfileMediumLine',
	'IconBookmarkMediumFill',
	'IconBookmarkMediumLine',

	// large
	'IconLongArrowLargeLine',
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
	'IconStarLargeFill',
	'IconHamburgerLargeLine',
	'IconWarningLargeFill',
	'IconBookmarkLargeLine',
	'IconBookmarkLargeFill',
	'IconLockLargeFill',

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
	'IconStarXLargeFill',
	'IconCheckXLargeFill',
	'IconUnCheckedXLargeFill',
	'IconProfileXLargeLine',
	'IconSettingXLargeLine',
	'IconSupportXLargeLine',
	'IconBookmarkXLargeFill',
	'IconPhotoXLargeLine',

	//2x-large
	'IconProfile2XLargeFill',
	'IconWriting2XLargeLine',
	'IconCalendarError2XLargeFill',

	//4x-large
	'IconStar4XLargeFill',
];

/**
 * @displayName c-icon
 */
export default {
	name: 'Icon',
	extends: BaseIcon,
	props: {
		name: {
			type: String,
			default: null,
			validator(value) {
				const isValid = IconNames.indexOf(value) !== -1;
				return customValidator(value, isValid, 'Icon', 'name');
			},
		},
	},
	components: {
		// small
		IconProfileSmallLine,
		IconProfileSmallFill,
		IconArrowSmallLine,
		IconTextArrowSmallLine,
		IconPlusSmallLine,
		IconCloseSmallLine,
		IconSearchSmallLine,
		IconCheckSmallLine,
		IconCheckRoundSmallLine,
		IconCheckRoundSmallFill,
		IconQuestionMarkSmallLine,
		IconQuestionMarkSmallFill,
		IconExclamationSmallLine,
		IconExclamationSmallFill,
		IconSettingSmallFill,
		IconMegaphoneSmallLine,
		IconStarSmallLine,
		IconStarSmallFill,
		IconFileSmallLine,
		IconLinkSmallLine,
		IconLikeSmallLine,
		IconLikeSmallFill,
		// 제외
		IconThreeDotSmallFill,
		IconTextArrowSmallFill,
		IconOfficialSmallFill,
		IconCheckSmallFill,

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
		IconDownloadMediumLine,
		IconExportMediumLine,
		IconClockMediumFill,
		IconClockMediumLine,
		IconSupportMediumLine,
		IconStarMediumFill,
		IconQuestionMarkMediumLine,
		IconMegaphoneMediumLine,
		IconMinusMediumLine,
		IconDiscountMediumLine,
		IconLinkMediumLine,
		IconBrowseMediumLine,
		IconVideoMediumFill,
		IconPriceMediumLine,
		IconProfileMediumLine,
		IconBookmarkMediumFill,
		IconBookmarkMediumLine,

		// large
		IconLongArrowLargeLine,
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
		IconStarLargeFill,
		IconHamburgerLargeLine,
		IconWarningLargeFill,
		IconBookmarkLargeLine,
		IconBookmarkLargeFill,
		IconLockLargeFill,

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
		IconCheckXLargeFill,
		IconUnCheckedXLargeFill,
		IconStarXLargeFill,
		IconProfileXLargeLine,
		IconSettingXLargeLine,
		IconSupportXLargeLine,
		IconBookmarkXLargeFill,
		IconPhotoXLargeLine,
		// 2x-large
		IconProfile2XLargeFill,
		IconWriting2XLargeLine,
		IconCalendarError2XLargeFill,

		// 4x-large
		IconStar4XLargeFill,
	},
};
</script>
