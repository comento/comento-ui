import { storiesOf } from '@storybook/vue';
import CNewGrid from '@/components/layout/CNewGrid.vue';
import CNewRow from '@/components/layout/CNewRow.vue';
import CNewCol from '@/components/layout/CNewCol.vue';
import CAlarmList from '@/components/components/dataDisplay/list/alarmList/CAlarmList.vue';
import CAlarmListItem from '@/components/components/dataDisplay/list/alarmList/CAlarmListItem.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';

storiesOf('Data Display/list/alarmList/alarmList', module).add('Default', () => ({
	components: { CNewGrid, CNewRow, CNewCol, CAlarmList, CAlarmListItem, CTypography },
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
		<CNewGrid fluid>
			<CNewRow>
				<CNewCol :col-lg="3" :col-sm="12">
					<CAlarmList>
						<CAlarmListItem
							v-for="({icon, message, date, confirm_style}, index) in alarms" 
							:key="'alarm-list-item-' + index" 
							:class="confirm_style"
						>
							<template v-slot:icon>
								<img :src="'https://cdn.comento.kr/images/icon/alarm/icon-alarm-' + icon + '.svg'" alt="" />
							</template>
							<template v-slot:message>
								{{ message }}
							</template>
							<template v-slot:date>
								{{ date }}
							</template>
						</CAlarmListItem>
					</CAlarmList>
				</CNewCol>
			</CNewRow>
		</CNewGrid>`,
}));
