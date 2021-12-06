import { storiesOf } from '@storybook/vue';
import CProfileWithText from '@/components/components/dataDisplay/content/CProfileWithText';
import CAvatar from '@/components/components/dataDisplay/CAvatar';
import CIcon from '@/components/elements/core/icon/CIcon';
import CNewGrid from '@/components/layout/CNewGrid';
import CNewRow from '@/components/layout/CNewRow';
import CNewCol from '@/components/layout/CNewCol';
import CTypography from '@/components/elements/core/typography/CTypography';

storiesOf('Data Display/content/ProfileWithText', module).add('Index', () => ({
	components: { CProfileWithText, CAvatar, CIcon, CNewGrid, CNewRow, CNewCol, CTypography },
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
		<CNewGrid fluid>
			<CNewRow>
				<CNewCol :col-sm="12" :col-lg="5">
					<CProfileWithText v-for="item in replies" :key="'reply-' + item.id">
						<template v-slot:avatar>
							<CAvatar type="text" :text="item.belong.substr(0, 1)" size="small"/>
						</template>
						<template v-slot:name>
							{{ item.belong }}
						</template>
						<template v-slot:icon>
							<CIcon name="IconCheckSmallFill" color="primary"/>
						</template>
						<template v-slot:text>
							<CTypography element="p" type="body2" color="gray800" class="text-truncate">
								{{ item.answer }}
							</CTypography>
						</template>
					</CProfileWithText>
				</CNewCol>
			</CNewRow>
		</CNewGrid>
	`,
}));
