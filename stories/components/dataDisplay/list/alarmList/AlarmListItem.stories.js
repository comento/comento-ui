import { storiesOf } from '@storybook/vue';
import NewGrid from '@/components/grid/NewGrid.vue';
import NewRow from '@/components/grid/NewRow.vue';
import NewCol from '@/components/grid/NewCol.vue';
import AlarmListItem from '@/components/list/alarmList/AlarmListItem';
import Typography from '@/components/typography/Typography';

storiesOf('Data Display/list/alarmList/AlarmListItem', module).add('Default', () => ({
	components: { NewGrid, NewRow, NewCol, AlarmListItem, Typography },
	template: `
		<NewGrid fluid>
		<NewRow>
			<NewCol :col-lg="3" :col-sm="12">
				<AlarmListItem class="alarm-unread">
					<template v-slot:icon>
						<img :src="'https://cdn.comento.kr/images/icon/alarm/icon-alarm-won.svg'" />
					</template>
					<template v-slot:message>
						현금 환급을 신청한 30,000원이 계좌로 입금됐어요.
					</template>
					<template v-slot:date>
						2021.02.22
					</template>
				</AlarmListItem>
			</NewCol>
		</NewRow>
		</NewGrid>`,
}));
