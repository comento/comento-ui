<template>
	<div style="position: relative">
		<base-swiper ref="mySwiper" class="swiper" :options="swiperOptions" v-bind="$attrs">
			<base-swiper-slide
				v-for="(node, index) in Object.keys(this.$slots).length"
				:key="`tabs-item-${index}-${key}`"
			>
				<slot :name="'item' + index"></slot>
			</base-swiper-slide>
			<Icon
				v-show="showInsideControl"
				slot="button-prev"
				name="IconArrowXLargeLine"
				:rotate="-90"
				class="swiper-button-prev"
				:class="computedControlsPosition"
				:color="computedControlsColor"
			></Icon>
			<Icon
				v-show="showInsideControl"
				slot="button-next"
				name="IconArrowXLargeLine"
				:rotate="90"
				class="swiper-button-next"
				:class="computedControlsPosition"
				:color="computedControlsColor"
			></Icon>
			<div
				v-show="showInsideIndicator"
				slot="pagination"
				class="swiper-pagination"
				:class="computedIndicatorColorClass"
			></div>
		</base-swiper>
		<Icon
			v-show="showOutsideControl"
			name="IconArrowXLargeLine"
			:rotate="-90"
			class="swiper-button-outside swiper-button-prev-outside"
			:class="computedControlsPosition"
			:color="computedControlsColor"
		></Icon>
		<Icon
			v-show="showOutsideControl"
			name="IconArrowXLargeLine"
			:rotate="90"
			class="swiper-button-outside swiper-button-next-outside"
			:class="computedControlsPosition"
			:color="computedControlsColor"
		></Icon>
		<Icon
			v-show="showTopControl"
			name="IconArrowXLargeLine"
			:rotate="-90"
			class="swiper-button-top swiper-button-prev-top"
			:class="computedControlsPosition"
			:color="computedControlsColor"
		></Icon>
		<Icon
			v-show="showTopControl"
			name="IconArrowXLargeLine"
			:rotate="90"
			class="swiper-button-top swiper-button-next-top"
			:class="computedControlsPosition"
			:color="computedControlsColor"
		></Icon>
		<div
			v-show="showOutsideIndicator"
			slot="pagination"
			class="swiper-pagination-outside"
			:class="computedIndicatorColorClass"
		></div>
	</div>
</template>

<script>
import customValidator from '@/utils/custom-validator.js';
import Icon from '@/src/Elements/Core/Icon/Icon';
import { Swiper as BaseSwiper, SwiperSlide as BaseSwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export const SwiperTypes = ['swiper', 'swiperGroup', 'slider'];
export const SwiperControlsColors = ['light', 'dark'];
export const SwiperControlPositions = ['inside', 'outside', 'top'];
export const SwiperIndicatorColors = ['light', 'dark'];
export const SwiperIndicatorPositions = ['inside', 'outside'];

export const SwiperSpacings = [8, 12, 24];

export default {
	name: 'Swiper',
	inheritAttrs: false,
	props: {
		type: {
			type: String,
			default: 'swiper',
			validator(value) {
				return customValidator(value, SwiperTypes.indexOf(value) !== -1, 'Swiper', 'type');
			},
		},
		withControls: {
			type: Boolean,
			default: false,
			validator(value) {
				return customValidator(value, typeof value === 'boolean', 'Swiper', 'withControls');
			},
		},
		controlsPosition: {
			type: String,
			default: 'inside',
			validator(value) {
				return customValidator(
					value,
					SwiperControlPositions.indexOf(value) !== -1,
					'Swiper',
					'controlsPosition',
				);
			},
		},
		controlsColor: {
			type: String,
			default: 'light',
			validator(value) {
				return customValidator(value, SwiperControlsColors.indexOf(value) !== -1, 'Swiper', 'controlsColor');
			},
		},
		withIndicator: {
			type: Boolean,
			default: false,
			validator(value) {
				return customValidator(value, typeof value === 'boolean', 'Swiper', 'withIndicator');
			},
		},
		indicatorPosition: {
			type: String,
			default: 'inside',
			validator(value) {
				return customValidator(
					value,
					SwiperIndicatorPositions.indexOf(value) !== -1,
					'Swiper',
					'indicatorPosition',
				);
			},
		},
		indicatorColor: {
			type: String,
			default: 'light',
			validator(value) {
				return customValidator(value, SwiperIndicatorColors.indexOf(value) !== -1, 'Swiper', 'indicatorColor');
			},
		},
		spacing: {
			type: [Number],
			default: 12,
			validator(value) {
				return customValidator(value, SwiperSpacings.indexOf(value) !== -1, 'Swiper', 'spacing');
			},
		},
		slidesPerView: {
			type: Number,
			default: 3,
		},
	},
	data() {
		return {
			key: Math.random(),
		};
	},
	computed: {
		showInsideControl() {
			return this.withControls && this.controlsPosition === 'inside';
		},
		showOutsideControl() {
			return this.withControls && this.controlsPosition === 'outside';
		},
		showTopControl() {
			return this.withControls && this.controlsPosition === 'top';
		},
		showInsideIndicator() {
			return this.withIndicator && this.indicatorPosition === 'inside';
		},
		showOutsideIndicator() {
			return this.withIndicator && this.indicatorPosition === 'outside';
		},
		isSwiperGroupType() {
			return this.type === 'swiperGroup';
		},
		isSwiperType() {
			return this.type === 'swiper';
		},
		swiperTypeOptions() {
			return {
				slidesPerView: 'auto',
			};
		},
		swiperGroupTypeOptions() {
			return {
				slidesPerView: this.slidesPerView,
				spaceBetween: this.spacing,
			};
		},
		// commont options
		swiperOptions() {
			// ex. swiper-button-next, swiper-button-next-outside
			const swiperButtonNextSelector =
				this.controlsPosition === 'inside'
					? '.swiper-button-next'
					: `.swiper-button-next-${this.controlsPosition}`;
			const swiperButtonPrevSelector =
				this.controlsPosition === 'inside'
					? '.swiper-button-prev'
					: `.swiper-button-prev-${this.controlsPosition}`;
			const swiperPaginationSelector =
				this.indicatorPosition === 'inside'
					? '.swiper-pagination'
					: `.swiper-pagination-${this.indicatorPosition}`;
			return {
				navigation: {
					nextEl: swiperButtonNextSelector,
					prevEl: swiperButtonPrevSelector,
				},
				pagination: {
					el: swiperPaginationSelector,
				},
				allowTouchMove: true,
				...(this.isSwiperType && this.swiperTypeOptions),
				...(this.isSwiperGroupType && this.swiperGroupTypeOptions),
			};
		},
		swiper() {
			return this.$refs.mySwiper.$swiper;
		},
		computedIndicatorColorClass() {
			return `swiper-indicator-${this.indicatorColor}`;
		},
		computedControlsColor() {
			const colorMap = {
				light: 'white',
				dark: 'gray800',
			};
			return colorMap[this.controlsColor];
		},
		computedControlsPosition() {
			return this.controlsPosition;
		},
	},
	components: {
		BaseSwiper,
		BaseSwiperSlide,
		Icon,
	},
};
</script>

<style scoped lang="scss">
$swiper-background-color: #c4c4c4;
.swiper {
	height: 300px;
	width: 100%;

	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-weight: bold;
		background-color: $swiper-background-color;
	}
}
::v-deep .swiper-pagination-bullet {
	width: 20px;
	height: 3px;
	border-radius: 0;
}
/* 클래스를 직접 주입할 수 없으므로, 그 상위에 주입 */
::v-deep .swiper-indicator-dark {
	.swiper-pagination-bullet {
		background-color: $gray800;
	}
}
::v-deep .swiper-indicator-light {
	.swiper-pagination-bullet {
		background-color: $white;
	}
}
.swiper-button-outside {
	position: absolute;
	z-index: 10;
	cursor: pointer;
	top: 50%;
	margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
	height: var(--swiper-navigation-size);
}
.swiper-button-prev {
	left: 15px;
}
.swiper-button-next {
	right: 15px;
}
.swiper-button-prev-outside {
	left: -46px;
}
.swiper-button-next-outside {
	right: -46px;
}
.swiper-button-top {
	position: absolute;
	z-index: 10;
	cursor: pointer;
	top: -38px;
}
.swiper-button-prev-top {
	right: 38px;
}
.swiper-button-next-top {
	right: 0;
}
.swiper-button-disabled {
	opacity: 0.35;
	cursor: auto;
	pointer-events: none;
}
::v-deep .swiper-pagination-outside {
	text-align: center;
	.swiper-pagination-bullet {
		&:not(:last-child) {
			margin-right: 6px;
		}
	}
}
</style>
