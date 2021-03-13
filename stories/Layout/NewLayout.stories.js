import { storiesOf } from '@storybook/vue';
import Grid from '@/src/Components/Layout/Grid';
import NewRow from '@/src/Components/Layout/NewRow';
import NewCol from '@/src/Components/Layout/NewCol';
import Typography from '@/src/Elements/Core/Typography/Typography';

storiesOf('NewLayout/Grid', module)
	.add('Basic', () => ({
		components: { Grid, NewRow, NewCol, Typography },
		template: `<div>
		<Typography type="display1" element="div" align="center" >PC (1140)</Typography>
		<Typography type="display1" element="div" align="center" class="mb-64">Mobile (375)</Typography>
						<Grid style="width: 375px;">
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
	}))
	.add('Full', () => ({
		components: { Grid, NewRow, NewCol, Typography },
		template: `<div>
						<Typography type="display1" element="div" align="center" class="mb-64">Full </Typography>
						<Grid style="border: 1px solid" :fluid="true">
							<NewRow>
								<NewCol :colSm="12" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-12</Typography>
								</NewCol>
								<NewCol :colSm="2" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan" >col-2</Typography>
								</NewCol>
								<NewCol :colSm="2" :offsetSm="1" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-2</Typography>
								</NewCol>
								<NewCol :colSm="5" :offsetSm="1" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-5</Typography>
								</NewCol>
								<NewCol :colSm="3"  class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</NewCol>
								<NewCol :colSm="3" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</NewCol>
								<NewCol :colSm="6" :offsetSm="6" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-6</Typography>
								</NewCol>
								<NewCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</NewCol>
								<NewCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</NewCol>
								<NewCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</NewCol>
								<NewCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</NewCol>
							</NewRow>
						</Grid>
					</div>`,
	}))
	.add('Full + Basic', () => ({
		components: { Grid, NewRow, NewCol, Typography },
		template: `<div>
						<Typography type="display1" element="div" align="center" class="mb-64">Full + Basic</Typography>
						<div style="border: 1px solid">
							<Grid :fluid="true" >
							<NewRow>
								<NewCol :colSm="12" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">FULL</Typography>
								</NewCol>
							</NewRow>
							</Grid>
							<Grid>
								<NewRow>
									<NewCol :colSm="12" class="mb-40">
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">Basic</Typography>
									</NewCol>
									<NewCol :colSm="3" class="mb-40">
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan"> col-3</Typography>
									</NewCol>
									<NewCol :colSm="3" class="mb-40">
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan"> col-3</Typography>
									</NewCol>
									<NewCol :colSm="3" class="mb-40">
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan"> col-3</Typography>
									</NewCol>
									<NewCol :colSm="3" class="mb-40">
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan"> col-3</Typography>
									</NewCol>		
									<NewCol :colSm="6" >
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan"> col-6</Typography>
									</NewCol>
									<NewCol :colSm="6" >
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan"> col-6</Typography>
									</NewCol>
								</NewRow>
							</Grid>
						</div>
					</div>`,
	}))
	.add('NewCol', () => ({
		components: { Grid, NewRow, NewCol, Typography },
		template: `<div>
						<Typography type="display1" element="div" align="center" class="mb-64">그리드 간격을 동일하게 보이도록</Typography>
						<Grid>
							<NewRow>
								<NewCol :colSm="12" class="mb-40"  style="border: 1px solid">
									<NewRow :NewRowGutters="true">
										<NewCol :colSm="2" v-for="index in 6" :key="index">
											<Typography type="headline6" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 12<br/>col-2</Typography>
										</NewCol>
									</NewRow>
								</NewCol>
								<NewCol :colSm="8" class="mb-40"  :offsetSm="2"  style="border: 1px solid">
									<NewRow :NewRowGutters="true">
										<NewCol :colSm="3" v-for="index in 4" :key="index">
											<Typography type="headline6" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 8<br/>col-3</Typography>
										</NewCol>
									</NewRow>
								</NewCol>
								<NewCol :colSm="6" class="mb-40"  :offsetSm="3"  style="border: 1px solid">
									<NewRow :NewRowGutters="true">
										<NewCol :colSm="4" v-for="index in 3" :key="index">
											<Typography type="headline6" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 6<br/>col-4</Typography>
										</NewCol>
									</NewRow>
								</NewCol>
								<NewCol :colSm="4" class="mb-40"  :offsetSm="4"  style="border: 1px solid">
									<NewRow :NewRowGutters="true">
										<NewCol :colSm="6" v-for="index in 2" :key="index">
											<Typography type="headline6" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 4<br/>col-6</Typography>
										</NewCol>
									</NewRow>
								</NewCol>
								<NewCol :colSm="2" class="mb-40"  :offsetSm="5"  style="border: 1px solid">
									<NewRow :NewRowGutters="true">
										<NewCol :colSm="12">
											<Typography type="body1" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 2<br/>col-12</Typography>
										</NewCol>
									</NewRow>
								</NewCol>
							</NewRow>
						</Grid>
					</div>`,
	}));
