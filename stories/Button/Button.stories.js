import { storiesOf } from '@storybook/vue';
import Button from '@/src/Components/Button/Button';

storiesOf('Button', module).add('Button Fill', () => ({
	components: { Button },
	template: '<div style="width:30%"><Button size="medium">답변 추가하기</Button></div>',
}));
