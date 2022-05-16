import { storiesOf } from '@storybook/vue';
import NewGrid from '@/components/layout/NewGrid';
import NewRow from '@/components/layout/NewRow';
import NewCol from '@/components/layout/NewCol';
import AlarmList from '@/components/components/dataDisplay/list/alarmList/AlarmList';
import AlarmListItem from '@/components/components/dataDisplay/list/alarmList/AlarmListItem';
import Typography from '@/components/elements/core/typography/Typography';

storiesOf('Data Display/list/alarmList/alarmList', module).add('Default', () => ({
	components: { NewGrid, NewRow, NewCol, AlarmList, AlarmListItem, Typography },
	data() {
		return {
			alarms: [
				{
					icon: 'won',
					message: '현금 환급을 신청한 30,000원이 계좌로 입금됐어요.',
					date: '2021.02.22',
					confirm_style: 'alarm-unread',
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
						<AlarmListItem
							v-for="({icon, message, date, confirm_style}, index) in alarms" 
							:key="'alarm-list-item-' + index" 
							:class="confirm_style"
						>
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
					</AlarmList>
				</NewCol>
			</NewRow>
		</NewGrid>`,
}));
