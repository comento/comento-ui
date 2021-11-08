import { storiesOf } from '@storybook/vue';
import NewGrid from '@/components/layout/NewGrid';
import NewRow from '@/components/layout/NewRow';
import NewCol from '@/components/layout/NewCol';
import AlarmListItem from '@/components/components/dataDisplay/list/alarmList/AlarmListItem';
import Typography from '@/components/elements/core/typography/Typography';

storiesOf('Data Display/list/alarmList/AlarmListItem', module).add('Default', () => ({
	components: { NewGrid, NewRow, NewCol, AlarmListItem, Typography },
	template: `
		<NewGrid fluid>
		<NewRow>
			<NewCol :col-lg="3" :col-sm="12">
				<AlarmListItem class="alarm-not-confirm">
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
