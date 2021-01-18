<template>
	<div v-if="value" class="c-hint">
		<Icon name="IconExclamationSmallFill" :color="computedIconColor" />
		<Typography type="caption2" :color="computedTextColor" element="p">
			{{ value }}
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
		value: {
			type: String,
			default: null,
		},
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
