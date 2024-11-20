<script>
import BaseIcon from '@/components/icon/BaseIcon.vue';

// xsmall
import IconProfileXSmallLine from '@/assets/images/icon/xsmall/icon-profile-xsmall-line.svg?inline';
import IconProfileXSmallFill from '@/assets/images/icon/xsmall/icon-profile-xsmall-fill.svg?inline';
import IconArrowXSmallLine from '@/assets/images/icon/xsmall/icon-arrow-xsmall-line.svg?inline';
import IconTextArrowXSmallLine from '@/assets/images/icon/xsmall/icon-textArrow-xsmall-line.svg?inline';
import IconPlusXSmallLine from '@/assets/images/icon/xsmall/icon-plus-xsmall-line.svg?inline';
import IconCloseXSmallLine from '@/assets/images/icon/xsmall/icon-close-xsmall-line.svg?inline';
import IconSearchXSmallLine from '@/assets/images/icon/xsmall/icon-search-xsmall-line.svg?inline';
import IconCheckXSmallLine from '@/assets/images/icon/xsmall/icon-check-xsmall-line.svg?inline';
import IconCheckRoundXSmallLine from '@/assets/images/icon/xsmall/icon-checkRound-xsmall-line.svg?inline';
import IconCheckRoundXSmallFill from '@/assets/images/icon/xsmall/icon-checkRound-xsmall-fill.svg?inline';
import IconQuestionMarkXSmallLine from '@/assets/images/icon/xsmall/icon-questionMark-xsmall-line.svg?inline';
import IconQuestionMarkXSmallFill from '@/assets/images/icon/xsmall/icon-questionMark-xsmall-fill.svg?inline';
import IconExclamationXSmallLine from '@/assets/images/icon/xsmall/icon-exclamation-xsmall-line.svg?inline';
import IconExclamationXSmallFill from '@/assets/images/icon/xsmall/icon-exclamation-xsmall-fill.svg?inline';
import IconInformationXSmallLine from '@/assets/images/icon/xsmall/icon-information-xsmall-line.svg?inline';
import IconInformationXSmallFill from '@/assets/images/icon/xsmall/icon-information-xsmall-fill.svg?inline';
import IconSettingXSmallFill from '@/assets/images/icon/xsmall/icon-setting-xsmall-fill.svg?inline';
import IconMegaphoneXSmallLine from '@/assets/images/icon/xsmall/icon-megaphone-xsmall-line.svg?inline';
import IconStarXSmallLine from '@/assets/images/icon/xsmall/icon-star-xsmall-line.svg?inline';
import IconStarXSmallFill from '@/assets/images/icon/xsmall/icon-star-xsmall-fill.svg?inline';
import IconFileXSmallLine from '@/assets/images/icon/xsmall/icon-file-xsmall-line.svg?inline';
import IconLinkXSmallLine from '@/assets/images/icon/xsmall/icon-link-xsmall-line.svg?inline';
import IconLikeXSmallLine from '@/assets/images/icon/xsmall/icon-like-xsmall-line.svg?inline';
import IconLikeXSmallFill from '@/assets/images/icon/xsmall/icon-like-xsmall-fill.svg?inline';
import IconThreeDotXSmallFill from '@/assets/images/icon/xsmall/icon-threeDot-xsmall-fill.svg?inline';
import IconWritingXSmallLine from '@/assets/images/icon/xsmall/icon-writing-xsmall-line.svg?inline';
import IconBookmarkXSmallLine from '@/assets/images/icon/xsmall/icon-bookmark-xsmall-line.svg?inline';
import IconBookmarkXSmallFill from '@/assets/images/icon/xsmall/icon-bookmark-xsmall-fill.svg?inline';
import IconLoadingXSmallFill from '@/assets/images/icon/xsmall/icon-loading-xsmall-fill.svg?inline';
import IconExportXSmallLine from '@/assets/images/icon/xsmall/icon-export-xsmall-line.svg?inline';
import IconLockXSmallFill from '@/assets/images/icon/xsmall/icon-lock-xsmall-fill.svg?inline';
import IconDownloadXSmallLine from '@/assets/images/icon/xsmall/icon-download-xsmall-line.svg?inline';
import IconEmailXSmallFill from '@/assets/images/icon/xsmall/icon-email-xsmall-fill.svg?inline';

// small
import IconProfileSmallLine from '@/assets/images/icon/small/icon-profile-small-line.svg?inline';
import IconProfileSmallFill from '@/assets/images/icon/small/icon-profile-small-fill.svg?inline';
import IconQuestionSmallLine from '@/assets/images/icon/small/icon-question-small-line.svg?inline';
import IconEssaySmallLine from '@/assets/images/icon/small/icon-essay-small-line.svg?inline';
import IconInterviewSmallLine from '@/assets/images/icon/small/icon-interview-small-line.svg?inline';
import IconCommentSmallLine from '@/assets/images/icon/small/icon-comment-small-line.svg?inline';
import IconResumeSmallLine from '@/assets/images/icon/small/icon-resume-small-line.svg?inline';
import IconAnalyticsSmallLine from '@/assets/images/icon/small/icon-analytics-small-line.svg?inline';
import IconArrowSmallLine from '@/assets/images/icon/small/icon-arrow-small-line.svg?inline';
import IconTextArrowSmallLine from '@/assets/images/icon/small/icon-textArrow-small-line.svg?inline';
import IconRevertSmallLine from '@/assets/images/icon/small/icon-revert-small-line.svg?inline';
import IconPlusSmallLine from '@/assets/images/icon/small/icon-plus-small-line.svg?inline';
import IconMinusSmallLine from '@/assets/images/icon/small/icon-minus-small-line.svg?inline';
import IconCloseSmallLine from '@/assets/images/icon/small/icon-close-small-line.svg?inline';
import IconFilterSmallLine from '@/assets/images/icon/small/icon-filter-small-line.svg?inline';
import IconBookmarkSmallLine from '@/assets/images/icon/small/icon-bookmark-small-line.svg?inline';
import IconBookmarkSmallFill from '@/assets/images/icon/small/icon-bookmark-small-fill.svg?inline';
import IconCheckSmallLine from '@/assets/images/icon/small/icon-check-small-line.svg?inline';
import IconCheckRoundSmallLine from '@/assets/images/icon/small/icon-checkRound-small-line.svg?inline';
import IconCheckRoundSmallFill from '@/assets/images/icon/small/icon-checkRound-small-fill.svg?inline';
import IconQuestionMarkSmallLine from '@/assets/images/icon/small/icon-questionMark-small-line.svg?inline';
import IconQuestionMarkSmallFill from '@/assets/images/icon/small/icon-questionMark-small-fill.svg?inline';
import IconExclamationSmallLine from '@/assets/images/icon/small/icon-exclamation-small-line.svg?inline';
import IconExclamationSmallFill from '@/assets/images/icon/small/icon-exclamation-small-fill.svg?inline';
import IconInformationSmallLine from '@/assets/images/icon/small/icon-information-small-line.svg?inline';
import IconInformationSmallFill from '@/assets/images/icon/small/icon-information-small-fill.svg?inline';
import IconCloseRoundSmallLine from '@/assets/images/icon/small/icon-closeRound-small-line.svg?inline';
import IconCloseRoundSmallFill from '@/assets/images/icon/small/icon-closeRound-small-fill.svg?inline';
import IconPlusRoundSmallLine from '@/assets/images/icon/small/icon-plusRound-small-line.svg?inline';
import IconArrowRoundSmallLine from '@/assets/images/icon/small/icon-arrowRound-small-line.svg?inline';
import IconLockSmallLine from '@/assets/images/icon/small/icon-lock-small-line.svg?inline';
import IconLockSmallFill from '@/assets/images/icon/small/icon-lock-small-fill.svg?inline';
import IconImportSmallLine from '@/assets/images/icon/small/icon-import-small-line.svg?inline';
import IconLinkSmallLine from '@/assets/images/icon/small/icon-link-small-line.svg?inline';
import IconDownloadSmallLine from '@/assets/images/icon/small/icon-download-small-line.svg?inline';
import IconTrashSmallLine from '@/assets/images/icon/small/icon-trash-small-line.svg?inline';
import IconLikeSmallLine from '@/assets/images/icon/small/icon-like-small-line.svg?inline';
import IconLikeSmallFill from '@/assets/images/icon/small/icon-like-small-fill.svg?inline';
import IconBrowseSmallLine from '@/assets/images/icon/small/icon-browse-small-line.svg?inline';
import IconBrowseSmallFill from '@/assets/images/icon/small/icon-browse-small-fill.svg?inline';
import IconExportSmallLine from '@/assets/images/icon/small/icon-export-small-line.svg?inline';
import IconVideoSmallLine from '@/assets/images/icon/small/icon-video-small-line.svg?inline';
import IconVideoSmallFill from '@/assets/images/icon/small/icon-video-small-fill.svg?inline';
import IconClockSmallLine from '@/assets/images/icon/small/icon-clock-small-line.svg?inline';
import IconClockSmallFill from '@/assets/images/icon/small/icon-clock-small-fill.svg?inline';
import IconPriceSmallLine from '@/assets/images/icon/small/icon-price-small-line.svg?inline';
import IconDiscountSmallLine from '@/assets/images/icon/small/icon-discount-small-line.svg?inline';
import IconLocationSmallLine from '@/assets/images/icon/small/icon-location-small-line.svg?inline';
import IconLocationSmallFill from '@/assets/images/icon/small/icon-location-small-fill.svg?inline';
import IconSupportSmallLine from '@/assets/images/icon/small/icon-support-small-line.svg?inline';
import IconCouponSmallLine from '@/assets/images/icon/small/icon-coupon-small-line.svg?inline';
import IconMegaphoneSmallLine from '@/assets/images/icon/small/icon-megaphone-small-line.svg?inline';
import IconStarSmallLine from '@/assets/images/icon/small/icon-star-small-line.svg?inline';
import IconStarSmallFill from '@/assets/images/icon/small/icon-star-small-fill.svg?inline';
import IconThreeDotSmallFill from '@/assets/images/icon/small/icon-threeDot-small-fill.svg?inline';
import IconFileSmallLine from '@/assets/images/icon/small/icon-file-small-line.svg?inline';
import IconBlockSmallLine from '@/assets/images/icon/small/icon-block-small-line.svg?inline';
import IconUnblockSmallLine from '@/assets/images/icon/small/icon-unblock-small-line.svg?inline';
import IconSirenSmallLine from '@/assets/images/icon/small/icon-siren-small-line.svg?inline';
import IconWritingSmallLine from '@/assets/images/icon/small/icon-writing-small-line.svg?inline';
import IconVodSmallLine from '@/assets/images/icon/small/icon-vod-small-line.svg?inline';
import IconDateSmallLine from '@/assets/images/icon/small/icon-date-small-line.svg?inline';
import IconGoodSmallLine from '@/assets/images/icon/small/icon-good-small-line.svg?inline';
import IconBadSmallLine from '@/assets/images/icon/small/icon-bad-small-line.svg?inline';
import IconSearchSmallLine from '@/assets/images/icon/small/icon-search-small-line.svg?inline';
import IconShareSmallLine from '@/assets/images/icon/small/icon-share-small-line.svg?inline';
import IconSkipSmallFill from '@/assets/images/icon/small/icon-skip-small-fill.svg?inline';
import IconSettingSmallLine from '@/assets/images/icon/small/icon-setting-small-line.svg?inline';
import IconMenuSmallLine from '@/assets/images/icon/small/icon-menu-small-line.svg?inline';
import IconDownSmallLine from '@/assets/images/icon/small/icon-down-small-line.svg?inline';
import IconGoodSmallFill from '@/assets/images/icon/small/icon-good-small-fill.svg?inline';
import IconBadSmallFill from '@/assets/images/icon/small/icon-bad-small-fiil.svg?inline';
import IconNextSmallLine from '@/assets/images/icon/small/icon-next-small-line.svg?inline';

// medium
import IconLikeMediumLine from '@/assets/images/icon/medium/icon-like-medium-line.svg?inline';
import IconLikeMediumFill from '@/assets/images/icon/medium/icon-like-medium-fill.svg?inline';
import IconArrowUpRoundMediumLine from '@/assets/images/icon/medium/icon-arrowUpRound-medium-line.svg?inline';
import IconArrowUpRoundMediumFill from '@/assets/images/icon/medium/icon-arrowUpRound-medium-fill.svg?inline';
import IconLoadingMediumFill from '@/assets/images/icon/medium/icon-loading-medium-fill.svg?inline';
import IconExclamationMediumLine from '@/assets/images/icon/medium/icon-exclamation-medium-line.svg?inline';
import IconExclamationMediumFill from '@/assets/images/icon/medium/icon-exclamation-medium-fill.svg?inline';
import IconCheckMediumLine from '@/assets/images/icon/medium/icon-check-medium-line.svg?inline';
import IconArrowMediumLine from '@/assets/images/icon/medium/icon-arrow-medium-line.svg?inline';
import IconTextArrowMediumLine from '@/assets/images/icon/medium/icon-textArrow-medium-line.svg?inline';
import IconRevertMediumLine from '@/assets/images/icon/medium/icon-revert-medium-line.svg?inline';
import IconPlusMediumLine from '@/assets/images/icon/medium/icon-plus-medium-line.svg?inline';
import IconMinusMediumLine from '@/assets/images/icon/medium/icon-minus-medium-line.svg?inline';
import IconCloseMediumLine from '@/assets/images/icon/medium/icon-close-medium-line.svg?inline';
import IconFilterMediumLine from '@/assets/images/icon/medium/icon-filter-medium-line.svg?inline';
import IconBookmarkMediumLine from '@/assets/images/icon/medium/icon-bookmark-medium-line.svg?inline';
import IconBookmarkMediumFill from '@/assets/images/icon/medium/icon-bookmark-medium-fill.svg?inline';
import IconShareMediumLine from '@/assets/images/icon/medium/icon-share-medium-line.svg?inline';
import IconCheckRoundMediumLine from '@/assets/images/icon/medium/icon-checkRound-medium-line.svg?inline';
import IconCheckRoundMediumFill from '@/assets/images/icon/medium/icon-checkRound-medium-fill.svg?inline';
import IconQuestionMarkMediumLine from '@/assets/images/icon/medium/icon-questionMark-medium-line.svg?inline';
import IconQuestionMarkMediumFill from '@/assets/images/icon/medium/icon-questionMark-medium-fill.svg?inline';
import IconInformationMediumLine from '@/assets/images/icon/medium/icon-information-medium-line.svg?inline';
import IconInformationMediumFill from '@/assets/images/icon/medium/icon-information-medium-fill.svg?inline';
import IconCloseRoundMediumLine from '@/assets/images/icon/medium/icon-closeRound-medium-line.svg?inline';
import IconCloseRoundMediumFill from '@/assets/images/icon/medium/icon-closeRound-medium-fill.svg?inline';
import IconPlusRoundMediumLine from '@/assets/images/icon/medium/icon-plusRound-medium-line.svg?inline';
import IconArrowRoundMediumLine from '@/assets/images/icon/medium/icon-arrowRound-medium-line.svg?inline';
import IconCouponMediumLine from '@/assets/images/icon/medium/icon-coupon-medium-line.svg?inline';
import IconLockMediumLine from '@/assets/images/icon/medium/icon-lock-medium-line.svg?inline';
import IconLockMediumFill from '@/assets/images/icon/medium/icon-lock-medium-fill.svg?inline';
import IconImportMediumLine from '@/assets/images/icon/medium/icon-import-medium-line.svg?inline';
import IconLinkMediumLine from '@/assets/images/icon/medium/icon-link-medium-line.svg?inline';
import IconDownloadMediumLine from '@/assets/images/icon/medium/icon-download-medium-line.svg?inline';
import IconTrashMediumLine from '@/assets/images/icon/medium/icon-trash-medium-line.svg?inline';
import IconLocationMediumLine from '@/assets/images/icon/medium/icon-location-medium-line.svg?inline';
import IconLocationMediumFill from '@/assets/images/icon/medium/icon-location-medium-fill.svg?inline';
import IconSupportMediumLine from '@/assets/images/icon/medium/icon-support-medium-line.svg?inline';
import IconMegaphoneMediumLine from '@/assets/images/icon/medium/icon-megaphone-medium-line.svg?inline';
import IconExportMediumLine from '@/assets/images/icon/medium/icon-export-medium-line.svg?inline';
import IconStarMediumLine from '@/assets/images/icon/medium/icon-star-medium-line.svg?inline';
import IconStarMediumFill from '@/assets/images/icon/medium/icon-star-medium-fill.svg?inline';
import IconThreeDotsMediumFill from '@/assets/images/icon/medium/icon-threeDot-medium-fill.svg?inline';
import IconWritingMediumLine from '@/assets/images/icon/medium/icon-writing-medium-line.svg?inline';
import IconSearchMediumLine from '@/assets/images/icon/medium/icon-search-medium-line.svg?inline';
import IconFileMediumLine from '@/assets/images/icon/medium/icon-file-medium-line.svg?inline';
import IconProfileMediumLine from '@/assets/images/icon/medium/icon-profile-medium-line.svg?inline';
import IconProfileMediumFill from '@/assets/images/icon/medium/icon-profile-medium-fill.svg?inline';
import IconVodMediumLine from '@/assets/images/icon/medium/icon-vod-medium-line.svg?inline';
import IconCommentMediumLine from '@/assets/images/icon/medium/icon-comment-medium-line.svg?inline';
import IconSettingMediumLine from '@/assets/images/icon/medium/icon-setting-medium-line.svg?inline';
import IconSecurityMediumLine from '@/assets/images/icon/medium/icon-security-medium-line.svg?inline';
import IconSecurityMediumFill from '@/assets/images/icon/medium/icon-security-medium-fill.svg?inline';
import IconSendMediumFill from '@/assets/images/icon/medium/icon-send-medium-fill.svg?inline';
import IconReplyMediumLine from '@/assets/images/icon/medium/icon-reply-medium-line.svg?inline';

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
import IconPtLargeLine from '@/assets/images/icon/large/icon-pt-large-line.svg?inline';
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
import IconThreeDotLargeFill from '@/assets/images/icon/large/icon-threeDot-large-fill.svg?inline';
import IconVodProductLargeLine from '@/assets/images/icon/large/icon-vod-product-large-line.svg?inline';
import IconClassLargeLine from '@/assets/images/icon/large/icon-class-large-line.svg?inline';
import IconBusinessCaseLargeLine from '@/assets/images/icon/large/icon-businessCase-large-line.svg?inline';
import IconBuildingLargeLine from '@/assets/images/icon/large/icon-building-large-line.svg?inline';
import IconTaskLargeLine from '@/assets/images/icon/large/icon-task-large-line.svg?inline';
import IconFeedLargeLine from '@/assets/images/icon/large/icon-feed-large-line.svg?inline';
import IconImportHistoryLargeLine from '@/assets/images/icon/large/icon-importHistory-large-line.svg?inline';
import IconGuideBookLargeLine from '@/assets/images/icon/large/icon-guidebook-large-line.svg?inline';
import IconExitLargeLine from '@/assets/images/icon/large/icon-exit-large-line.svg?inline';
import IconArrowUpRoundLargeLine from '@/assets/images/icon/large/icon-arrowUpRound-large-line.svg?inline';
import IconArrowUpRoundLargeFill from '@/assets/images/icon/large/icon-arrowUpRound-large-fill.svg?inline';
import IconCloseRoundLargeLine from '@/assets/images/icon/large/icon-closeRound-large-line.svg?inline';
import IconCloseRoundLargeFill from '@/assets/images/icon/large/icon-closeRound-large-fill.svg?inline';

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
import IconBookmarkXLargeFill from '@/assets/images/icon/xlarge/icon-bookMark-xlarge-fill.svg?inline';
import IconBookmarkXLargeLine from '@/assets/images/icon/xlarge/icon-bookMark-xlarge-line.svg?inline';
import IconDownloadXLargeLine from '@/assets/images/icon/xlarge/icon-download-xlarge-line.svg?inline';
import IconMuteXLargeLine from '@/assets/images/icon/xlarge/icon-mute-xlarge-line.svg?inline';
import IconVolumeXLargeLine from '@/assets/images/icon/xlarge/icon-volume-xlarge-line.svg?inline';
import IconWritingXLargeLine from '@/assets/images/icon/xlarge/icon-writing-xlarge-line.svg?inline';
import IconPlusXLargeLine from '@/assets/images/icon/xlarge/icon-plus-xlarge-line.svg?inline';
import IconDownXLargeLine from '@/assets/images/icon/xlarge/icon-down-xlarge-line.svg?inline';
import IconAlarmCelebrate from '@/assets/images/icon/xlarge/icon-alarm-celebrate.svg?inline';
import IconAlarmWon from '@/assets/images/icon/xlarge/icon-alarm-won.svg?inline';
import IconAlarmCreditPlus from '@/assets/images/icon/xlarge/icon-alarm-creditPlus.svg?inline';
import IconAlarmAnswer from '@/assets/images/icon/xlarge/icon-alarm-answer.svg?inline';
import IconAlarmQuestion from '@/assets/images/icon/xlarge/icon-alarm-question.svg?inline';
import IconAlarmLike from '@/assets/images/icon/xlarge/icon-alarm-like.svg?inline';
import IconAlarmSelected from '@/assets/images/icon/xlarge/icon-alarm-selected.svg?inline';
import IconAlarmAssignment from '@/assets/images/icon/xlarge/icon-alarm-assignment.svg?inline';
import IconAlarmNotice from '@/assets/images/icon/xlarge/icon-alarm-notice.svg?inline';
import IconExportXLargeLine from '@/assets/images/icon/xlarge/icon-export-xlarge-line.svg?inline';
import IconFileXLargeLine from '@/assets/images/icon/xlarge/icon-file-xlarge-line.svg?inline';
import IconImportXLargeLine from '@/assets/images/icon/xlarge/icon-import-xlarge-line.svg?inline';
import IconLockXLargeLine from '@/assets/images/icon/xlarge/icon-lock-xlarge-line.svg?inline';
import IconLockXLargeFill from '@/assets/images/icon/xlarge/icon-lock-xlarge-fill.svg?inline';
import IconLocationXLargeLine from '@/assets/images/icon/xlarge/icon-location-xlarge-line.svg?inline';
import IconLocationXLargeFill from '@/assets/images/icon/xlarge/icon-location-xlarge-fill.svg?inline';
import IconFilterXLargeLine from '@/assets/images/icon/xlarge/icon-filter-xlarge-line.svg?inline';
import IconMegaphoneXLargeLine from '@/assets/images/icon/xlarge/icon-megaphone-xlarge-line.svg?inline';
import IconThreeDotXLargeLine from '@/assets/images/icon/xlarge/icon-threeDot-xlarge-line.svg?inline';
import IconArrowRoundXLargeLine from '@/assets/images/icon/xlarge/icon-arrowRound-xlarge-line.svg?inline';

// 2x-large
import IconProfile2XLargeFill from '@/assets/images/icon/2xlarge/icon-profile-2xlarge-fill.svg?inline';
import IconJob2XLargeLine from '@/assets/images/icon/2xlarge/icon-job-2xlarge-line.svg?inline';
import IconChangeJob2XLargeLine from '@/assets/images/icon/2xlarge/icon-changeJob-2xlarge-line.svg?inline';
import IconSupervisor2XLargeLine from '@/assets/images/icon/2xlarge/icon-supervisor-2xlarge-line.svg?inline';
import IconCollege2XLargeLine from '@/assets/images/icon/2xlarge/icon-college-2xlarge-line.svg?inline';
import IconAnswer2XLargeLine from '@/assets/images/icon/2xlarge/icon-answer-2xlarge-line.svg?inline';
import IconBoard2XLargeLine from '@/assets/images/icon/2xlarge/icon-board-2xlarge-line.svg?inline';
import IconCheckRound2XLargeLine from '@/assets/images/icon/2xlarge/icon-checkRound-2xlarge-line.svg?inline';
import IconCheckRound2XLargeFill from '@/assets/images/icon/2xlarge/icon-checkRound-2xlarge-fill.svg?inline';
import IconWriting2XLargeLine from '@/assets/images/icon/2xlarge/icon-writing-2xlarge-line.svg?inline';
import IconPhoto2XLargeLine from '@/assets/images/icon/2xlarge/icon-photo-2xlarge-line.svg?inline';
import IconSupport2XLargeLine from '@/assets/images/icon/2xlarge/icon-support-2xlarge-line.svg?inline';
import IconPlus2XLargeLine from '@/assets/images/icon/2xlarge/icon-plus-2xlarge-line.svg?inline';
import IconBag2XLargeLine from '@/assets/images/icon/2xlarge/icon-bag-2xlarge-line.svg?inline';
import IconSend2XLargeFill from '@/assets/images/icon/2xlarge/icon-send-2xlarge-fill.svg?inline';

// 4x-large
import IconJob4XLargeLine from '@/assets/images/icon/4xlarge/icon-job-4xlarge-line.svg?inline';
import IconChangeJob4XLargeLine from '@/assets/images/icon/4xlarge/icon-changeJob-4xlarge-line.svg?inline';
import IconSupervisor4XLargeLine from '@/assets/images/icon/4xlarge/icon-supervisor-4xlarge-line.svg?inline';
import IconCollege4XLargeLine from '@/assets/images/icon/4xlarge/icon-college-4xlarge-line.svg?inline';
import IconAnswer4XLargeLine from '@/assets/images/icon/4xlarge/icon-answer-4xlarge-line.svg?inline';
import IconCheckRound4XLargeLine from '@/assets/images/icon/4xlarge/icon-checkRound-4xlarge-line.svg?inline';
import IconCheckRound4XLargeFill from '@/assets/images/icon/4xlarge/icon-checkRound-4xlarge-fill.svg?inline';
import IconStar4XLargeFill from '@/assets/images/icon/4xlarge/icon-star-4xlarge-fill.svg?inline';
import IconStar4XLargeLine from '@/assets/images/icon/4xlarge/icon-star-4xlarge-line.svg?inline';
import IconBoard4XLargeLine from '@/assets/images/icon/4xlarge/icon-board-4xlarge-line.svg?inline';
import IconExclamation4XLargeFill from '@/assets/images/icon/4xlarge/icon-exclamation-4xlarge-fill.svg?inline';

import customValidator from '@/utils/custom-validator';

export const IconNames = [
	// xsmall
	'IconProfileXSmallLine',
	'IconProfileXSmallFill',
	'IconArrowXSmallLine',
	'IconTextArrowXSmallLine',
	'IconPlusXSmallLine',
	'IconCloseXSmallLine',
	'IconSearchXSmallLine',
	'IconCheckXSmallLine',
	'IconCheckRoundXSmallLine',
	'IconCheckRoundXSmallFill',
	'IconQuestionMarkXSmallLine',
	'IconQuestionMarkXSmallFill',
	'IconExclamationXSmallLine',
	'IconExclamationXSmallFill',
	'IconInformationXSmallLine',
	'IconInformationXSmallFill',
	'IconSettingXSmallFill',
	'IconMegaphoneXSmallLine',
	'IconStarXSmallLine',
	'IconStarXSmallFill',
	'IconFileXSmallLine',
	'IconLinkXSmallLine',
	'IconLikeXSmallLine',
	'IconLikeXSmallFill',
	'IconThreeDotXSmallFill',
	'IconWritingXSmallLine',
	'IconBookmarkXSmallLine',
	'IconBookmarkXSmallFill',
	'IconLoadingXSmallFill',
	'IconExportXSmallLine',
	'IconLockXSmallFill',
	'IconDownloadXSmallLine',
	'IconEmailXSmallFill',

	// small
	'IconProfileSmallLine',
	'IconProfileSmallFill',
	'IconQuestionSmallLine',
	'IconEssaySmallLine',
	'IconInterviewSmallLine',
	'IconCommentSmallLine',
	'IconResumeSmallLine',
	'IconAnalyticsSmallLine',
	'IconArrowSmallLine',
	'IconTextArrowSmallLine',
	'IconRevertSmallLine',
	'IconPlusSmallLine',
	'IconMinusSmallLine',
	'IconCloseSmallLine',
	'IconFilterSmallLine',
	'IconBookmarkSmallLine',
	'IconBookmarkSmallFill',
	'IconCheckSmallLine',
	'IconCheckRoundSmallLine',
	'IconCheckRoundSmallFill',
	'IconQuestionMarkSmallLine',
	'IconQuestionMarkSmallFill',
	'IconExclamationSmallLine',
	'IconExclamationSmallFill',
	'IconInformationSmallLine',
	'IconInformationSmallFill',
	'IconCloseRoundSmallLine',
	'IconCloseRoundSmallFill',
	'IconPlusRoundSmallLine',
	'IconArrowRoundSmallLine',
	'IconLockSmallLine',
	'IconLockSmallFill',
	'IconImportSmallLine',
	'IconLinkSmallLine',
	'IconDownloadSmallLine',
	'IconTrashSmallLine',
	'IconLikeSmallLine',
	'IconLikeSmallFill',
	'IconBrowseSmallLine',
	'IconBrowseSmallFill',
	'IconExportSmallLine',
	'IconVideoSmallLine',
	'IconVideoSmallFill',
	'IconClockSmallLine',
	'IconClockSmallFill',
	'IconPriceSmallLine',
	'IconDiscountSmallLine',
	'IconLocationSmallLine',
	'IconLocationSmallFill',
	'IconSupportSmallLine',
	'IconCouponSmallLine',
	'IconMegaphoneSmallLine',
	'IconStarSmallLine',
	'IconStarSmallFill',
	'IconThreeDotSmallFill',
	'IconFileSmallLine',
	'IconBlockSmallLine',
	'IconUnblockSmallLine',
	'IconSirenSmallLine',
	'IconWritingSmallLine',
	'IconVodSmallLine',
	'IconDateSmallLine',
	'IconGoodSmallLine',
	'IconBadSmallLine',
	'IconSearchSmallLine',
	'IconShareSmallLine',
	'IconSkipSmallFill',
	'IconSettingSmallLine',
	'IconMenuSmallLine',
	'IconDownSmallLine',
	'IconGoodSmallFill',
	'IconBadSmallFill',
	'IconNextSmallLine',

	// medium
	'IconLikeMediumLine',
	'IconLikeMediumFill',
	'IconArrowUpRoundMediumLine',
	'IconArrowUpRoundMediumFill',
	'IconLoadingMediumFill',
	'IconExclamationMediumLine',
	'IconExclamationMediumFill',
	'IconCheckMediumLine',
	'IconArrowMediumLine',
	'IconTextArrowMediumLine',
	'IconRevertMediumLine',
	'IconPlusMediumLine',
	'IconMinusMediumLine',
	'IconCloseMediumLine',
	'IconFilterMediumLine',
	'IconBookmarkMediumLine',
	'IconBookmarkMediumFill',
	'IconShareMediumLine',
	'IconCheckRoundMediumLine',
	'IconCheckRoundMediumFill',
	'IconQuestionMarkMediumLine',
	'IconQuestionMarkMediumFill',
	'IconInformationMediumLine',
	'IconInformationMediumFill',
	'IconCloseRoundMediumLine',
	'IconCloseRoundMediumFill',
	'IconPlusRoundMediumLine',
	'IconArrowRoundMediumLine',
	'IconCouponMediumLine',
	'IconLockMediumLine',
	'IconLockMediumFill',
	'IconImportMediumLine',
	'IconLinkMediumLine',
	'IconDownloadMediumLine',
	'IconTrashMediumLine',
	'IconLocationMediumLine',
	'IconLocationMediumFill',
	'IconSupportMediumLine',
	'IconMegaphoneMediumLine',
	'IconExportMediumLine',
	'IconStarMediumLine',
	'IconStarMediumFill',
	'IconThreeDotsMediumFill',
	'IconWritingMediumLine',
	'IconSearchMediumLine',
	'IconFileMediumLine',
	'IconProfileMediumLine',
	'IconProfileMediumFill',
	'IconVodMediumLine',
	'IconCommentMediumLine',
	'IconSettingMediumLine',
	'IconSecurityMediumLine',
	'IconSecurityMediumFill',
	'IconSendMediumFill',
	'IconReplyMediumLine',

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
	'IconPtLargeLine',
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
	'IconInformationLargeFill',
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
	'IconThreeDotLargeFill',
	'IconVodProductLargeLine',
	'IconClassLargeLine',
	'IconBusinessCaseLargeLine',
	'IconTaskLargeLine',
	'IconFeedLargeLine',
	'IconImportHistoryLargeLine',
	'IconGuideBookLargeLine',
	'IconExitLargeLine',
	'IconArrowUpRoundLargeLine',
	'IconArrowUpRoundLargeFill',
	'IconCloseRoundLargeLine',
	'IconCloseRoundLargeFill',

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
	'IconBookmarkXLargeFill',
	'IconBookmarkXLargeLine',
	'IconDownloadXLargeLine',
	'IconMuteXLargeLine',
	'IconVolumeXLargeLine',
	'IconClassLargeLine',
	'IconBusinessCaseLargeLine',
	'IconBuildingLargeLine',
	'IconWritingXLargeLine',
	'IconPlusXLargeLine',
	'IconDownXLargeLine',
	'IconAlarmCelebrate',
	'IconAlarmWon',
	'IconAlarmCreditPlus',
	'IconAlarmAnswer',
	'IconAlarmQuestion',
	'IconAlarmLike',
	'IconAlarmSelected',
	'IconAlarmAssignment',
	'IconAlarmNotice',
	'IconExportXLargeLine',
	'IconFileXLargeLine',
	'IconImportXLargeLine',
	'IconLockXLargeLine',
	'IconLockXLargeFill',
	'IconLocationXLargeLine',
	'IconLocationXLargeFill',
	'IconFilterXLargeLine',
	'IconMegaphoneXLargeLine',
	'IconThreeDotXLargeLine',
	'IconArrowRoundXLargeLine',

	//2x-large
	'IconProfile2XLargeFill',
	'IconJob2XLargeLine',
	'IconChangeJob2XLargeLine',
	'IconSupervisor2XLargeLine',
	'IconCollege2XLargeLine',
	'IconAnswer2XLargeLine',
	'IconBoard2XLargeLine',
	'IconCheckRound2XLargeLine',
	'IconCheckRound2XLargeFill',
	'IconWriting2XLargeLine',
	'IconPhoto2XLargeLine',
	'IconSupport2XLargeLine',
	'IconPlus2XLargeLine',
	'IconBag2XLargeLine',
	'IconSend2XLargeFill',

	//4x-large
	'IconJob4XLargeLine',
	'IconChangeJob4XLargeLine',
	'IconSupervisor4XLargeLine',
	'IconCollege4XLargeLine',
	'IconAnswer4XLargeLine',
	'IconBoard4XLargeLine',
	'IconCheckRound4XLargeLine',
	'IconCheckRound4XLargeFill',
	'IconStar4XLargeFill',
	'IconStar4XLargeLine',
	'IconExclamation4XLargeFill',
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
		// xsmall
		IconProfileXSmallLine,
		IconProfileXSmallFill,
		IconArrowXSmallLine,
		IconTextArrowXSmallLine,
		IconPlusXSmallLine,
		IconCloseXSmallLine,
		IconSearchXSmallLine,
		IconCheckXSmallLine,
		IconCheckRoundXSmallLine,
		IconCheckRoundXSmallFill,
		IconQuestionMarkXSmallLine,
		IconQuestionMarkXSmallFill,
		IconExclamationXSmallLine,
		IconExclamationXSmallFill,
		IconInformationXSmallLine,
		IconInformationXSmallFill,
		IconSettingXSmallFill,
		IconMegaphoneXSmallLine,
		IconStarXSmallLine,
		IconStarXSmallFill,
		IconFileXSmallLine,
		IconLinkXSmallLine,
		IconLikeXSmallLine,
		IconLikeXSmallFill,
		IconThreeDotXSmallFill,
		IconWritingXSmallLine,
		IconBookmarkXSmallLine,
		IconBookmarkXSmallFill,
		IconLoadingXSmallFill,
		IconExportXSmallLine,
		IconLockXSmallFill,
		IconDownloadXSmallLine,
		IconEmailXSmallFill,

		// small
		IconProfileSmallLine,
		IconProfileSmallFill,
		IconQuestionSmallLine,
		IconEssaySmallLine,
		IconInterviewSmallLine,
		IconCommentSmallLine,
		IconResumeSmallLine,
		IconAnalyticsSmallLine,
		IconArrowSmallLine,
		IconTextArrowSmallLine,
		IconRevertSmallLine,
		IconPlusSmallLine,
		IconMinusSmallLine,
		IconCloseSmallLine,
		IconFilterSmallLine,
		IconBookmarkSmallLine,
		IconBookmarkSmallFill,
		IconThreeDotSmallFill,
		IconCheckSmallLine,
		IconCheckRoundSmallLine,
		IconCheckRoundSmallFill,
		IconQuestionMarkSmallLine,
		IconQuestionMarkSmallFill,
		IconExclamationSmallLine,
		IconExclamationSmallFill,
		IconInformationSmallLine,
		IconInformationSmallFill,
		IconCloseRoundSmallLine,
		IconCloseRoundSmallFill,
		IconPlusRoundSmallLine,
		IconArrowRoundSmallLine,
		IconLockSmallLine,
		IconLockSmallFill,
		IconImportSmallLine,
		IconLinkSmallLine,
		IconDownloadSmallLine,
		IconTrashSmallLine,
		IconLikeSmallLine,
		IconLikeSmallFill,
		IconBrowseSmallLine,
		IconBrowseSmallFill,
		IconExportSmallLine,
		IconVideoSmallLine,
		IconVideoSmallFill,
		IconClockSmallLine,
		IconClockSmallFill,
		IconPriceSmallLine,
		IconDiscountSmallLine,
		IconLocationSmallLine,
		IconLocationSmallFill,
		IconSupportSmallLine,
		IconCouponSmallLine,
		IconMegaphoneSmallLine,
		IconStarSmallLine,
		IconStarSmallFill,
		IconFileSmallLine,
		IconBlockSmallLine,
		IconUnblockSmallLine,
		IconSirenSmallLine,
		IconWritingSmallLine,
		IconVodSmallLine,
		IconDateSmallLine,
		IconGoodSmallLine,
		IconBadSmallLine,
		IconSearchSmallLine,
		IconShareSmallLine,
		IconSkipSmallFill,
		IconSettingSmallLine,
		IconMenuSmallLine,
		IconDownSmallLine,
		IconGoodSmallFill,
		IconBadSmallFill,
		IconNextSmallLine,

		// medium
		IconLikeMediumLine,
		IconLikeMediumFill,
		IconArrowUpRoundMediumLine,
		IconArrowUpRoundMediumFill,
		IconLoadingMediumFill,
		IconExclamationMediumLine,
		IconExclamationMediumFill,
		IconCheckMediumLine,
		IconArrowMediumLine,
		IconTextArrowMediumLine,
		IconRevertMediumLine,
		IconPlusMediumLine,
		IconMinusMediumLine,
		IconCloseMediumLine,
		IconFilterMediumLine,
		IconBookmarkMediumLine,
		IconBookmarkMediumFill,
		IconShareMediumLine,
		IconCheckRoundMediumLine,
		IconCheckRoundMediumFill,
		IconQuestionMarkMediumLine,
		IconQuestionMarkMediumFill,
		IconInformationMediumLine,
		IconInformationMediumFill,
		IconCloseRoundMediumLine,
		IconCloseRoundMediumFill,
		IconPlusRoundMediumLine,
		IconArrowRoundMediumLine,
		IconCouponMediumLine,
		IconLockMediumLine,
		IconLockMediumFill,
		IconImportMediumLine,
		IconLinkMediumLine,
		IconDownloadMediumLine,
		IconTrashMediumLine,
		IconLocationMediumLine,
		IconLocationMediumFill,
		IconSupportMediumLine,
		IconMegaphoneMediumLine,
		IconExportMediumLine,
		IconStarMediumLine,
		IconStarMediumFill,
		IconThreeDotsMediumFill,
		IconWritingMediumLine,
		IconSearchMediumLine,
		IconFileMediumLine,
		IconProfileMediumLine,
		IconProfileMediumFill,
		IconVodMediumLine,
		IconCommentMediumLine,
		IconSettingMediumLine,
		IconSecurityMediumLine,
		IconSecurityMediumFill,
		IconSendMediumFill,
		IconReplyMediumLine,

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
		IconPtLargeLine,
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
		IconThreeDotLargeFill,
		IconVodProductLargeLine,
		IconClassLargeLine,
		IconBusinessCaseLargeLine,
		IconBuildingLargeLine,
		IconTaskLargeLine,
		IconFeedLargeLine,
		IconImportHistoryLargeLine,
		IconGuideBookLargeLine,
		IconExitLargeLine,
		IconArrowUpRoundLargeLine,
		IconArrowUpRoundLargeFill,
		IconCloseRoundLargeLine,
		IconCloseRoundLargeFill,

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
		IconBookmarkXLargeFill,
		IconBookmarkXLargeLine,
		IconDownloadXLargeLine,
		IconMuteXLargeLine,
		IconVolumeXLargeLine,
		IconWritingXLargeLine,
		IconPlusXLargeLine,
		IconDownXLargeLine,
		IconAlarmCelebrate,
		IconAlarmWon,
		IconAlarmCreditPlus,
		IconAlarmAnswer,
		IconAlarmQuestion,
		IconAlarmLike,
		IconAlarmSelected,
		IconAlarmAssignment,
		IconAlarmNotice,
		IconExportXLargeLine,
		IconFileXLargeLine,
		IconImportXLargeLine,
		IconLockXLargeLine,
		IconLockXLargeFill,
		IconLocationXLargeLine,
		IconLocationXLargeFill,
		IconFilterXLargeLine,
		IconMegaphoneXLargeLine,
		IconThreeDotXLargeLine,
		IconArrowRoundXLargeLine,

		// 2x-large
		IconProfile2XLargeFill,
		IconJob2XLargeLine,
		IconChangeJob2XLargeLine,
		IconSupervisor2XLargeLine,
		IconCollege2XLargeLine,
		IconAnswer2XLargeLine,
		IconBoard2XLargeLine,
		IconCheckRound2XLargeLine,
		IconCheckRound2XLargeFill,
		IconWriting2XLargeLine,
		IconPhoto2XLargeLine,
		IconSupport2XLargeLine,
		IconPlus2XLargeLine,
		IconBag2XLargeLine,
		IconSend2XLargeFill,

		// 4x-large
		IconJob4XLargeLine,
		IconChangeJob4XLargeLine,
		IconSupervisor4XLargeLine,
		IconCollege4XLargeLine,
		IconAnswer4XLargeLine,
		IconCheckRound4XLargeLine,
		IconCheckRound4XLargeFill,
		IconStar4XLargeFill,
		IconStar4XLargeLine,
		IconBoard4XLargeLine,
		IconExclamation4XLargeFill,
	},
};
</script>
