<template>
	<NarrowButton size="medium" :class="classes" @click="$emit('clickFileButton')">
		{{ text }}
		<template v-slot:left-icon>
			<Icon name="IconPlusSmallLine" color="gray600" :class="classes" />
		</template>
	</NarrowButton>
</template>

<script>
import NarrowButton from '@/components/button/NarrowButton.vue';
import Icon from '@/components/icon/Icon.vue';
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
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		classes() {
			return { 'c-not-allowed': this.disabled };
		},
	},
	components: {
		NarrowButton,
		Icon,
	},
};
</script>

<style lang="scss" scoped></style>
