import { storiesOf } from '@storybook/vue';
import BottomDrawerExample from '../../src/Components/DataDisplay/Drawer/BottomDrawerExample';
storiesOf('BottomDrawer', module).add('BottomDrawer', () => ({
	components: { BottomDrawerExample },
	template: '<div><BottomDrawerExample/></div>',
}));
