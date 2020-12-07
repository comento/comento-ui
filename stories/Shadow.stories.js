import { storiesOf } from '@storybook/vue';

import BoxWithShadow from '@/stories/BoxWithShadow';

storiesOf('Shadow', module).add('Index', () => ({
	components: { BoxWithShadow },
	data() {
		return {
			descriptions: [
				{
					type: 'shadow1',
					content: '툴팁 등에 사용',
				},
				{
					type: 'shadow2',
					content: '모바일 카드를 감싼 box 등에 사용',
				},
				{
					type: 'shadow3',
					content: 'topbar, header 등에 사용',
				},
				{
					type: 'shadow4',
					content: 'xlarge 버튼 등에 사용',
				},
			],
		};
	},
	template: `<div>
        <div v-for="(description, index) in descriptions" :key="shadow">
            <BoxWithShadow :shadowType="description.type"  style="margin-right: 10px; margin-bottom: 10px;">{{description.type}}</BoxWithShadow>
            <div style="margin-bottom: 20px;">{{description.content}}</div>
        </div>
    </div>`,
}));
