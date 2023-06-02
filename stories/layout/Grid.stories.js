import { storiesOf } from '@storybook/vue';
import CGrid from '@/components/layout/CGrid.vue';
import CRow from '@/components/layout/CRow.vue';
import CStyleCol from '@/components/layout/CStyleCol.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';

storiesOf('Layout/Grid(legacy)', module)
	.add('Basic', () => ({
		components: { CGrid, CRow, CStyleCol, CTypography },
		template: `<div>
						<CTypography type="display1" element="div" align="center" class="mb-64">Basic (1140)</CTypography>
						<CGrid>
							<CRow>
								<CStyleCol :colSm="12" class="mb-40" >
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-12</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="8" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan" >col-8</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="4" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-4</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="2" :offsetSm="4" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-2</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="2" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-2</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="4" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-4</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="10" :offsetSm="1" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-10</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="3" >
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="3" >
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="3" >
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="3" >
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
								</CStyleCol>
							</CRow>
					  </CGrid>
					</div>`,
	}))
	.add('Full', () => ({
		components: { CGrid, CRow, CStyleCol, CTypography },
		template: `<div>
						<CTypography type="display1" element="div" align="center" class="mb-64">Full </CTypography>
						<CGrid style="border: 1px solid" :fluid="true">
							<CRow>
								<CStyleCol :colSm="12" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-12</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="2" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan" >col-2</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="2" :offsetSm="1" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-2</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="5" :offsetSm="1" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-5</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="3"  class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="3" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="6" :offsetSm="6" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-6</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="3" >
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="3" >
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="3" >
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
								</CStyleCol>
								<CStyleCol :colSm="3" >
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
								</CStyleCol>
							</CRow>
						</CGrid>
					</div>`,
	}))
	.add('Full + Basic', () => ({
		components: { CGrid, CRow, CStyleCol, CTypography },
		template: `<div>
						<CTypography type="display1" element="div" align="center" class="mb-64">Full + Basic</CTypography>
						<div style="border: 1px solid">
							<CGrid :fluid="true" >
							<CRow>
								<CStyleCol :colSm="12" class="mb-40">
									<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">FULL</CTypography>
								</CStyleCol>
							</CRow>
							</CGrid>
							<CGrid>
								<CRow>
									<CStyleCol :colSm="12" class="mb-40">
										<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan">Basic</CTypography>
									</CStyleCol>
									<CStyleCol :colSm="3" class="mb-40">
										<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan"> col-3</CTypography>
									</CStyleCol>
									<CStyleCol :colSm="3" class="mb-40">
										<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan"> col-3</CTypography>
									</CStyleCol>
									<CStyleCol :colSm="3" class="mb-40">
										<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan"> col-3</CTypography>
									</CStyleCol>
									<CStyleCol :colSm="3" class="mb-40">
										<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan"> col-3</CTypography>
									</CStyleCol>		
									<CStyleCol :colSm="6" >
										<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan"> col-6</CTypography>
									</CStyleCol>
									<CStyleCol :colSm="6" >
										<CTypography type="headline7" element="p" align="center" class="pa-16" style="background: lightcyan"> col-6</CTypography>
									</CStyleCol>
								</CRow>
							</CGrid>
						</div>
					</div>`,
	}))
	.add('styleCol', () => ({
		components: { CGrid, CRow, CStyleCol, CTypography },
		template: `<div>
						<CTypography type="display1" element="div" align="center" class="mb-64">그리드 간격을 동일하게 보이도록</CTypography>
						<CGrid>
							<CRow>
								<CStyleCol :colSm="12" class="mb-40"  style="border: 1px solid">
									<CRow :rowGutters="true">
										<CStyleCol :colSm="2" v-for="index in 6" :key="index">
											<CTypography type="headline7" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 12<br/>col-2</CTypography>
										</CStyleCol>
									</CRow>
								</CStyleCol>
								<CStyleCol :colSm="8" class="mb-40"  :offsetSm="2"  style="border: 1px solid">
									<CRow :rowGutters="true">
										<CStyleCol :colSm="3" v-for="index in 4" :key="index">
											<CTypography type="headline7" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 8<br/>col-3</CTypography>
										</CStyleCol>
									</CRow>
								</CStyleCol>
								<CStyleCol :colSm="6" class="mb-40"  :offsetSm="3"  style="border: 1px solid">
									<CRow :rowGutters="true">
										<CStyleCol :colSm="4" v-for="index in 3" :key="index">
											<CTypography type="headline7" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 6<br/>col-4</CTypography>
										</CStyleCol>
									</CRow>
								</CStyleCol>
								<CStyleCol :colSm="4" class="mb-40"  :offsetSm="4"  style="border: 1px solid">
									<CRow :rowGutters="true">
										<CStyleCol :colSm="6" v-for="index in 2" :key="index">
											<CTypography type="headline7" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 4<br/>col-6</CTypography>
										</CStyleCol>
									</CRow>
								</CStyleCol>
								<CStyleCol :colSm="2" class="mb-40"  :offsetSm="5"  style="border: 1px solid">
									<CRow :rowGutters="true">
										<CStyleCol :colSm="12">
											<CTypography type="body1" element="p" align="center" :class="{'pa-16':!isMobile}" style="background: lightcyan">그리드 2<br/>col-12</CTypography>
										</CStyleCol>
									</CRow>
								</CStyleCol>
							</CRow>
						</CGrid>
					</div>`,
	}));
