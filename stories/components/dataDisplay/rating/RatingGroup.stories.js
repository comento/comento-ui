import { storiesOf } from '@storybook/vue';
import IconRating from '@/components/rating/IconRating';
import RatingGroup from '@/components/rating/RatingGroup';
import Icon from '@/components/icon/Icon';
import NewGrid from '@/components/grid/NewGrid.vue';
import NewRow from '@/components/grid/NewRow.vue';
import NewCol from '@/components/grid/NewCol.vue';
import Typography from '@/components/typography/Typography';

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
