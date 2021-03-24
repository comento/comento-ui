import { storiesOf } from '@storybook/vue';
import NewGrid from '@/src/Components/Layout/NewGrid';
import NewRow from '@/src/Components/Layout/NewRow';
import NewCol from '@/src/Components/Layout/NewCol';

import Typography from '@/src/Elements/Core/Typography/Typography';

storiesOf('Layout/NewGrid', module)
	.add('Basic', () => ({
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
				<NewCol :col-sm="1" :col-lg="3" class="mb-40" >
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
				<NewCol :col-sm="1" :col-lg="3" class="mb-40">
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
				<NewCol :col-sm="1" :col-lg="1" :offset-lg="1">
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
		components: { NewGrid, NewRow, NewCol, Typography },
		template: `<div>
		<Typography type="display1" element="div" align="center" >PC (1140)</Typography>
		<Typography type="display1" element="div" align="center" class="mb-64">Mobile (375)</Typography>
		<NewGrid fluid>
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
				<NewCol :col-sm="1" :col-lg="3" class="mb-40" >
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
				<NewCol :col-sm="1" :col-lg="3" class="mb-40">
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
				<NewCol :col-sm="1" :col-lg="1" :offset-lg="1">
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
	}));
