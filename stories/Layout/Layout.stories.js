import { storiesOf } from '@storybook/vue';
import Grid from '@/src/Components/Layout/Grid';
import Row from '@/src/Components/Layout/Row';
import StyleCol from '@/src/Components/Layout/StyleCol';

import NewGrid from '@/src/Components/Layout/NewGrid';
import NewRow from '@/src/Components/Layout/NewRow';
import NewCol from '@/src/Components/Layout/NewCol';

import Typography from '@/src/Elements/Core/Typography/Typography';

storiesOf('Layout/Grid', module)
	.add('Basic(Old)', () => ({
		components: { Grid, Row, StyleCol, Typography },
		template: `<div>
						<Typography type="display1" element="div" align="center" class="mb-64">Basic (1140)</Typography>
						<Grid>
							<Row>
								<StyleCol :colSm="12" class="mb-40" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-12</Typography>
								</StyleCol>
								<StyleCol :colSm="8" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan" >col-8</Typography>
								</StyleCol>
								<StyleCol :colSm="4" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-4</Typography>
								</StyleCol>
								<StyleCol :colSm="2" :offsetSm="4" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-2</Typography>
								</StyleCol>
								<StyleCol :colSm="2" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-2</Typography>
								</StyleCol>
								<StyleCol :colSm="4" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-4</Typography>
								</StyleCol>
								<StyleCol :colSm="10" :offsetSm="1" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-10</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</StyleCol>
							</Row>
					  </Grid>
					</div>`,
	}))
	.add('Basic(New)', () => ({
		components: { NewGrid, NewRow, NewCol, Typography },
		template: `<div>
		<Typography type="display1" element="div" align="center" >PC (1140)</Typography>
		<Typography type="display1" element="div" align="center" class="mb-64">Mobile (375)</Typography>
		<NewGrid>
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
			<NewRow>
				<NewCol :col-sm="1" :col-lg="3">
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="3" :offset-lg="3">
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="3" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
				</NewCol>
			</NewRow>
			<NewRow>
				<NewCol :col-sm="1" :col-lg="1" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="1" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="1" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="1" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="1" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="1" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="1" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="1" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="1" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="1" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="1" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</Typography>
				</NewCol>
				<NewCol :col-sm="1" :col-lg="1" >
					<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</Typography>
				</NewCol>
			</NewRow>
		</NewGrid>
		</div>`,
	}))
	.add('Full', () => ({
		components: { Grid, Row, StyleCol, Typography },
		template: `<div>
						<Typography type="display1" element="div" align="center" class="mb-64">Full </Typography>
						<Grid style="border: 1px solid" :fluid="true">
							<Row>
								<StyleCol :colSm="12" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-12</Typography>
								</StyleCol>
								<StyleCol :colSm="2" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan" >col-2</Typography>
								</StyleCol>
								<StyleCol :colSm="2" :offsetSm="1" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-2</Typography>
								</StyleCol>
								<StyleCol :colSm="5" :offsetSm="1" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-5</Typography>
								</StyleCol>
								<StyleCol :colSm="3"  class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="6" :offsetSm="6" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-6</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</Typography>
								</StyleCol>
							</Row>
						</Grid>
					</div>`,
	}))
	.add('Full + Basic', () => ({
		components: { Grid, Row, StyleCol, Typography },
		template: `<div>
						<Typography type="display1" element="div" align="center" class="mb-64">Full + Basic</Typography>
						<div style="border: 1px solid">
							<Grid :fluid="true" >
							<Row>
								<StyleCol :colSm="12" class="mb-40">
									<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">FULL</Typography>
								</StyleCol>
							</Row>
							</Grid>
							<Grid>
								<Row>
									<StyleCol :colSm="12" class="mb-40">
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">Basic</Typography>
									</StyleCol>
									<StyleCol :colSm="3" class="mb-40">
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan"> col-3</Typography>
									</StyleCol>
									<StyleCol :colSm="3" class="mb-40">
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan"> col-3</Typography>
									</StyleCol>
									<StyleCol :colSm="3" class="mb-40">
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan"> col-3</Typography>
									</StyleCol>
									<StyleCol :colSm="3" class="mb-40">
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan"> col-3</Typography>
									</StyleCol>		
									<StyleCol :colSm="6" >
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan"> col-6</Typography>
									</StyleCol>
									<StyleCol :colSm="6" >
										<Typography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan"> col-6</Typography>
									</StyleCol>
								</Row>
							</Grid>
						</div>
					</div>`,
	}))
	.add('styleCol', () => ({
		components: { Grid, Row, StyleCol, Typography },
		template: `<div>
						<Typography type="display1" element="div" align="center" class="mb-64">그리드 간격을 동일하게 보이도록</Typography>
						<Grid>
							<Row>
								<StyleCol :colSm="12" class="mb-40"  style="border: 1px solid">
									<Row :rowGutters="true">
										<StyleCol :colSm="2" v-for="index in 6" :key="index">
											<Typography type="headline6" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 12<br/>col-2</Typography>
										</StyleCol>
									</Row>
								</StyleCol>
								<StyleCol :colSm="8" class="mb-40"  :offsetSm="2"  style="border: 1px solid">
									<Row :rowGutters="true">
										<StyleCol :colSm="3" v-for="index in 4" :key="index">
											<Typography type="headline6" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 8<br/>col-3</Typography>
										</StyleCol>
									</Row>
								</StyleCol>
								<StyleCol :colSm="6" class="mb-40"  :offsetSm="3"  style="border: 1px solid">
									<Row :rowGutters="true">
										<StyleCol :colSm="4" v-for="index in 3" :key="index">
											<Typography type="headline6" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 6<br/>col-4</Typography>
										</StyleCol>
									</Row>
								</StyleCol>
								<StyleCol :colSm="4" class="mb-40"  :offsetSm="4"  style="border: 1px solid">
									<Row :rowGutters="true">
										<StyleCol :colSm="6" v-for="index in 2" :key="index">
											<Typography type="headline6" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 4<br/>col-6</Typography>
										</StyleCol>
									</Row>
								</StyleCol>
								<StyleCol :colSm="2" class="mb-40"  :offsetSm="5"  style="border: 1px solid">
									<Row :rowGutters="true">
										<StyleCol :colSm="12">
											<Typography type="body1" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 2<br/>col-12</Typography>
										</StyleCol>
									</Row>
								</StyleCol>
							</Row>
						</Grid>
					</div>`,
	}));
