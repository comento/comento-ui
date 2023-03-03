<template>
	<div v-if="hasSlot" class="c-hint">
		<Icon name="IconExclamationXSmallFill" :color="computedIconColor" />
		<Typography type="caption2" :color="computedTextColor" element="p" align="left">
			<slot />
		</Typography>
	</div>
</template>

<script>
import customValidator from '@/utils/custom-validator.js';
import Typography from '@/components/elements/core/typography/Typography.vue';
import Icon from '@/components/elements/core/icon/Icon.vue';
import { colorKeys } from '@/utils/constants/color';

/**
 * @displayName c-hint
 */
export default {
	name: 'Hint',
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
	computed: {
		computedIconColor() {
			return this.color;
		},
		computedTextColor() {
			return this.color;
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
	@include align-items(center);

	.c-icon {
		margin-right: 2px;
	}
}
</style>
