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
import Typography from '../../Elements/Core/Typography/Typography';
import Icon from '../../Elements/Core/Icon/Icon';

export const color = ['primary', 'success', 'secondary', 'error'];

export default {
	name: 'Hint',
	props: {
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
