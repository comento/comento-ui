import { shallowMount } from '@vue/test-utils';
import Button from '../src/Components/Button/Button';

describe('Button Test', () => {
	test('버튼은 slot에 넣은 요소를 렌더해야 한다.', () => {
		const wrapper = shallowMount(Button, { slots: { default: ['hello'] } });
		expect(wrapper.text('hello'));
	});
});
