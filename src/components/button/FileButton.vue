<template>
	<Button size="medium" color="info" :disabled="disabled" :full="full" @click="$emit('clickFileButton')">
		<template v-slot:left-icon>
			<Icon name="IconPlusSmallLine" color="gray600" />
		</template>
		{{ text }}
	</Button>
</template>

<script>
import Icon from '@/components/icon/Icon.vue';
import customValidator from '@/utils/custom-validator.js';
import Button from '@/components/button/Button.vue';

/**
 * @displayName c-file-button
 */
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
		disabled: {
			type: Boolean,
			default: false,
		},
		full: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		Button,
		Icon,
	},
};
</script>

<style lang="scss" scoped></style>
