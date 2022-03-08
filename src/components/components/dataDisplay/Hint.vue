<template>
	<div v-if="hasSlot" class="c-hint">
		<Icon name="IconExclamationSmallFill" :color="computedIconColor" />
		<Typography type="caption2" :color="computedTextColor" element="p" align="left">
			<slot />
		</Typography>
	</div>
</template>

<script>
import customValidator from '@/utils/custom-validator.js';
import Typography from '@/components/elements/core/typography/Typography';
import Icon from '@/components/elements/core/icon/Icon';

export const color = ['primary', 'success', 'info', 'error'];

/**
 * @displayName c-hint
 */
export default {
	name: 'Hint',
	props: {
		/**
		 * 색상(primary, success, info, error)
		 */
		color: {
			type: String,
			default: 'info',
			validator(value) {
				return customValidator(value, color.indexOf(value) !== -1, 'Hint', 'color');
			},
		},
	},
	computed: {
		computedIconColor() {
			if (this.color === 'info') {
				return 'gray400';
			} else {
				return this.color;
			}
		},
		computedTextColor() {
			if (this.color === 'info') {
				return 'gray600';
			} else {
				return this.color;
			}
		},
		hasSlot() {
			return this.$slots.default && this.$slots.default[0].text !== '';
		},
	},
	components: {
		Typography,
		Icon,
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
