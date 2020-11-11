import { storiesOf } from '@storybook/vue';
import Grid from '@/src/Components/Layout/Grid';
import Row from '@/src/Components/Layout/Row';
import StyleCol from '@/src/Components/Layout/StyleCol';
import Typography from '@/src/Elements/Core/Typography/Typography';

storiesOf('Layout', module)
	.add('Basic', () => ({
		components: { Grid, Row, StyleCol, Typography },
		template: `<div>
						<Typography type="display1" element="div" align="center" class="mb-64">Basic (styleCol- paddding value 있음)</Typography>
						<Grid gridColor="gray100">
							<Row>
								<StyleCol :colSm="12" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-12</Typography>
								</StyleCol>
								<StyleCol :colSm="8" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-8</Typography>
								</StyleCol>
								<StyleCol :colSm="4" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-4</Typography>
								</StyleCol>
								<StyleCol :colSm="2" :offsetSm="4" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-2, offset-4</Typography>
								</StyleCol>
								<StyleCol :colSm="2" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-2</Typography>
								</StyleCol>
								<StyleCol :colSm="4" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-4</Typography>
								</StyleCol>
								<StyleCol :colSm="10" :offsetSm="1" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-10, offset-1</Typography>
								</StyleCol>
								<StyleCol :colSm="3" style="border: 1px solid gray">
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" style="border: 1px solid gray">
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" style="border: 1px solid gray">
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" style="border: 1px solid gray">
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
							</Row>
					   </Grid>
					</div>`,
	}))
	.add('Full', () => ({
		components: { Grid, Row, StyleCol, Typography },
		template: `<div>
						<Typography type="display1" element="div" align="center"  class="mb-64">Full (styleCol- paddding value 있음)</Typography>
						<Grid gridColor="gray100" :fluid="true">
							<Row :rowGutters="true">
								<StyleCol :colSm="12" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >
										 grid fluid = true <br>
										 rowGutters = true<br>
								 		 col-12
									 </Typography>
								</StyleCol>
								<StyleCol :colSm="1" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-1</Typography>
								</StyleCol>
								<StyleCol :colSm="2" :offsetSm="1" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-2 / offset-1</Typography>
								</StyleCol>
								<StyleCol :colSm="5" :offsetSm="1" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-5 / offset-1</Typography>
								</StyleCol>
								<StyleCol :colSm="3"   style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="6" :offsetSm="6" style="border: 1px solid gray" class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-6 / offset-6</Typography>
								</StyleCol>
								<StyleCol :colSm="3" style="border: 1px solid gray">
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" style="border: 1px solid gray">
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" style="border: 1px solid gray">
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" style="border: 1px solid gray">
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
							</Row>
						</Grid>
					</div>`,
	}))
	.add('Full + Basic', () => ({
		components: { Grid, Row, StyleCol, Typography },
		template: `<div>
						<Typography type="display1" element="div" align="center" class="mb-64">Full + Basic, styleCol-noGutters <br>(styleCol- paddding value 없음)</Typography>
						<Grid gridColor="gray200" :fluid="true">
						<Row :rowGutters="true">
							<StyleCol :colSm="12" style="border: 1px solid gray" :colGutters="true" class="mb-40">
								<Typography type="headline6" element="p" align="center" >
								 grid fluid = true <br>
								 rowGutters = true<br>
								 col-12</Typography>
							</StyleCol>
						</Row>
							<Grid gridColor="gray500">
								<Row>
									<StyleCol :colSm="12" style="border: 1px solid gray" :colGutters="true" class="mb-40">
										<Typography type="headline6" element="p" align="center" > 
										grid fluid = false <br>
										rowGutters = false<br>
										 col-12
								 </Typography>
									</StyleCol>
									<StyleCol :colSm="3" style="border: 1px solid gray" :colGutters="true" class="mb-40">
										<Typography type="headline6" element="p" align="center" > col-3</Typography>
									</StyleCol>
									<StyleCol :colSm="3" style="border: 1px solid gray" :colGutters="true" class="mb-40">
										<Typography type="headline6" element="p" align="center" > col-3</Typography>
									</StyleCol>
									<StyleCol :colSm="3" style="border: 1px solid gray" :colGutters="true" class="mb-40">
										<Typography type="headline6" element="p" align="center" > col-3</Typography>
									</StyleCol>
									<StyleCol :colSm="3" style="border: 1px solid gray" :colGutters="true" class="mb-40">
										<Typography type="headline6" element="p" align="center" > col-3</Typography>
									</StyleCol>		
									<StyleCol :colSm="6" style="border: 1px solid gray" :colGutters="true">
										<Typography type="headline6" element="p" align="center" > col-6</Typography>
									</StyleCol>
									<StyleCol :colSm="6" style="border: 1px solid gray" :colGutters="true">
										<Typography type="headline6" element="p" align="center" > col-6</Typography>
									</StyleCol>
									
								</Row>
							</Grid>
						</Grid>
					</div>`,
	}));
