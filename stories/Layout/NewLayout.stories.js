import { storiesOf } from '@storybook/vue';
import Grid from '@/src/Components/Layout/Grid';
import NewRow from '@/src/Components/Layout/NewRow';
import NewCol from '@/src/Components/Layout/NewCol';
import Typography from '@/src/Elements/Core/Typography/Typography';

storiesOf('NewLayout/Grid', module).add('Basic', () => ({
	components: { Grid, NewRow, NewCol, Typography },
	template: `<div>
		<Typography type="display1" element="div" align="center" >PC (1140)</Typography>
		<Typography type="display1" element="div" align="center" class="mb-64">Mobile (375)</Typography>
						<Grid>
							<NewRow>
								<NewCol :col-sm="4" :col-lg="12" class="mb-40" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-12</Typography>
								</NewCol>
							</NewRow>
							<NewRow>
								<NewCol :col-sm="3" :col-lg="9" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan" >col-9</Typography>
								</NewCol>
								<NewCol :col-sm="1" :col-lg="3" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</NewCol>
							</NewRow>
							<NewRow>
								<NewCol :col-sm="1" :col-lg="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</NewCol>
								<NewCol :col-sm="1" :col-lg="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</NewCol>
								<NewCol :col-sm="1" :col-lg="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</NewCol>
								<NewCol :col-sm="1" :col-lg="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</NewCol>
							</NewRow>
					  </Grid>
					</div>`,
}));
