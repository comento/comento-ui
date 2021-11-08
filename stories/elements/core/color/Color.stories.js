import { storiesOf } from '@storybook/vue';
import ColorExample from './ColorExample';

storiesOf('core/Color', module).add('Index', () => ({
	components: { ColorExample },
	template: '<ColorExample></ColorExample>',
}));
