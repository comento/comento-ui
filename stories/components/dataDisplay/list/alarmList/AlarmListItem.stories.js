import { storiesOf } from '@storybook/vue';
import CNewGrid from '@/components/layout/CNewGrid';
import CNewRow from '@/components/layout/CNewRow';
import CNewCol from '@/components/layout/CNewCol';
import CAlarmListItem from '@/components/components/dataDisplay/list/alarmList/CAlarmListItem';
import CTypography from '@/components/elements/core/typography/CTypography';

storiesOf('Data Display/list/alarmList/AlarmListItem', module).add('Default', () => ({
	components: { CNewGrid, CNewRow, CNewCol, CAlarmListItem, CTypography },
	template: `
		<CNewGrid fluid>
			<CNewRow>
				<CNewCol :col-lg="3" :col-sm="12">
					<CAlarmListItem class="alarm-not-confirm">
						<template v-slot:icon>
							<img :src="'https://cdn.comento.kr/images/icon/alarm/icon-alarm-won.svg'" />
						</template>
						<template v-slot:message>
							현금 환급을 신청한 30,000원이 계좌로 입금됐어요.
						</template>
						<template v-slot:date>
							2021.02.22
						</template>
					</CAlarmListItem>
				</CNewCol>
			</CNewRow>
		</CNewGrid>`,
}));
