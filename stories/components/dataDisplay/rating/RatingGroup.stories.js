import { storiesOf } from '@storybook/vue';
import CIconRating from '@/components/components/dataDisplay/rating/CIconRating.vue';
import CRatingGroup from '@/components/components/dataDisplay/rating/CRatingGroup.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import CNewGrid from '@/components/layout/CNewGrid.vue';
import CNewRow from '@/components/layout/CNewRow.vue';
import CNewCol from '@/components/layout/CNewCol.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';

storiesOf('Data Display/Rating/RatingGroup', module).add('Index', () => ({
	components: { CIconRating, CRatingGroup, CIcon, CNewGrid, CNewRow, CNewCol, CTypography },
	template: `
		<CNewGrid fluid>
		<CNewRow>
			<CNewCol :col-sm="12" :col-lg="8">
				<CRatingGroup>
					<CIconRating icon-name="IconCommentSmallLine" color="primary" text="6" />
					<CIconRating icon-name="IconLikeSmallLine" color="error" text="6" />
				</CRatingGroup>
			</CNewCol>
		</CNewRow>
		</CNewGrid>
		`,
}));
