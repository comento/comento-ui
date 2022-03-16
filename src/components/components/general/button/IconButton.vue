<template>
	<button
		:type="type"
		class="c-application c-icon-button"
		:class="computedClasses"
		v-bind="$attrs"
		:disabled="disabled"
		v-on="$listeners"
		@click="$event.target.blur()"
	>
		<Icon :name="iconName" :color="computedColor" :rotate="rotate" />
	</button>
</template>

<script>
import { colorKeys } from '@/utils/constants/color';
import Icon from '@/components/elements/core/icon/Icon';

export const IconButtonSizes = ['small', 'medium', 'large'];
export const IconButtonTypes = ['button', 'submit', 'reset'];

/**
 * @displayName c-icon-button
 */
export default {
	name: 'IconButton',
	props: {
		iconName: {
			type: String,
			required: true,
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
				return colorKeys.includes(value);
			},
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		transparent: {
			type: Boolean,
			default: false,
		},
		rotate: {
			type: Number,
			default: 0,
		},
		type: {
			type: String,
			default: 'button',
			validator(value) {
				return IconButtonTypes.includes(value);
			},
		},
	},
	computed: {
		computedColor() {
			return this.disabled ? 'gray200' : this.color;
		},
		computedClasses() {
			return [this.size, { transparent: this.transparent }];
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

	@include state-style {
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

	&.transparent {
		@include state-style {
			background-color: $button-transparent-hover-background-color;
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
