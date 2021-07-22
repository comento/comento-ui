import { storiesOf } from '@storybook/vue';
import Rating from '@/src/Components/DataEntry/Rating/Rating';
import Icon from '@/src/Elements/Core/Icon/Icon';
import NewGrid from '@/src/Components/Layout/NewGrid';
import NewRow from '@/src/Components/Layout/NewRow';
import NewCol from '@/src/Components/Layout/NewCol';
import Typography from '@/src/Elements/Core/Typography/Typography';

storiesOf('Data Entry/Rating/Rating', module).add('Index', () => ({
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
