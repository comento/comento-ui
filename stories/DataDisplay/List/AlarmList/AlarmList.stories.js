import { storiesOf } from '@storybook/vue';
import NewGrid from '@/src/Components/Layout/NewGrid';
import NewRow from '@/src/Components/Layout/NewRow';
import NewCol from '@/src/Components/Layout/NewCol';
import AlarmList from '@/src/Components/DataDisplay/List/AlarmList/AlarmList';
import AlarmListItem from '@/src/Components/DataDisplay/List/AlarmList/AlarmListItem';
import Typography from '@/src/Elements/Core/Typography/Typography';
import Divider from '@/src/Elements/Utility/Divider';

storiesOf('Data Display/List/AlarmList/AlarmList', module).add('Default', () => ({
	components: { NewGrid, NewRow, NewCol, AlarmList, AlarmListItem, Typography, Divider },
	data() {
		return {
			alarms: [
				{
					icon: 'won',
					message: '현금 환급을 신청한 30,000원이 계좌로 입금됐어요.',
					date: '2021.02.22',
					confirm_style: 'alarm-not-confirm',
				},
				{
					icon: 'question',
					message: '멘토님의 회사에 대한 질문이 있어요.',
					date: '2021.02.22',
				},
				{
					icon: 'celebrate',
					message: '인사고과 평가가 우수하여 코사장으로 진급했어요! ',
					date: '2021.02.22',
				},
			],
		};
	},
	template: `
		<NewGrid fluid>
			<NewRow>
				<NewCol :col-lg="3" :col-sm="12">
					<AlarmList>
						<template v-for="({icon, message, date, confirm_style}, index) in alarms">
							<AlarmListItem :key="'alarm-list-item-' + index" :class="confirm_style">
								<template v-slot:icon>
									<img :src="'https://cdn.comento.kr/images/icon/alarm/icon-alarm-' + icon + '.svg'" />
								</template>
								<template v-slot:message>
									{{ message }}
								</template>
								<template v-slot:date>
									{{ date }}
								</template>
							</AlarmListItem>
							<Divider :key="'alarm-divider-' + index"/>
						</template>
					</AlarmList>
				</NewCol>
			</NewRow>
		</NewGrid>`,
}));
