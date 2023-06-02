<template>
	<button
		class="c-application c-narrow-button"
		:class="computedClasses"
		:style="[computedColor]"
		v-bind="$attrs"
		type="button"
		@click="$event.target.blur()"
	>
		<div class="c-narrow-button--icon" :class="setIconSpacing('left')">
			<slot name="left-icon" />
		</div>
		<slot />
		<div class="c-narrow-button--icon" :class="setIconSpacing('right')">
			<slot name="right-icon" />
		</div>
	</button>
</template>

<script>
import { colors } from '@/utils/constants/color';
import { defineComponent } from 'vue';

export const narrowButtonSizes = ['small', 'medium', 'large'];

export default defineComponent({
	name: 'CNarrowButton',
	inheritAttrs: false,
	props: {
		color: {
			type: String,
			default: 'gray600',
		},
		/**
		 * 크기(small, medium, large)
		 */
		size: {
			type: String,
			default: 'small',
			validator(value) {
				return narrowButtonSizes.indexOf(value) !== -1;
			},
		},
		transparent: {
			type: Boolean,
			default: false,
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
		computedClasses() {
			return [this.size, { transparent: this.transparent }];
		},
	},
	methods: {
		setIconSpacing(position) {
			const oppositePosition = position === 'left' ? 'r' : 'l';
			return this.$slots[`${position}-icon`] && `m${oppositePosition}-2`;
		},
	},
});
</script>

<style lang="scss" scoped>
.c-narrow-button {
	cursor: pointer;
	border: 0;
	@include border-radius(4px);
	background: transparent;
	@include flexbox();
	@include align-items(center);
	@include justify-content(center);

	@include state-style() {
		background-color: $gray100;
	}

	// transparent
	&.transparent {
		@include state-style() {
			background-color: $button-transparent-hover-background-color;
		}
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
		@include border-radius(6px);
	}
	&.large {
		height: 32px;
		padding: 4px 6px;
		@include body1();
		@include border-radius(6px);
	}

	&--icon {
		@include flexbox();
		@include align-items(center);
	}
}
</style>
