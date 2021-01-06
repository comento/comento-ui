import { storiesOf } from '@storybook/vue';
import InputGroup from '@/src/Components/DataEntry/InputGroup';
import Input from '@/src/Components/DataEntry/Input';
import Button from '@/src/Components/Button/Button';
import Box from '@/src/Components/DataDisplay/Box';

storiesOf('Data Entry/InputGroup', module).add('InputGroup', () => ({
	components: { InputGroup, Input, Button, Box },
	template: `
		<Box>
			<InputGroup>
				< placeholder="쿠폰 코드를 입력하세요" full />
				<Button type="outlined" color="secondary">등록하기</Button>
			</InputGroup>
		</Box>
		`,
}));
