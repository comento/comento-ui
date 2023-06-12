<template>
	<div v-if="hasSlot" class="c-hint">
		<CIcon name="IconExclamationXSmallFill" :color="color" />
		<CTypography type="caption2" :color="color" element="p" align="left">
			<slot />
		</CTypography>
	</div>
</template>

<script>
import customValidator from '@/utils/custom-validator.js';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import { colorKeys } from '@/utils/constants/color';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CHint',
	props: {
		/**
		 * 색상
		 */
		color: {
			type: String,
			default: 'info',
			validator(value) {
				const isValid = colorKeys.indexOf(value) !== -1;
				return customValidator(value, isValid, 'Hint', 'color');
			},
		},
	},
	setup(props, { slots }) {
		const hasSlot = () => slots.default && slots.default()[0].text !== '';
		return { hasSlot };
	},
	components: {
		CTypography,
		CIcon,
	},
});
</script>

<style lang="scss" scoped>
.c-hint {
	margin-top: 4px;
	@include flexbox();
	@include flex-direction(row);
	@include align-items(center);

	.c-icon {
		margin-right: 2px;
	}
}
</style>
