import { storiesOf } from '@storybook/vue';
import SideDrawerExample from './SideDrawerExample';

storiesOf('Data Display/SideDrawer', module).add('SideDrawer', () => ({
	components: { SideDrawerExample },
	template: '<div style="width:30%"><SideDrawerExample/></div>',
}));
