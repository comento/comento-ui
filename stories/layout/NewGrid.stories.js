import { storiesOf } from '@storybook/vue';
import CNewGrid from '@/components/layout/CNewGrid';
import CNewRow from '@/components/layout/CNewRow';
import CNewCol from '@/components/layout/CNewCol';
import CTypography from '@/components/elements/core/typography/CTypography';

storiesOf('Layout/NewGrid', module)
	.add('Basic', () => ({
		components: { CNewGrid, CNewRow, CNewCol, CTypography },
		template: `<div>
		<CTypography type="display1" element="div" align="center" >PC (1140)</CTypography>
		<CTypography type="display1" element="div" align="center" class="mb-64">Mobile (375)</CTypography>
		<CNewGrid>
			<CNewRow>
				<CNewCol :col-sm="4" :col-lg="12" class="mb-40" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-12</CTypography>
				</CNewCol>
			</CNewRow>
			<CNewRow>
				<CNewCol :col-sm="3" :col-lg="9" class="mb-40">
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan" >col-9</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="3" class="mb-40">
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
			</CNewRow>
			<CNewRow>
				<CNewCol :col-sm="1" :col-lg="3" class="mb-40" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="3" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="3" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="3" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
			</CNewRow>
			<CNewRow>
				<CNewCol :col-sm="1" :col-lg="3" class="mb-40">
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="3" :offset-lg="3">
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="3" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
			</CNewRow>
			<CNewRow>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" :offset-lg="1">
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
			</CNewRow>
		</CNewGrid>
		</div>`,
	}))
	.add('Full', () => ({
		components: { CNewGrid, CNewRow, CNewCol, CTypography },
		template: `<div>
		<CTypography type="display1" element="div" align="center" >PC (1140)</CTypography>
		<CTypography type="display1" element="div" align="center" class="mb-64">Mobile (375)</CTypography>
		<CNewGrid fluid>
			<CNewRow>
				<CNewCol :col-sm="4" :col-lg="12" class="mb-40" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-12</CTypography>
				</CNewCol>
			</CNewRow>
			<CNewRow>
				<CNewCol :col-sm="3" :col-lg="9" class="mb-40">
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan" >col-9</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="3" class="mb-40">
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
			</CNewRow>
			<CNewRow>
				<CNewCol :col-sm="1" :col-lg="3" class="mb-40" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="3" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="3" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="3" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
			</CNewRow>
			<CNewRow>
				<CNewCol :col-sm="1" :col-lg="3" class="mb-40">
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="3" :offset-lg="3">
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="3" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-3</CTypography>
				</CNewCol>
			</CNewRow>
			<CNewRow>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" :offset-lg="1">
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
				<CNewCol :col-sm="1" :col-lg="1" >
					<CTypography type="headline6" element="p" align="center" class="pa-16" style="background: lightcyan">col-1</CTypography>
				</CNewCol>
			</CNewRow>
		</CNewGrid>
		</div>`,
	}));
