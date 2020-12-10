<template>
	<button
		class="c-application c-narrow-button"
		:class="size"
		:style="[computedColor]"
		v-bind="$attrs"
		type="button"
		v-on="$listeners"
	>
		<div class="c-narrow-button--icon" :style="$slots['left-icon'] && `margin-right: ${computedIconMargin}`">
			<slot name="left-icon" />
		</div>
		<slot />
		<div class="c-narrow-button--icon" :style="$slots['right-icon'] && `margin-left: ${computedIconMargin}`">
			<slot name="right-icon" />
		</div>
	</button>
</template>

<script>
import { colors } from '@/src/Elements/Core/Colors';

export const narrowButtonColors = ['gray400', 'gray600'];
export const narrowButtonSizes = ['small', 'medium', 'large'];

export default {
	name: 'NarrowButton',
	inheritAttrs: false,
	props: {
		color: {
			type: String,
			default: 'gray600',
			validator(value) {
				return ['gray400', 'gray600'].indexOf(value) !== -1;
			},
		},
		size: {
			type: String,
			default: 'small',
			validator(value) {
				return narrowButtonSizes.indexOf(value) !== -1;
			},
		},
	},
	computed: {
		mappedColor() {
			return this.color ? colors[this.color] : 'inherit';
		},
		computedColor() {
			return { color: this.mappedColor };
		},
		computedIconMargin() {
			const isMoreThanLarge = this.size.indexOf('large') !== -1;
			return isMoreThanLarge ? '4px' : '2px';
		},
	},
};
</script>

<style lang="scss" scoped>
.c-narrow-button {
	cursor: pointer;
	border: 0;
	border-radius: 4px;
	background: transparent;
	@include flexbox();
	@include align-items(center);
	@include justify-content(center);

	&:hover {
		background-color: $gray100;
	}

	// 사이즈
	&.small {
		height: 18px;
		padding: 2px;
		@include caption1();
	}
	&.medium {
		height: 28px;
		padding: 4px;
		@include body2();
	}
	&.large {
		height: 32px;
		padding: 4px 6px;
		@include body1();
	}

	&--icon {
		@include flexbox();
	}
}
</style>
