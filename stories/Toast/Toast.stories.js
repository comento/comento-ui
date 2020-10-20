import { storiesOf } from '@storybook/vue';
import Toast from '@/src/Components/Message/Toast';

storiesOf('Toast', module).add('Toast', () => ({
	components: { Toast },
	template: `<div>
    <Toast style="bottom: 80%">한 줄 짜리 Toast 메시지 (type 기본)</Toast>
    <Toast style="bottom: 60%" type="alert">한 줄 짜리 Toast 메시지 (type alert)</Toast>
    <Toast style="bottom: 40%" type="success">한 줄 짜리 Toast 메시지 (type success)</Toast>
  	<Toast style="bottom: 20%">한 줄 짜리 Toast 메시지<br/> 두 줄 짜리 Toast 메시지</Toast>
    </div>`,
}));
