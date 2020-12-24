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
				:color="computedControlColor"
			></Icon>
			<Icon
				v-show="showInsideControl"
				slot="button-next"
				name="IconArrowXLargeLine"
				:rotate="90"
				class="swiper-button-next"
				:class="computedControlsPosition"
				:color="computedControlColor"
			></Icon>
			<div
				v-show="withIndicators"
				slot="pagination"
				class="swiper-pagination"
				:class="computedIndicatorColorClass"
			></div>
		</base-swiper>
		<Icon
			v-show="showOutsideControl"
			name="IconArrowXLargeLine"
			:rotate="-90"
			class="swiper-button-prev-outside"
			:class="computedControlsPosition"
			:color="computedControlColor"
		></Icon>
		<Icon
			v-show="showOutsideControl"
			name="IconArrowXLargeLine"
			:rotate="90"
			class="swiper-button-next-outside"
			:class="computedControlsPosition"
			:color="computedControlColor"
		></Icon>
	</div>
</template>

<script>
import customValidator from '@/utils/custom-validator.js';
import Icon from '@/src/Elements/Core/Icon/Icon';
import { Swiper as BaseSwiper, SwiperSlide as BaseSwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export const SwiperTypes = ['swiper', 'swiperGroup', 'slider'];
export const SwiperIndicatorColors = ['light', 'dark'];
export const SwiperControlColors = ['light', 'dark'];
export const SwiperControlPositions = ['inside', 'outside', 'top'];
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
		controlColor: {
			type: String,
			default: 'light',
			validator(value) {
				return customValidator(value, SwiperControlColors.indexOf(value) !== -1, 'Swiper', 'controlColor');
			},
		},
		withIndicators: {
			type: Boolean,
			default: false,
			validator(value) {
				return customValidator(value, typeof value === 'boolean', 'Swiper', 'withIndicators');
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
		// showTopControl() {
		// 	return this.withControls && this.controlsPosition === 'outside';
		// },
		isSwiperGroupType() {
			return this.type === 'swiperGroup';
		},
		isSwiperType() {
			return this.type === 'swiper';
		},
		swiperTypeOptions() {
			// ex. swiper-button-next, swiper-button-next-outside
			const swiperButtonNextClass =
				this.controlsPosition === 'inside'
					? '.swiper-button-next'
					: `.swiper-button-next-${this.controlsPosition}`;
			const swiperButtonPrevClass =
				this.controlsPosition === 'inside'
					? '.swiper-button-prev'
					: `.swiper-button-prev-${this.controlsPosition}`;
			return {
				slidesPerView: 'auto',
				allowTouchMove: false,
				navigation: {
					nextEl: swiperButtonNextClass,
					prevEl: swiperButtonPrevClass,
				},
				pagination: {
					el: '.swiper-pagination',
				},
			};
		},
		swiperGroupTypeOptions() {
			return {
				slidesPerView: 3,
				spaceBetween: this.spacing,
				allowTouchMove: false,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
				},
			};
		},
		swiperOptions() {
			return {
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
		computedControlColor() {
			const colorMap = {
				light: 'white',
				dark: 'gray800',
			};
			return colorMap[this.controlColor];
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
.swiper-button-prev-outside,
.swiper-button-next-outside {
	position: absolute;
	top: 50%;
	z-index: 10;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}
.swiper-button-prev-outside {
	left: -46px;
	margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
	height: var(--swiper-navigation-size);
}
.swiper-button-next-outside {
	right: -46px;
	margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
	height: var(--swiper-navigation-size);
}
.swiper-button-disabled {
	opacity: 0.35;
	cursor: auto;
	pointer-events: none;
}
</style>
