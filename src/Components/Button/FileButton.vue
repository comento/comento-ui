<template>
	<NarrowButton size="large" @click="$emit('clickFileButton')">
		<template v-slot:left-icon>
			<Icon name="IconPlusLargeLine" size="large" color="gray500"></Icon>
		</template>
		{{ text }}
	</NarrowButton>
</template>

<script>
import NarrowButton from '@/src/Components/Button/NarrowButton';
import Icon from '@/src/Elements/Core/Icon/Icon';
import customValidator from '@/utils/custom-validator.js';
export default {
	name: 'FileButton',
	props: {
		text: {
			type: String,
			default: '파일 첨부하기',
			validator(value) {
				return customValidator(value, typeof value === 'string', 'FileButton', 'text');
			},
		},
	},
	components: {
		NarrowButton,
		Icon,
	},
};
</script>

<style scoped></style>
