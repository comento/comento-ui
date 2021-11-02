import { storiesOf } from '@storybook/vue';
import BottomDrawerExample from '@/src/components/components/dataDisplay/drawer/BottomDrawerExample';

storiesOf('Data Display/BottomDrawer', module).add('BottomDrawer', () => ({
	components: { BottomDrawerExample },
	template: '<div><BottomDrawerExample/></div>',
}));
