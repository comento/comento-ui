import { storiesOf } from '@storybook/vue';
import Index from '@/src/components/elements/core/colors/Index.vue';

storiesOf('core/Color', module).add('Index', () => ({
	components: { Index },
	template: '<index></index>',
}));
