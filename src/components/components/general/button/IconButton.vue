<template>
	<button
		class="c-application c-icon-button"
		:class="[computedSize]"
		v-bind="$attrs"
		:disabled="disabled"
		v-on="$listeners"
		@click="$event.target.blur()"
	>
		<Icon :name="iconName" :color="computedColor" />
	</button>
</template>

<script>
import { buttonColors } from '@/components/components/general/button/Button';

import Icon from '@/components/elements/core/icon/Icon';
export const IconButtonSizes = ['small', 'medium', 'large'];

/**
 * @displayName c-icon-button
 */
export default {
	name: 'IconButton',
	props: {
		iconName: {
			type: String,
		},
		/**
		 * 크기(small, medium, large, xlarge)
		 */
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return IconButtonSizes.includes(value);
			},
		},
		color: {
			type: String,
			default: 'primary',
			validator(value) {
				return buttonColors.includes(value);
			},
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		computedSize() {
			return this.size;
		},
		computedColor() {
			return this.disabled ? 'gray200' : this.color;
		},
	},
	components: {
		Icon,
	},
};
</script>

<style lang="scss" scoped>
.c-icon-button {
	background-color: transparent;
	border: none;
	cursor: pointer;
	@include border-radius(4px);
	@include flexbox();
	@include align-items(center);
	@include justify-content(center);

	> .c-icon {
		cursor: inherit;
	}

	@include mobile {
		@include remove-active-and-focus();
	}

	&:hover,
	&:focus,
	&:active,
	&.hover-test {
		background-color: $gray100;
	}

	&:disabled {
		cursor: not-allowed !important;
		background: none;
		&:active {
			pointer-events: none;
		}
		.c-button--icon::v-deep .c-icon {
			@include disabled();
		}
	}

	&.small {
		height: 20px;
		width: 20px;
		padding: 2px;
	}
	&.medium {
		width: 28px;
		height: 28px;
		padding: 2px;
	}
	&.large {
		width: 32px;
		height: 32px;
		padding: 2px;
	}
}
</style>
