<script>
import BaseIcon from '@/components/elements/core/icon/BaseIcon';

// small
import IconProfileSmallLine from '@/assets/images/icon/small/icon-profile-small-line.svg?inline';
import IconProfileSmallFill from '@/assets/images/icon/small/icon-profile-small-fill.svg?inline';
import IconArrowSmallLine from '@/assets/images/icon/small/icon-arrow-small-line.svg?inline';
import IconTextArrowSmallLine from '@/assets/images/icon/small/icon-textArrow-small-line.svg?inline';
import IconPlusSmallLine from '@/assets/images/icon/small/icon-plus-small-line.svg?inline';
import IconCloseSmallLine from '@/assets/images/icon/small/icon-close-small-line.svg?inline';
import IconSearchSmallLine from '@/assets/images/icon/small/icon-search-small-line.svg?inline';
import IconCheckSmallLine from '@/assets/images/icon/small/icon-check-small-line.svg?inline';
import IconCheckRoundSmallLine from '@/assets/images/icon/small/icon-checkRound-small-line.svg?inline';
import IconCheckRoundSmallFill from '@/assets/images/icon/small/icon-checkRound-small-fill.svg?inline';
import IconQuestionMarkSmallLine from '@/assets/images/icon/small/icon-questionMark-small-line.svg?inline';
import IconQuestionMarkSmallFill from '@/assets/images/icon/small/icon-questionMark-small-fill.svg?inline';
import IconExclamationSmallLine from '@/assets/images/icon/small/icon-exclamation-small-line.svg?inline';
import IconExclamationSmallFill from '@/assets/images/icon/small/icon-exclamation-small-fill.svg?inline';
import IconSettingSmallFill from '@/assets/images/icon/small/icon-setting-small-fill.svg?inline';
import IconMegaphoneSmallLine from '@/assets/images/icon/small/icon-megaphone-small-line.svg?inline';
import IconStarSmallLine from '@/assets/images/icon/small/icon-star-small-line.svg?inline';
import IconStarSmallFill from '@/assets/images/icon/small/icon-star-small-fill.svg?inline';
import IconFileSmallLine from '@/assets/images/icon/small/icon-file-small-line.svg?inline';
import IconLinkSmallLine from '@/assets/images/icon/small/icon-link-small-line.svg?inline';
import IconLikeSmallLine from '@/assets/images/icon/small/icon-like-small-line.svg?inline';
import IconLikeSmallFill from '@/assets/images/icon/small/icon-like-small-fill.svg?inline';
import IconThreeDotSmallFill from '@/assets/images/icon/small/icon-threeDot-small-fill.svg?inline';
// 제외
import IconCheckSmallFill from '@/assets/images/icon/small/icon-check-small-fill.svg?inline';

// medium
import IconProfileMediumLine from '@/assets/images/icon/medium/icon-profile-medium-line.svg?inline';
import IconProfileMediumFill from '@/assets/images/icon/medium/icon-profile-medium-fill.svg?inline';
import IconQuestionMediumLine from '@/assets/images/icon/medium/icon-question-medium-line.svg?inline';
import IconEssayMediumLine from '@/assets/images/icon/medium/icon-essay-medium-line.svg?inline';
import IconInterviewMediumLine from '@/assets/images/icon/medium/icon-interview-medium-line.svg?inline';
import IconCommentMediumLine from '@/assets/images/icon/medium/icon-comment-medium-line.svg?inline';
import IconArrowMediumLine from '@/assets/images/icon/medium/icon-arrow-medium-line.svg?inline';
import IconTextArrowMediumLine from '@/assets/images/icon/medium/icon-textArrow-medium-line.svg?inline';
import IconRevertMediumLine from '@/assets/images/icon/medium/icon-revert-medium-line.svg?inline';
import IconPlusMediumLine from '@/assets/images/icon/medium/icon-plus-medium-line.svg?inline';
import IconMinusMediumLine from '@/assets/images/icon/medium/icon-minus-medium-line.svg?inline';
import IconCloseMediumLine from '@/assets/images/icon/medium/icon-close-medium-line.svg?inline';
import IconFilterMediumLine from '@/assets/images/icon/medium/icon-filter-medium-line.svg?inline';
import IconBookmarkMediumLine from '@/assets/images/icon/medium/icon-bookmark-medium-line.svg?inline';
import IconBookmarkMediumFill from '@/assets/images/icon/medium/icon-bookmark-medium-fill.svg?inline';
import IconCheckMediumLine from '@/assets/images/icon/medium/icon-check-medium-line.svg?inline';
import IconSelectedMediumLine from '@/assets/images/icon/medium/icon-selected-medium-line.svg?inline';
import IconCheckRoundMediumFill from '@/assets/images/icon/medium/icon-checkRound-medium-fill.svg?inline';
import IconQuestionMarkMediumLine from '@/assets/images/icon/medium/icon-questionMark-medium-line.svg?inline';
import IconQuestionMarkMediumFill from '@/assets/images/icon/medium/icon-questionMark-medium-fill.svg?inline';
import IconExclamationMediumLine from '@/assets/images/icon/medium/icon-exclamation-medium-line.svg?inline';
import IconExclamationMediumFill from '@/assets/images/icon/medium/icon-exclamation-medium-fill.svg?inline';
import IconInformationMediumLine from '@/assets/images/icon/medium/icon-information-medium-line.svg?inline';
import IconInformationMediumFill from '@/assets/images/icon/medium/icon-information-medium-fill.svg?inline';
import IconCloseRoundMediumLine from '@/assets/images/icon/medium/icon-closeRound-medium-line.svg?inline';
import IconCloseRoundMediumFill from '@/assets/images/icon/medium/icon-closeRound-medium-fill.svg?inline';
import IconPlusRoundMediumLine from '@/assets/images/icon/medium/icon-plusRound-medium-line.svg?inline';
import IconArrowRoundMediumLine from '@/assets/images/icon/medium/icon-arrowRound-medium-line.svg?inline';
import IconLockMediumLine from '@/assets/images/icon/medium/icon-lock-medium-line.svg?inline';
import IconLockMediumFill from '@/assets/images/icon/medium/icon-lock-medium-fill.svg?inline';
import IconImportMediumLine from '@/assets/images/icon/medium/icon-import-medium-line.svg?inline';
import IconLinkMediumLine from '@/assets/images/icon/medium/icon-link-medium-line.svg?inline';
import IconDownloadMediumLine from '@/assets/images/icon/medium/icon-download-medium-line.svg?inline';
import IconTrashMediumLine from '@/assets/images/icon/medium/icon-trash-medium-line.svg?inline';
import IconLikeMediumLine from '@/assets/images/icon/medium/icon-like-medium-line.svg?inline';
import IconLikeMediumFill from '@/assets/images/icon/medium/icon-like-medium-fill.svg?inline';
import IconBrowseMediumLine from '@/assets/images/icon/medium/icon-browse-medium-line.svg?inline';
import IconBrowseMediumFill from '@/assets/images/icon/medium/icon-browse-medium-fill.svg?inline';
import IconExportMediumLine from '@/assets/images/icon/medium/icon-export-medium-line.svg?inline';
import IconVideoMediumLine from '@/assets/images/icon/medium/icon-video-medium-line.svg?inline';
import IconVideoMediumFill from '@/assets/images/icon/medium/icon-video-medium-fill.svg?inline';
import IconClockMediumLine from '@/assets/images/icon/medium/icon-clock-medium-line.svg?inline';
import IconClockMediumFill from '@/assets/images/icon/medium/icon-clock-medium-fill.svg?inline';
import IconPriceMediumLine from '@/assets/images/icon/medium/icon-price-medium-line.svg?inline';
import IconDiscountMediumLine from '@/assets/images/icon/medium/icon-discount-medium-line.svg?inline';
import IconLocationMediumLine from '@/assets/images/icon/medium/icon-location-medium-line.svg?inline';
import IconLocationMediumFill from '@/assets/images/icon/medium/icon-location-medium-fill.svg?inline';
import IconSupportMediumLine from '@/assets/images/icon/medium/icon-support-medium-line.svg?inline';
import IconCouponMediumLine from '@/assets/images/icon/medium/icon-coupon-medium-line.svg?inline';
import IconMegaphoneMediumLine from '@/assets/images/icon/medium/icon-megaphone-medium-line.svg?inline';
import IconStarMediumLine from '@/assets/images/icon/medium/icon-star-medium-line.svg?inline';
import IconStarMediumFill from '@/assets/images/icon/medium/icon-star-medium-fill.svg?inline';
import IconThreeDotMediumFill from '@/assets/images/icon/medium/icon-threeDot-medium-fill.svg?inline';
import IconFileMediumLine from '@/assets/images/icon/medium/icon-file-medium-line.svg?inline';
// 제외
import IconResumeMediumLine from '@/assets/images/icon/medium/icon-resume-medium-line.svg?inline';
import IconJobWikiMediumLine from '@/assets/images/icon/medium/icon-jobWiki-medium-line.svg?inline';
import IconAnalyticsMediumLine from '@/assets/images/icon/medium/icon-analytics-medium-line.svg?inline';
import IconVodMediumLine from '@/assets/images/icon/medium/icon-vod-medium-line.svg?inline';
import IconEduMediumLine from '@/assets/images/icon/medium/icon-edu-medium-line.svg?inline';

// large
import IconProfileLargeLine from '@/assets/images/icon/large/icon-profile-large-line.svg?inline';
import IconProfileLargeFill from '@/assets/images/icon/large/icon-profile-large-fill.svg?inline';
import IconAnswerLargeLine from '@/assets/images/icon/large/icon-answer-large-line.svg?inline';
import IconVodLargeLine from '@/assets/images/icon/large/icon-vod-large-line.svg?inline';
import IconQuestionLargeLine from '@/assets/images/icon/large/icon-question-large-line.svg?inline';
import IconEssayLargeLine from '@/assets/images/icon/large/icon-essay-large-line.svg?inline';
import IconInterviewLargeLine from '@/assets/images/icon/large/icon-interview-large-line.svg?inline';
import IconResumeLargeLine from '@/assets/images/icon/large/icon-resume-large-line.svg?inline';
import IconAnalyticsLargeLine from '@/assets/images/icon/large/icon-analytics-large-line.svg?inline';
import IconMentoringLargeLine from '@/assets/images/icon/large/icon-mentoring-large-line.svg?inline';
import IconEduLargeLine from '@/assets/images/icon/large/icon-edu-large-line.svg?inline';
import IconArrowLargeLine from '@/assets/images/icon/large/icon-arrow-large-line.svg?inline';
import IconTextArrowLargeLine from '@/assets/images/icon/large/icon-textArrow-large-line.svg?inline';
import IconBackwardLargeLine from '@/assets/images/icon/large/icon-backward-large-line.svg?inline';
import IconReplyLargeLine from '@/assets/images/icon/large/icon-reply-large-line.svg?inline';
import IconPlusLargeLine from '@/assets/images/icon/large/icon-plus-large-line.svg?inline';
import IconCloseLargeLine from '@/assets/images/icon/large/icon-close-large-line.svg?inline';
import IconHamburgerLargeLine from '@/assets/images/icon/large/icon-hamburger-large-line.svg?inline';
import IconFilterLargeLine from '@/assets/images/icon/large/icon-filter-large-line.svg?inline';
import IconSearchLargeLine from '@/assets/images/icon/large/icon-search-large-line.svg?inline';
import IconAlarmLargeLine from '@/assets/images/icon/large/icon-alarm-large-line.svg?inline';
import IconBookmarkLargeLine from '@/assets/images/icon/large/icon-bookMark-large-line.svg?inline';
import IconBookmarkLargeFill from '@/assets/images/icon/large/icon-bookMark-large-fill.svg?inline';
import IconCheckLargeLine from '@/assets/images/icon/large/icon-check-large-line.svg?inline';
import IconCheckRoundLargeLine from '@/assets/images/icon/large/icon-checkRound-large-line.svg?inline';
import IconCheckRoundLargeFill from '@/assets/images/icon/large/icon-checkRound-large-fill.svg?inline';
import IconQuestionMarkLargeLine from '@/assets/images/icon/large/icon-questionMark-large-line.svg?inline';
import IconQuestionMarkLargeFill from '@/assets/images/icon/large/icon-questionMark-large-fill.svg?inline';
import IconExclamationLargeLine from '@/assets/images/icon/large/icon-exclamation-large-line.svg?inline';
import IconExclamationLargeFill from '@/assets/images/icon/large/icon-exclamation-large-fill.svg?inline';
import IconInformationLargeLine from '@/assets/images/icon/large/icon-information-large-line.svg?inline';
import IconInformationLargeFill from '@/assets/images/icon/large/icon-information-large-fill.svg?inline';
import IconPlusRoundLargeLine from '@/assets/images/icon/large/icon-plusRound-large-line.svg?inline';
import IconStarRoundLargeFill from '@/assets/images/icon/large/icon-starRound-large-fill.svg?inline';
import IconSettingLargeLine from '@/assets/images/icon/large/icon-setting-large-line.svg?inline';
import IconLockLargeLine from '@/assets/images/icon/large/icon-lock-large-line.svg?inline';
import IconLockLargeFill from '@/assets/images/icon/large/icon-lock-large-fill.svg?inline';
import IconSecurityLargeLine from '@/assets/images/icon/large/icon-security-large-line.svg?inline';
import IconSecurityLargeFill from '@/assets/images/icon/large/icon-security-large-fill.svg?inline';
import IconImportLargeLine from '@/assets/images/icon/large/icon-import-large-line.svg?inline';
import IconLinkLargeLine from '@/assets/images/icon/large/icon-link-large-line.svg?inline';
import IconDownloadLargeLine from '@/assets/images/icon/large/icon-download-large-line.svg?inline';
import IconTrashLargeLine from '@/assets/images/icon/large/icon-trash-large-line.svg?inline';
import IconPhotoLargeLine from '@/assets/images/icon/large/icon-photo-large-line.svg?inline';
import IconWritingLargeLine from '@/assets/images/icon/large/icon-writing-large-line.svg?inline';
import IconSendLargeFill from '@/assets/images/icon/large/icon-send-large-fill.svg?inline';
import IconCouponLargeLine from '@/assets/images/icon/large/icon-coupon-large-line.svg?inline';
import IconMegaphoneLargeLine from '@/assets/images/icon/large/icon-megaphone-large-line.svg?inline';
import IconVideoLargeLine from '@/assets/images/icon/large/icon-video-large-line.svg?inline';
import IconVideoLargeFill from '@/assets/images/icon/large/icon-video-large-fill.svg?inline';
import IconStarLargeLine from '@/assets/images/icon/large/icon-star-large-line.svg?inline';
import IconStarLargeFill from '@/assets/images/icon/large/icon-star-large-fill.svg?inline';
// 제외
import IconLongArrowLargeLine from '@/assets/images/icon/large/icon-longArrow-large-line.svg?inline';
import IconSelectedLargeLine from '@/assets/images/icon/large/icon-selected-large-line.svg?inline';
import IconKeylineLargeLine from '@/assets/images/icon/large/icon-keyline-large-line.svg?inline';
import IconCheckLargeFill from '@/assets/images/icon/large/icon-check-large-fill.svg?inline';
import IconWarningLargeFill from '@/assets/images/icon/large/icon-warning-large-fill.svg?inline';

// x-large
import IconProfileXLargeLine from '@/assets/images/icon/xlarge/icon-profile-xlarge-line.svg?inline';
import IconProfileXLargeFill from '@/assets/images/icon/xlarge/icon-profile-xlarge-fill.svg?inline';
import IconAnswerXLargeLine from '@/assets/images/icon/xlarge/icon-answer-xlarge-line.svg?inline';
import IconVodXLargeLine from '@/assets/images/icon/xlarge/icon-vod-xlarge-line.svg?inline';
import IconEssayXLargeLine from '@/assets/images/icon/xlarge/icon-essay-xlarge-line.svg?inline';
import IconAnalyticsXLargeLine from '@/assets/images/icon/xlarge/icon-analytics-xlarge-line.svg?inline';
import IconArrowXLargeLine from '@/assets/images/icon/xlarge/icon-arrow-xlarge-line.svg?inline';
import IconTextArrowXLargeLine from '@/assets/images/icon/xlarge/icon-textArrow-xlarge-line.svg?inline';
import IconCloseXLargeLine from '@/assets/images/icon/xlarge/icon-close-xlarge-line.svg?inline';
import IconCheckRoundXLargeLine from '@/assets/images/icon/xlarge/icon-checkRound-xlarge-line.svg?inline';
import IconCheckRoundXLargeFill from '@/assets/images/icon/xlarge/icon-checkRound-xlarge-fill.svg?inline';
import IconPhotoXLargeLine from '@/assets/images/icon/xlarge/icon-photo-xlarge-line.svg?inline';
import IconSupportXLargeLine from '@/assets/images/icon/xlarge/icon-support-xlarge-line.svg?inline';
import IconStarXLargeLine from '@/assets/images/icon/xlarge/icon-star-xlarge-line.svg?inline';
import IconStarXLargeFill from '@/assets/images/icon/xlarge/icon-star-xlarge-fill.svg?inline';
// 제외
import IconQuestionXLargeLine from '@/assets/images/icon/xlarge/icon-question-xlarge-line.svg?inline';
import IconAdoptXLargeLine from '@/assets/images/icon/xlarge/icon-adopt-xlarge-line.svg?inline';
import IconCreditPlusXLargeLine from '@/assets/images/icon/xlarge/icon-creditPlus-xlarge-line.svg?inline';
import IconCreditMinusXLargeLine from '@/assets/images/icon/xlarge/icon-creditMinus-xlarge-line.svg?inline';
import IconLikeXLargeLine from '@/assets/images/icon/xlarge/icon-like-xlarge-line.svg?inline';
import IconCelebrateXLargeLine from '@/assets/images/icon/xlarge/icon-celebrate-xlarge-line.svg?inline';
import IconMegaphoneXLargeLine from '@/assets/images/icon/xlarge/icon-megaphone-xlarge-line.svg?inline';
import IconCheckXLargeFill from '@/assets/images/icon/xlarge/icon-check-xlarge-fill.svg?inline';
import IconUnCheckedXLargeFill from '@/assets/images/icon/xlarge/icon-unchecked-xlarge-fill.svg?inline';
import IconSettingXLargeLine from '@/assets/images/icon/xlarge/icon-setting-xlarge-line.svg?inline';
import IconBookmarkXLargeFill from '@/assets/images/icon/xlarge/icon-bookmark-xlarge-fill.svg?inline';

// 2x-large
import IconProfile2XLargeFill from '@/assets/images/icon/2xlarge/icon-profile-2xlarge-fill.svg?inline';
import IconWriting2XLargeLine from '@/assets/images/icon/2xlarge/icon-writing-2xlarge-line.svg?inline';
import IconPhoto2XLargeLine from '@/assets/images/icon/2xlarge/icon-photo-2xlarge-line.svg?inline';
// 제외
import IconCalendarError2XLargeFill from '@/assets/images/icon/2xlarge/icon-calendar-error-2xlarge-fill.svg?inline';

// 4x-large
import IconStar4XLargeFill from '@/assets/images/icon/4xlarge/icon-star-4xlarge-fill.svg?inline';
import customValidator from '@/utils/custom-validator';

export const IconNames = [
	// small
	'IconProfileSmallLine',
	'IconProfileSmallFill',
	'IconArrowSmallLine',
	'IconTextArrowSmallLine',
	'IconPlusSmallLine',
	'IconCloseSmallLine',
	'IconSearchSmallLine',
	'IconCheckSmallLine',
	'IconCheckRoundSmallLine',
	'IconCheckRoundSmallFill',
	'IconQuestionMarkSmallLine',
	'IconQuestionMarkSmallFill',
	'IconExclamationSmallLine',
	'IconExclamationSmallFill',
	'IconSettingSmallFill',
	'IconMegaphoneSmallLine',
	'IconStarSmallLine',
	'IconStarSmallFill',
	'IconFileSmallLine',
	'IconLinkSmallLine',
	'IconLikeSmallLine',
	'IconLikeSmallFill',
	'IconThreeDotSmallFill',
	'IconCheckSmallFill',

	// medium
	'IconProfileMediumLine',
	'IconProfileMediumFill',
	'IconQuestionMediumLine',
	'IconEssayMediumLine',
	'IconInterviewMediumLine',
	'IconCommentMediumLine',
	'IconArrowMediumLine',
	'IconTextArrowMediumLine',
	'IconRevertMediumLine',
	'IconPlusMediumLine',
	'IconMinusMediumLine',
	'IconCloseMediumLine',
	'IconFilterMediumLine',
	'IconBookmarkMediumLine',
	'IconBookmarkMediumFill',
	'IconCheckMediumLine',
	'IconSelectedMediumLine',
	'IconCheckRoundMediumFill',
	'IconQuestionMarkMediumLine',
	'IconQuestionMarkMediumFill',
	'IconExclamationMediumLine',
	'IconExclamationMediumFill',
	'IconInformationMediumLine',
	'IconInformationMediumFill',
	'IconCloseRoundMediumLine',
	'IconCloseRoundMediumFill',
	'IconPlusRoundMediumLine',
	'IconArrowRoundMediumLine',
	'IconLockMediumLine',
	'IconLockMediumFill',
	'IconImportMediumLine',
	'IconLinkMediumLine',
	'IconDownloadMediumLine',
	'IconTrashMediumLine',
	'IconLikeMediumLine',
	'IconLikeMediumFill',
	'IconBrowseMediumLine',
	'IconBrowseMediumFill',
	'IconExportMediumLine',
	'IconVideoMediumLine',
	'IconVideoMediumFill',
	'IconClockMediumLine',
	'IconClockMediumFill',
	'IconPriceMediumLine',
	'IconDiscountMediumLine',
	'IconLocationMediumLine',
	'IconLocationMediumFill',
	'IconSupportMediumLine',
	'IconCouponMediumLine',
	'IconMegaphoneMediumLine',
	'IconStarMediumLine',
	'IconStarMediumFill',
	'IconThreeDotMediumFill',
	'IconResumeMediumLine',
	'IconJobWikiMediumLine',
	'IconAnalyticsMediumLine',
	'IconVodMediumLine',
	'IconEduMediumLine',
	'IconFileMediumLine',

	// large
	'IconProfileLargeLine',
	'IconProfileLargeFill',
	'IconAnswerLargeLine',
	'IconVodLargeLine',
	'IconQuestionLargeLine',
	'IconEssayLargeLine',
	'IconInterviewLargeLine',
	'IconResumeLargeLine',
	'IconAnalyticsLargeLine',
	'IconMentoringLargeLine',
	'IconEduLargeLine',
	'IconArrowLargeLine',
	'IconTextArrowLargeLine',
	'IconBackwardLargeLine',
	'IconReplyLargeLine',
	'IconPlusLargeLine',
	'IconCloseLargeLine',
	'IconHamburgerLargeLine',
	'IconFilterLargeLine',
	'IconSearchLargeLine',
	'IconAlarmLargeLine',
	'IconBookmarkLargeLine',
	'IconBookmarkLargeFill',
	'IconCheckLargeLine',
	'IconCheckRoundLargeLine',
	'IconCheckRoundLargeFill',
	'IconQuestionMarkLargeLine',
	'IconQuestionMarkLargeFill',
	'IconExclamationLargeLine',
	'IconExclamationLargeFill',
	'IconInformationLargeLine',
	'IconPlusRoundLargeLine',
	'IconStarRoundLargeFill',
	'IconSettingLargeLine',
	'IconLockLargeLine',
	'IconLockLargeFill',
	'IconSecurityLargeLine',
	'IconSecurityLargeFill',
	'IconImportLargeLine',
	'IconLinkLargeLine',
	'IconDownloadLargeLine',
	'IconTrashLargeLine',
	'IconPhotoLargeLine',
	'IconWritingLargeLine',
	'IconSendLargeFill',
	'IconCouponLargeLine',
	'IconMegaphoneLargeLine',
	'IconVideoLargeLine',
	'IconVideoLargeFill',
	'IconStarLargeLine',
	'IconStarLargeFill',
	'IconLongArrowLargeLine',
	'IconSelectedLargeLine',
	'IconKeylineLargeLine',
	'IconCheckLargeFill',
	'IconWarningLargeFill',

	// XLarge
	'IconProfileXLargeLine',
	'IconProfileXLargeFill',
	'IconAnswerXLargeLine',
	'IconVodXLargeLine',
	'IconEssayXLargeLine',
	'IconAnalyticsXLargeLine',
	'IconArrowXLargeLine',
	'IconTextArrowXLargeLine',
	'IconCloseXLargeLine',
	'IconCheckRoundXLargeLine',
	'IconCheckRoundXLargeFill',
	'IconPhotoXLargeLine',
	'IconSupportXLargeLine',
	'IconStarXLargeLine',
	'IconStarXLargeFill',
	'IconQuestionXLargeLine',
	'IconAdoptXLargeLine',
	'IconCreditPlusXLargeLine',
	'IconCreditMinusXLargeLine',
	'IconLikeXLargeLine',
	'IconCelebrateXLargeLine',
	'IconMegaphoneXLargeLine',
	'IconCheckXLargeFill',
	'IconUnCheckedXLargeFill',
	'IconSettingXLargeLine',
	'IconBookmarkXLargeFill',

	//2x-large
	'IconProfile2XLargeFill',
	'IconWriting2XLargeLine',
	'IconPhoto2XLargeLine',
	// 제외
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
		IconThreeDotSmallFill,
		// 제외
		IconCheckSmallFill,

		// medium
		IconProfileMediumLine,
		IconProfileMediumFill,
		IconQuestionMediumLine,
		IconEssayMediumLine,
		IconInterviewMediumLine,
		IconCommentMediumLine,
		IconArrowMediumLine,
		IconTextArrowMediumLine,
		IconRevertMediumLine,
		IconPlusMediumLine,
		IconMinusMediumLine,
		IconCloseMediumLine,
		IconFilterMediumLine,
		IconBookmarkMediumLine,
		IconBookmarkMediumFill,
		IconThreeDotMediumFill,
		IconCheckMediumLine,
		IconSelectedMediumLine,
		IconCheckRoundMediumFill,
		IconQuestionMarkMediumLine,
		IconQuestionMarkMediumFill,
		IconExclamationMediumLine,
		IconExclamationMediumFill,
		IconInformationMediumLine,
		IconInformationMediumFill,
		IconCloseRoundMediumLine,
		IconCloseRoundMediumFill,
		IconPlusRoundMediumLine,
		IconArrowRoundMediumLine,
		IconLockMediumLine,
		IconLockMediumFill,
		IconImportMediumLine,
		IconLinkMediumLine,
		IconDownloadMediumLine,
		IconTrashMediumLine,
		IconLikeMediumLine,
		IconLikeMediumFill,
		IconBrowseMediumLine,
		IconBrowseMediumFill,
		IconExportMediumLine,
		IconVideoMediumLine,
		IconVideoMediumFill,
		IconClockMediumLine,
		IconClockMediumFill,
		IconPriceMediumLine,
		IconDiscountMediumLine,
		IconLocationMediumLine,
		IconLocationMediumFill,
		IconSupportMediumLine,
		IconCouponMediumLine,
		IconMegaphoneMediumLine,
		IconStarMediumLine,
		IconStarMediumFill,
		IconResumeMediumLine,
		IconJobWikiMediumLine,
		IconAnalyticsMediumLine,
		IconVodMediumLine,
		IconEduMediumLine,
		IconFileMediumLine,

		// large
		IconProfileLargeLine,
		IconProfileLargeFill,
		IconAnswerLargeLine,
		IconVodLargeLine,
		IconQuestionLargeLine,
		IconEssayLargeLine,
		IconInterviewLargeLine,
		IconResumeLargeLine,
		IconAnalyticsLargeLine,
		IconMentoringLargeLine,
		IconEduLargeLine,
		IconArrowLargeLine,
		IconTextArrowLargeLine,
		IconBackwardLargeLine,
		IconReplyLargeLine,
		IconPlusLargeLine,
		IconCloseLargeLine,
		IconHamburgerLargeLine,
		IconFilterLargeLine,
		IconSearchLargeLine,
		IconAlarmLargeLine,
		IconBookmarkLargeLine,
		IconBookmarkLargeFill,
		IconCheckLargeLine,
		IconCheckRoundLargeLine,
		IconCheckRoundLargeFill,
		IconQuestionMarkLargeLine,
		IconQuestionMarkLargeFill,
		IconExclamationLargeLine,
		IconExclamationLargeFill,
		IconInformationLargeLine,
		IconInformationLargeFill,
		IconPlusRoundLargeLine,
		IconStarRoundLargeFill,
		IconSettingLargeLine,
		IconLockLargeLine,
		IconLockLargeFill,
		IconSecurityLargeLine,
		IconSecurityLargeFill,
		IconImportLargeLine,
		IconLinkLargeLine,
		IconDownloadLargeLine,
		IconTrashLargeLine,
		IconPhotoLargeLine,
		IconWritingLargeLine,
		IconSendLargeFill,
		IconCouponLargeLine,
		IconMegaphoneLargeLine,
		IconVideoLargeLine,
		IconVideoLargeFill,
		IconStarLargeLine,
		IconStarLargeFill,
		IconLongArrowLargeLine,
		IconSelectedLargeLine,
		IconKeylineLargeLine,
		IconCheckLargeFill,
		IconWarningLargeFill,

		// x-large
		IconProfileXLargeLine,
		IconProfileXLargeFill,
		IconAnswerXLargeLine,
		IconVodXLargeLine,
		IconEssayXLargeLine,
		IconAnalyticsXLargeLine,
		IconArrowXLargeLine,
		IconTextArrowXLargeLine,
		IconCloseXLargeLine,
		IconCheckRoundXLargeLine,
		IconCheckRoundXLargeFill,
		IconPhotoXLargeLine,
		IconSupportXLargeLine,
		IconStarXLargeLine,
		IconStarXLargeFill,
		IconQuestionXLargeLine,
		IconAdoptXLargeLine,
		IconCreditPlusXLargeLine,
		IconCreditMinusXLargeLine,
		IconLikeXLargeLine,
		IconCelebrateXLargeLine,
		IconMegaphoneXLargeLine,
		IconCheckXLargeFill,
		IconUnCheckedXLargeFill,
		IconSettingXLargeLine,
		IconBookmarkXLargeFill,
		// 2x-large
		IconProfile2XLargeFill,
		IconWriting2XLargeLine,
		IconPhoto2XLargeLine,
		// 제외
		IconCalendarError2XLargeFill,

		// 4x-large
		IconStar4XLargeFill,
	},
};
</script>
