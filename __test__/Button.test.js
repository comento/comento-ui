import { shallowMount } from '@vue/test-utils';
import CButton from '@/components/components/general/button/CButton.vue';

describe('button Test', () => {
	test('버튼은 slot에 넣은 요소를 렌더해야 한다.', () => {
		const wrapper = shallowMount(CButton, { slots: { default: ['hello'] } });
		expect(wrapper.text('hello'));
	});
});
