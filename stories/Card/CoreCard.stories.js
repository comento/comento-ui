import { storiesOf } from '@storybook/vue';
import CoreCard from '@/src/Components/DataDisplay/Card/CoreCard';
import Content from '@/src/Components/DataDisplay/Content/Content';
import Avatar from '@/src/Components/DataDisplay/Avatar';
import Icon from '@/src/Elements/Core/Icon/Icon';
import NewGrid from '@/src/Components/Layout/NewGrid';
import NewRow from '@/src/Components/Layout/NewRow';
import NewCol from '@/src/Components/Layout/NewCol';
import Typography from '@/src/Elements/Core/Typography/Typography';
import ProfileWithText from '@/src/Components/DataDisplay/Content/ProfileWithText';
import Rating from '@/src/Components/DataEntry/Rating/Rating';
import RatingGroup from '@/src/Components/DataEntry/Rating/RatingGroup';

storiesOf('Data Display/Card/CoreCard', module).add('Index', () => ({
	components: {
		CoreCard,
		Content,
		Avatar,
		Icon,
		NewGrid,
		NewRow,
		NewCol,
		Typography,
		ProfileWithText,
		Rating,
		RatingGroup,
	},
	data() {
		return {
			showRepliesCount: 2,
			questions: [
				{
					company: 'lg화학',
					job: '기계엔지니어',
					title: 'lg화학 공무직 기계엔지니어 업무',
					content: `석유화학사업본부 공무직의 경우 주로 설비의 유지/보수와 관련된 업무를 수행하는 것으로 알고 있습니다. 
						한 팀 혹은 인원의 업무 분담이 어떤 식으로 되어있는지 궁금합니다. 예) 회전기계팀, 장치팀, 배관팀 등으로 구분되어 있는지 
						아니면 공정별로 필요한 기기들을 한팀에서 전부 관리한다던지......
						석유화학사업본부 공무직의 경우 주로 설비의 유지/보수와 관련된 업무를 수행하는 것으로 알고 있습니다. 
						한 팀 혹은 인원의 업무 분담이 어떤 식으로 되어있는지 궁금합니다. 예) 회전기계팀, 장치팀, 배관팀 등으로 구분되어 있는지 
						아니면 공정별로 필요한 기기들을 한팀에서 전부 관리한다던지`,
					like: 2,
					replies: [
						{
							id: 1,
							belong: 'LG화학',
							answer:
								'안녕하세요 멘티님 석유화학사업본부의 경우 공무 조직은 각 공장 또는 공정별로 나누어져서 분장되어있으며, 어쩌구저쩌구',
						},
						{
							id: 2,
							belong: '한진도시가스',
							answer:
								'안녕하세요 멘티님 주로 공무 엔지니어는 멘티님이 말씀하신 것처럼 설비의 유지보수와 설계를 담당합니다. 어쩌구저쩌구',
						},
						{
							id: 3,
							belong: 'LG화학',
							answer:
								'안녕하세요 멘티님 석유화학사업본부의 경우 공무 조직은 각 공장 또는 공정별로 나누어져서 분장되어있으며, 어쩌구저쩌구',
						},
					],
				},
			],
		};
	},
	methods: {
		getHiddenRepliesCount(repliesLength) {
			return repliesLength - this.showRepliesCount;
		},
	},
	template: `
		<NewGrid fluid>
		<NewRow>
			<NewCol :col-sm="12" :col-lg="6">
				<CoreCard
					v-for="item in questions"
					:overline-left="item.company"
					:overline-right="item.job"
					:title="item.title"
					:body="item.content"
					:hidden-replies-count="getHiddenRepliesCount(item.replies.length)"
					:replies-count="item.replies.length"
					:like-count="item.like"
				>
					<template v-slot:replies>
						<template v-for="(item, index) in item.replies">
							<ProfileWithText v-if="index < 2" :key="'reply-' + item.id">
								<template v-slot:avatar>
									<Avatar type="text" :text="item.belong.substr(0, 1)" size="small"/>
								</template>
								<template v-slot:name>
									{{ item.belong }}
								</template>
								<template v-slot:icon>
									<Icon name="IconCheckSmallFill" color="primary"/>
								</template>
								<template v-slot:text>
									<Typography element="p" type="body2" color="gray800" class="text-truncate">
										{{ item.answer }}
									</Typography>
								</template>
							</ProfileWithText>
						</template>
					</template>
				</CoreCard>
			</NewCol>
		</NewRow>
		</NewGrid>`,
}));
