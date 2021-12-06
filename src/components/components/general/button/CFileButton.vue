<template>
	<CNarrowButton size="medium" @click="$emit('clickFileButton')">
		<template v-slot:left-icon>
			<CIcon name="IconPlusMediumLine" color="gray600"></CIcon>
		</template>
		{{ text }}
	</CNarrowButton>
</template>

<script>
import CNarrowButton from '@/components/components/general/button/CNarrowButton';
import CIcon from '@/components/elements/core/icon/CIcon';
import customValidator from '@/utils/custom-validator.js';

export default {
	name: 'CFileButton',
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
		CNarrowButton,
		CIcon,
	},
};
</script>

<style lang="scss" scoped></style>
