<template>
	<div v-if="hasSlot" class="c-hint">
		<CIcon name="IconExclamationSmallFill" :color="computedIconColor" />
		<CTypography type="caption2" :color="computedTextColor" element="p" align="left">
			<slot />
		</CTypography>
	</div>
</template>

<script>
import customValidator from '@/utils/custom-validator.js';
import CTypography from '@/components/elements/core/typography/CTypography';
import CIcon from '@/components/elements/core/icon/CIcon';

export const color = ['primary', 'success', 'secondary', 'error'];

export default {
	name: 'CHint',
	props: {
		/**
		 * 색상(primary, success, secondary, error)
		 */
		color: {
			type: String,
			default: 'secondary',
			validator(value) {
				return customValidator(value, color.indexOf(value) !== -1, 'Hint', 'color');
			},
		},
	},
	computed: {
		computedIconColor() {
			if (this.color === 'secondary') {
				return 'gray400';
			} else {
				return this.color;
			}
		},
		computedTextColor() {
			if (this.color === 'secondary') {
				return 'gray700';
			} else {
				return this.color;
			}
		},
		hasSlot() {
			return this.$slots.default && this.$slots.default[0].text !== '';
		},
	},
	components: {
		CTypography,
		CIcon,
	},
};
</script>

<style lang="scss" scoped>
.c-hint {
	margin-top: 4px;
	@include flexbox();
	@include flex-direction(row);

	.c-icon {
		margin-right: 2px;
	}
}
</style>
