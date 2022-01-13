<template>
	<NarrowButton size="medium" @click="$emit('clickFileButton')">
		{{ text }}
		<template v-slot:right-icon>
			<Icon name="IconPlusMediumLine" color="gray600" />
		</template>
	</NarrowButton>
</template>

<script>
import NarrowButton from '@/components/components/general/button/NarrowButton';
import Icon from '@/components/elements/core/icon/Icon';
import customValidator from '@/utils/custom-validator.js';

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
	},
	components: {
		NarrowButton,
		Icon,
	},
};
</script>

<style lang="scss" scoped></style>
