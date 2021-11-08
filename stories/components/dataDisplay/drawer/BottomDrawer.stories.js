import { storiesOf } from '@storybook/vue';
import BottomDrawerExample from './BottomDrawerExample';

storiesOf('Data Display/BottomDrawer', module).add('BottomDrawer', () => ({
	components: { BottomDrawerExample },
	template: '<div><BottomDrawerExample/></div>',
}));
