import { storiesOf } from '@storybook/vue';
import IconRating from '@/components/components/dataDisplay/rating/IconRating';
import RatingGroup from '@/components/components/dataDisplay/rating/RatingGroup';
import Icon from '@/components/elements/core/icon/Icon';
import NewGrid from '@/components/layout/NewGrid';
import NewRow from '@/components/layout/NewRow';
import NewCol from '@/components/layout/NewCol';
import Typography from '@/components/elements/core/typography/Typography';

storiesOf('Data Display/Rating/RatingGroup', module).add('Index', () => ({
	components: { IconRating, RatingGroup, Icon, NewGrid, NewRow, NewCol, Typography },
	template: `
		<NewGrid fluid>
		<NewRow>
			<NewCol :col-sm="12" :col-lg="8">
				<RatingGroup>
					<IconRating icon-name="IconCommentMediumLine" icon-color="primary" text="6" text-color="primary"/>
					<IconRating icon-name="IconLikeMediumLine" icon-color="red400" text="6" text-color="red600"/>
				</RatingGroup>
			</NewCol>
		</NewRow>
		</NewGrid>
		`,
}));
