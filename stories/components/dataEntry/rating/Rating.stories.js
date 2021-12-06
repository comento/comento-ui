import { storiesOf } from '@storybook/vue';
import CRating from '@/components/components/dataEntry/rating/CRating';
import CIcon from '@/components/elements/core/icon/CIcon';
import CNewGrid from '@/components/layout/CNewGrid';
import CNewRow from '@/components/layout/CNewRow';
import CNewCol from '@/components/layout/CNewCol';
import CTypography from '@/components/elements/core/typography/CTypography';

storiesOf('Data Entry/rating/rating', module).add('Index', () => ({
	components: { CRating, CIcon, CNewGrid, CNewRow, CNewCol, CTypography },
	template: `
		<CNewGrid fluid>
			<CNewRow>
				<CNewCol :col-sm="12" :col-lg="8">
					<CRating icon-name="IconCommentMediumLine" icon-color="gray400" text="6" text-color="gray500" />
					<CRating icon-name="IconCommentMediumLine" icon-color="primary" text="6" text-color="primary" />
					<CRating icon-name="IconLikeMediumLine" icon-color="red400" text="6" text-color="red600" />
				</CNewCol>
			</CNewRow>
		</CNewGrid>
	`,
}));
