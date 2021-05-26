import { storiesOf } from '@storybook/vue';
import NewGrid from '@/src/Components/Layout/NewGrid';
import NewRow from '@/src/Components/Layout/NewRow';
import NewCol from '@/src/Components/Layout/NewCol';
import AlarmListItem from '@/src/Components/DataDisplay/List/AlarmList/AlarmListItem';
import Typography from '@/src/Elements/Core/Typography/Typography';

storiesOf('Data Display/List/AlarmList/AlarmListItem', module).add('Default', () => ({
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
