<template>
	<CNarrowButton size="medium" :class="classes" @click="$emit('clickFileButton')">
		{{ text }}
		<template #left-icon>
			<CIcon name="IconPlusSmallLine" color="gray600" :class="classes" />
		</template>
	</CNarrowButton>
</template>

<script>
import CNarrowButton from '@/components/components/general/button/CNarrowButton.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import customValidator from '@/utils/custom-validator.js';
import { defineComponent, computed, toRefs } from 'vue';

export default defineComponent({
	name: 'CFileButton',
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
	},
	setup(props) {
		const { disabled } = toRefs(props);
		const classes = computed(() => ({ 'c-not-allowed': disabled }));

		return {
			classes,
		};
	},
	components: {
		CNarrowButton,
		CIcon,
	},
});
</script>

<style lang="scss" scoped></style>
