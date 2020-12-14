import { storiesOf } from '@storybook/vue';

import Index from '@/src/Elements/Core/Colors/Index.vue';

storiesOf('Core/Color', module).add('Index', () => ({
	components: { Index },
	template: '<index></index>',
}));
