<template>
	<div v-if="hasSlot" class="c-supporting-text">
		<Icon name="IconExclamationXSmallFill" :color="computedIconColor" />
		<Typography type="caption2" :color="computedTextColor" element="span" align="left">
			<slot />
		</Typography>
	</div>
</template>

<script>
import customValidator from '@/utils/custom-validator.js';
import Typography from '@/components/typography/Typography.vue';
import Icon from '@/components/icon/Icon.vue';
import { colorKeys } from '@/utils/constants/color.js';

/**
 * @displayName c-supporting-text
 */
export default {
	name: 'SupportingText',
	props: {
		/**
		 * 색상(info, primary, error)
		 */
		color: {
			type: String,
			default: 'info',
			validator(value) {
				const isValid = colorKeys.indexOf(value) !== -1;
				return customValidator(value, isValid, 'SupportingText', 'color');
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
.c-supporting-text {
	margin-top: 4px;
	@include flexbox();
	@include flex-direction(row);
	@include align-items(center);

	.c-icon {
		margin-right: 2px;
	}
}
</style>
