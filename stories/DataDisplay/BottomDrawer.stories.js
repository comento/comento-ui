import { storiesOf } from '@storybook/vue';
import BottomDrawer from '../../src/DataDisplay/BottomDrawerExample';
storiesOf('BottomDrawer', module).add('BottomDrawer', () => ({
	components: { BottomDrawer },
	template: '<div><BottomDrawer/></div>',
}));
