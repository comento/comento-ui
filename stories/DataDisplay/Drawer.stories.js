import { storiesOf } from '@storybook/vue';
import Example from '../../src/Components/DataDisplay/Drawer/SideDrawerExample';

storiesOf('Example', module).add('Example', () => ({
	components: { Example },
	template: '<div style="width:30%"><Example/></div>',
}));
