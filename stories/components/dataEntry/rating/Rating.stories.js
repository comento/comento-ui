import { storiesOf } from '@storybook/vue';
import Rating from '@/src/components/components/dataEntry/rating/Rating';
import Icon from '@/src/components/elements/core/icon/Icon';
import NewGrid from '@/src/components/layout/NewGrid';
import NewRow from '@/src/components/layout/NewRow';
import NewCol from '@/src/components/layout/NewCol';
import Typography from '@/src/components/elements/core/typography/Typography';

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
