import { storiesOf } from '@storybook/vue';
import ProfileWithText from '@/src/Components/DataDisplay/Content/ProfileWithText';
import Avatar from '@/src/Components/DataDisplay/Avatar';
import Icon from '@/src/Elements/Core/Icon/Icon';
import NewGrid from '@/src/Components/Layout/NewGrid';
import NewRow from '@/src/Components/Layout/NewRow';
import NewCol from '@/src/Components/Layout/NewCol';
import Typography from '@/src/Elements/Core/Typography/Typography';

storiesOf('Data Display/Content/ProfileWithText', module).add('Index', () => ({
	components: { ProfileWithText, Avatar, Icon, NewGrid, NewRow, NewCol, Typography },
	data() {
		return {
			replies: [
				{
					id: 1,
					belong: 'LG화학',
					answer:
						'안녕하세요 멘티님 석유화학사업본부의 경우 공무 조직은 각 공장 또는 공정별로 나누어져서 분장되어있으며,',
				},
				{
					id: 2,
					belong: '한진도시가스',
					answer:
						'안녕하세요 멘티님 주로 공무 엔지니어는 멘티님이 말씀하신 것처럼 설비의 유지보수와 설계를 담당합니다.',
				},
			],
		};
	},
	template: `
		<NewGrid fluid>
			<NewRow>
				<NewCol :col-sm="12" :col-lg="5">
					<ProfileWithText v-for="item in replies" :key="'reply-' + item.id">
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
				</NewCol>
			</NewRow>
		</NewGrid>
	`,
}));
