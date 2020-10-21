import { storiesOf } from '@storybook/vue';
import Toast from '@/src/Components/Message/Toast';

storiesOf('Toast', module).add('Toast', () => ({
	components: { Toast },
	template: `<div>
    <Toast style="bottom: 50%">한 줄 짜리 Toast 메시지 (type 기본)</Toast>
    <Toast style="bottom: 25%" type="alert">한 줄 짜리 Toast 메시지 (type alert)</Toast>
    <Toast type="success">한 줄 짜리 Toast 메시지 - 모션 예시(type success)</Toast>
  
    </div>`,
}));
