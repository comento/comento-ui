import { storiesOf } from '@storybook/vue';
import IconWrapper from './IconWrapper';
import Icon from '@/src/Elements/Core/Icon/Icon';
import Typography from '@/src/Elements/Core/Typography/Typography';

storiesOf('Icon', module).add('Icon', () => ({
	components: { Icon, IconWrapper, Typography },
	template: `<div>
		<Typography type="body1" color="gray500">아이콘을 클릭하면 클립보드에 아이콘 이름이 복사됩니다.</Typography>
		<!--small-->
	<div>
		<Typography type="body1" style="margin-bottom: 10px">Small</Typography>
		<div style="display: flex; flex-wrap: wrap;">
			<IconWrapper name="IconCheckSmallLine"></IconWrapper>
			<IconWrapper name="IconPlusSmallLine" color="black"></IconWrapper>
			<IconWrapper name="IconArrowSmallLine"></IconWrapper>
			<IconWrapper name="IconOverflowSmallFill"></IconWrapper>
			<IconWrapper name="IconTextArrowSmallFill"></IconWrapper>
			<IconWrapper name="IconOfficialSmallFill"></IconWrapper>
			<IconWrapper name="IconExclamationSmallFill"></IconWrapper>
			<IconWrapper name="IconProfileSmallFill"></IconWrapper>
			<IconWrapper name="IconCheckSmallFill"></IconWrapper>
			<IconWrapper name="IconCloseSmallLine"></IconWrapper>
		</div>
	</div>
	<!--medium-->
	<div>
		<Typography type="body1" style="margin-bottom: 10px">Medium</Typography>
		<div style="display: flex; flex-wrap: wrap;">
			<IconWrapper name=IconCheckMediumFill></IconWrapper>
			<IconWrapper name=IconQuestionMediumLine></IconWrapper>
			<IconWrapper name=IconLikeMediumLine></IconWrapper>
			<IconWrapper name=IconLikeMediumFill></IconWrapper>
			<IconWrapper name=IconCommentMediumLine></IconWrapper>
			<IconWrapper name=IconCheckMediumLine></IconWrapper>
			<IconWrapper name=IconPlusMediumLine color="black"></IconWrapper>
			<IconWrapper name=IconExclamationMediumLine></IconWrapper>
			<IconWrapper name=IconArrowMediumLine></IconWrapper>
			<IconWrapper name=IconTextArrowMediumLine></IconWrapper>
			<IconWrapper name=IconFileMediumLine></IconWrapper>
			<IconWrapper name=IconTrashMediumLine></IconWrapper>
			<IconWrapper name=IconDownloadMediumLine></IconWrapper>
			<IconWrapper name=IconOverflowMediumFill></IconWrapper>
			<IconWrapper name=IconHourglassMediumLine></IconWrapper>
			<IconWrapper name=IconCloseMediumFill></IconWrapper>
			<IconWrapper name=IconInfoMediumFill></IconWrapper>
			<IconWrapper name=IconInfoMediumLine></IconWrapper>
			<IconWrapper name=IconCloseMediumLine></IconWrapper>
			<IconWrapper name=IconCheckCircleMediumFill></IconWrapper>
			<IconWrapper name=IconFilterMediumLine></IconWrapper>
			<IconWrapper name=IconMentoringMediumLine></IconWrapper>
			<IconWrapper name=IconResumeMediumLine></IconWrapper>
			<IconWrapper name=IconJobWikiMediumLine></IconWrapper>
			<IconWrapper name=IconAnalyticsMediumLine></IconWrapper>
			<IconWrapper name=IconInterviewMediumLine></IconWrapper>
			<IconWrapper name=IconEssayMediumLine></IconWrapper>
			<IconWrapper name=IconVodMediumLine></IconWrapper>
			<IconWrapper name=IconEduMediumLine></IconWrapper>
			<IconWrapper name=IconCouponMediumLine></IconWrapper>
		</div>
	</div>
	<!--large-->
	<div>
		<Typography type="body1" style="margin-bottom: 10px">Large</Typography>
		<div style="display: flex; flex-wrap: wrap;">
			<IconWrapper name=IconProfileLargeFill></IconWrapper>
			<IconWrapper name=IconSelectedLargeLine></IconWrapper>
			<IconWrapper name=IconReplyLargeLine color="black"></IconWrapper>
			<IconWrapper name=IconSendLargeFill></IconWrapper>
			<IconWrapper name=IconPlusLargeLine color="black"></IconWrapper>
			<IconWrapper name=IconProfileLargeLine></IconWrapper>
			<IconWrapper name=IconAlarmLargeLine></IconWrapper>
			<IconWrapper name=IconSearchLargeLine></IconWrapper>
			<IconWrapper name=IconBackwardLargeLine></IconWrapper>
			<IconWrapper name=IconArrowLargeLine></IconWrapper>
			<IconWrapper name=IconTextArrowLargeLine></IconWrapper>
			<IconWrapper name=IconCloseLargeLine></IconWrapper>
			<IconWrapper name=IconExclamationLargeLine></IconWrapper>
			<IconWrapper name=IconFilterLargeLine></IconWrapper>
			<IconWrapper name=IconCheckLargeFill></IconWrapper>
			<IconWrapper name=IconSecurityLargeFill></IconWrapper>
			<IconWrapper name=IconDownloadLargeLine color="black"></IconWrapper>
			<IconWrapper name=IconCheckLargeLine></IconWrapper>
			<IconWrapper name=IconKeylineLargeLine></IconWrapper>
			<IconWrapper name=IconMentoringLargeLine></IconWrapper>
			<IconWrapper name=IconVodLargeLine></IconWrapper>
			<IconWrapper name=IconAnswerLargeLine></IconWrapper>
			<IconWrapper name=IconEduLargeLine></IconWrapper>
			<IconWrapper name=IconAnalyticsLargeLine></IconWrapper>
			<IconWrapper name=IconInterviewLargeLine></IconWrapper>
			<IconWrapper name=IconEssayLargeLine></IconWrapper>
			<IconWrapper name=IconResumeLargeLine></IconWrapper>
			<IconWrapper name=IconQuestionLargeLine></IconWrapper>
		</div>
	</div>
	<!--x-large-->
	<div>
		<Typography type="body1" style="margin-bottom: 10px">XLarge</Typography>
		<div style="display: flex; flex-wrap: wrap;">
			<IconWrapper name=IconArrowXLargeLine></IconWrapper>
			<IconWrapper name=IconCloseXLargeLine></IconWrapper>
			<IconWrapper name=IconQuestionXLargeLine></IconWrapper>
			<IconWrapper name=IconAdoptXLargeLine></IconWrapper>
			<IconWrapper name=IconCreditPlusXLargeLine color="black"></IconWrapper>
			<IconWrapper name=IconCreditMinusXLargeLine></IconWrapper>
			<IconWrapper name=IconLikeXLargeLine></IconWrapper>
			<IconWrapper name=IconCelebrateXLargeLine></IconWrapper>
			<IconWrapper name=IconAnswerXLargeLine></IconWrapper>
			<IconWrapper name=IconMegaphoneXLargeLine></IconWrapper>
		</div>
	</div>
	<!--spinner-->
	<div>
		<Typography type="body1" style="margin-bottom: 10px">Spinner</Typography>
		<div style="display: flex; flex-wrap: wrap;">
			<IconWrapper name="IconSpinnerSmall" loading spinner-color="success"></IconWrapper>
			<IconWrapper name="IconSpinnerMedium" loading spinner-color="success"></IconWrapper>
			<IconWrapper name="IconSpinnerLarge" loading spinner-color="success"></IconWrapper>
			<IconWrapper name="IconSpinnerSmall" loading spinner-color="gray"></IconWrapper>
			<IconWrapper name="IconSpinnerMedium" loading spinner-color="gray"></IconWrapper>
			<IconWrapper name="IconSpinnerLarge" loading spinner-color="gray"></IconWrapper>
			<IconWrapper name="IconSpinnerLarge" loading spinner-color="gray"></IconWrapper>
			<IconWrapper name="IconSpinnerSmall" loading spinner-color="primary"></IconWrapper>
			<IconWrapper name="IconSpinnerMedium" loading spinner-color="primary"></IconWrapper>
			<IconWrapper name="IconSpinnerLarge" loading spinner-color="primary"></IconWrapper>
			<IconWrapper name="IconSpinnerLarge" loading spinner-color="primary"></IconWrapper>
			</div>
		</div>
    </div>`,
}));
