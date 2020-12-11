import { storiesOf } from '@storybook/vue';
import Grid from '@/src/Components/Layout/Grid';
import Row from '@/src/Components/Layout/Row';
import StyleCol from '@/src/Components/Layout/StyleCol';
import StyleColGroup from '@/src/Components/Layout/StyleColGroup';
import Typography from '@/src/Elements/Core/Typography/Typography';

storiesOf('Layout', module)
	.add('Basic', () => ({
		components: { Grid, Row, StyleCol, Typography },
		template: `<div>
						<Typography type="display1" element="div" align="center" class="mb-64">Basic (styleCol- paddding value 있음)</Typography>
						<Grid gridColor="gray100">
							<Row>
								<StyleCol :colSm="12"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-12</Typography>
								</StyleCol>
								<StyleCol :colSm="8"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-8</Typography>
								</StyleCol>
								<StyleCol :colSm="4"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-4</Typography>
								</StyleCol>
								<StyleCol :colSm="2" :offsetSm="4"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-2, offset-4</Typography>
								</StyleCol>
								<StyleCol :colSm="2"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-2</Typography>
								</StyleCol>
								<StyleCol :colSm="4"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-4</Typography>
								</StyleCol>
								<StyleCol :colSm="10" :offsetSm="1"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-10, offset-1</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
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
								<StyleCol :colSm="12"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >
										 grid fluid = true <br>
										 rowGutters = true<br>
								 		 col-12
									 </Typography>
								</StyleCol>
								<StyleCol :colSm="1"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-1</Typography>
								</StyleCol>
								<StyleCol :colSm="2" :offsetSm="1"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-2 / offset-1</Typography>
								</StyleCol>
								<StyleCol :colSm="5" :offsetSm="1"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-5 / offset-1</Typography>
								</StyleCol>
								<StyleCol :colSm="3"    class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="6" :offsetSm="6"  class="mb-40">
									<Typography type="headline6" element="p" align="center" >col-6 / offset-6</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
									<Typography type="headline6" element="p" align="center" >col-3</Typography>
								</StyleCol>
								<StyleCol :colSm="3" >
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
							<StyleCol :colSm="12"  :colGutters="true" class="mb-40">
								<Typography type="headline6" element="p" align="center" >
								 grid fluid = true <br>
								 rowGutters = true<br>
								 col-12</Typography>
							</StyleCol>
						</Row>
							<Grid gridColor="gray500">
								<Row>
									<StyleCol :colSm="12"  :colGutters="true" class="mb-40">
										<Typography type="headline6" element="p" align="center" > 
										grid fluid = false <br>
										rowGutters = false<br>
										 col-12
								 </Typography>
									</StyleCol>
									<StyleCol :colSm="3"  :colGutters="true" class="mb-40">
										<Typography type="headline6" element="p" align="center" > col-3</Typography>
									</StyleCol>
									<StyleCol :colSm="3"  :colGutters="true" class="mb-40">
										<Typography type="headline6" element="p" align="center" > col-3</Typography>
									</StyleCol>
									<StyleCol :colSm="3"  :colGutters="true" class="mb-40">
										<Typography type="headline6" element="p" align="center" > col-3</Typography>
									</StyleCol>
									<StyleCol :colSm="3"  :colGutters="true" class="mb-40">
										<Typography type="headline6" element="p" align="center" > col-3</Typography>
									</StyleCol>		
									<StyleCol :colSm="6"  :colGutters="true">
										<Typography type="headline6" element="p" align="center" > col-6</Typography>
									</StyleCol>
									<StyleCol :colSm="6"  :colGutters="true">
										<Typography type="headline6" element="p" align="center" > col-6</Typography>
									</StyleCol>
									
								</Row>
							</Grid>
						</Grid>
					</div>`,
	}))
	.add('StyleColGroup', () => ({
		components: { Grid, Row, StyleCol, Typography, StyleColGroup },
		template: `
			<div>
				<Typography type="display1" element="div" align="center" class="mb-64">style-col 간격 동일하게 보여주기,

				</Typography>

				<Grid>
					<Row>
						<StyleCol :colSm="8" :offsetSm="2">
							<Row>
								<StyleColGroup bgColor="blue400">
									<StyleCol :colSm="3" class="mb-40">
										<Typography type="headline6" element="p" align="center"
													style="background: lightskyblue"> col-3
										</Typography>
									</StyleCol>
									<StyleCol :colSm="3" class="mb-40">
										<Typography type="headline6" element="p" align="center"
													style="background: lightskyblue"> col-3
										</Typography>
									</StyleCol>
									<StyleCol :colSm="3" class="mb-40">
										<Typography type="headline6" element="p" align="center"
													style="background: lightskyblue"> col-3
										</Typography>
									</StyleCol>
									<StyleCol :colSm="3" class="mb-40">
										<Typography type="headline6" element="p" align="center"
													style="background: lightskyblue"> col-3
										</Typography>
									</StyleCol>
									<StyleCol :colSm="6">
										<Typography type="headline6" element="p" align="center"
													style="background: lightskyblue"> col-6
										</Typography>
									</StyleCol>
									<StyleCol :colSm="6">
										<Typography type="headline6" element="p" align="center"
													style="background: lightskyblue"> col-6
										</Typography>
									</StyleCol>
								</StyleColGroup>
							</Row>
						</StyleCol>
					</Row>
				</Grid>
			</div>`,
	}));
