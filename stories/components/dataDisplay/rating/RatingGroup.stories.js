import { storiesOf } from '@storybook/vue';
import IconRating from '@/components/components/dataDisplay/rating/IconRating.vue';
import RatingGroup from '@/components/components/dataDisplay/rating/RatingGroup.vue';
import Icon from '@/components/elements/core/icon/Icon.vue';
import NewGrid from '@/components/layout/NewGrid.vue';
import NewRow from '@/components/layout/NewRow.vue';
import NewCol from '@/components/layout/NewCol.vue';
import Typography from '@/components/elements/core/typography/Typography.vue';

storiesOf('Data Display/Rating/RatingGroup', module).add('Index', () => ({
	components: { IconRating, RatingGroup, Icon, NewGrid, NewRow, NewCol, Typography },
	template: `
		<NewGrid fluid>
		<NewRow>
			<NewCol :col-sm="12" :col-lg="8">
				<RatingGroup>
					<IconRating icon-name="IconCommentSmallLine" color="primary" text="6" />
					<IconRating icon-name="IconLikeSmallLine" color="error" text="6" />
				</RatingGroup>
			</NewCol>
		</NewRow>
		</NewGrid>
		`,
}));
