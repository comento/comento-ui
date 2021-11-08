import { storiesOf } from '@storybook/vue';
import Rating from '@/components/components/dataEntry/rating/Rating';
import Icon from '@/components/elements/core/icon/Icon';
import NewGrid from '@/components/layout/NewGrid';
import NewRow from '@/components/layout/NewRow';
import NewCol from '@/components/layout/NewCol';
import Typography from '@/components/elements/core/typography/Typography';

storiesOf('Data Entry/rating/rating', module).add('Index', () => ({
	components: { Rating, Icon, NewGrid, NewRow, NewCol, Typography },
	template: `
		<NewGrid fluid>
			<NewRow>
				<NewCol :col-sm="12" :col-lg="8">
					<Rating icon-name="IconCommentMediumLine" icon-color="gray400" text="6" text-color="gray500" />
					<Rating icon-name="IconCommentMediumLine" icon-color="primary" text="6" text-color="primary" />
					<Rating icon-name="IconLikeMediumLine" icon-color="red400" text="6" text-color="red600" />
				</NewCol>
			</NewRow>
		</NewGrid>
	`,
}));
