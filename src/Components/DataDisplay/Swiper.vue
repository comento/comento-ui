<template>
	<div
		class="c-application c-swiper"
		@mouseenter="handleSwiperAutoplay('stop')"
		@mouseleave="handleSwiperAutoplay('start')"
	>
		<base-swiper
			ref="mySwiper"
			class="swiper"
			:options="swiperOptions"
			:cleanup-styles-on-destroy="false"
			v-bind="$attrs"
			v-on="$listeners"
		>
			<base-swiper-slide
				v-for="(node, index) in Object.keys(this.$slots).length"
				:key="`tabs-item-${index}-${key}`"
				style="width: auto"
			>
				<slot :name="'item' + index"></slot>
			</base-swiper-slide>
			<Icon
				v-if="showInsideControl"
				:id="`swiper-button-prev-${_uid}`"
				slot="button-prev"
				name="IconArrowLargeLine"
				:rotate="-90"
				class="swiper-button swiper-button-prev"
				:class="[computedControlsPosition, computedControlsCircle]"
				:color="computedControlsColor"
			></Icon>
			<Icon
				v-if="showInsideControl"
				:id="`swiper-button-next-${_uid}`"
				slot="button-next"
				name="IconArrowLargeLine"
				:rotate="90"
				class="swiper-button swiper-button-next"
				:class="[computedControlsPosition, computedControlsCircle]"
				:color="computedControlsColor"
			></Icon>
			<div
				v-if="showInsideIndicator"
				:id="`swiper-pagination-${_uid}`"
				slot="pagination"
				class="swiper-pagination"
				:class="computedIndicatorColorClass"
			></div>
		</base-swiper>
		<Icon
			v-if="showOutsideControl"
			:id="`swiper-button-prev-outside-${_uid}`"
			name="IconArrowLargeLine"
			:rotate="-90"
			class="swiper-button swiper-button-outside swiper-button-prev-outside"
			:class="[computedControlsPosition, computedControlsCircle]"
			:color="computedControlsColor"
		></Icon>
		<Icon
			v-if="showOutsideControl"
			:id="`swiper-button-next-outside-${_uid}`"
			name="IconArrowLargeLine"
			:rotate="90"
			class="swiper-button swiper-button-outside swiper-button-next-outside"
			:class="[computedControlsPosition, computedControlsCircle]"
			:color="computedControlsColor"
		></Icon>
		<Icon
			v-if="showTopControl"
			:id="`swiper-button-prev-top-${_uid}`"
			name="IconArrowLargeLine"
			:rotate="-90"
			class="swiper-button-top swiper-button-prev-top"
			:class="[computedControlsPosition, computedControlsCircle]"
			:color="computedControlsColor"
		></Icon>
		<Icon
			v-if="showTopControl"
			:id="`swiper-button-next-top-${_uid}`"
			name="IconArrowLargeLine"
			:rotate="90"
			class="swiper-button-top swiper-button-next-top"
			:class="[computedControlsPosition, computedControlsCircle]"
			:color="computedControlsColor"
		></Icon>
		<div
			v-if="showOutsideIndicator"
			:id="`swiper-pagination-outside-${_uid}`"
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

export const SwiperControlsColors = ['light', 'dark'];
export const SwiperControlPositions = ['inside', 'outside', 'top'];
export const SwiperIndicatorColors = ['light', 'dark'];
export const SwiperIndicatorPositions = ['inside', 'outside'];

export default {
	name: 'Swiper',
	inheritAttrs: false,
	props: {
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
		controlsCircle: {
			type: Boolean,
			default: false,
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
		},
		centeredSlides: {
			type: Boolean,
			default: false,
		},
		slidesPerView: {
			type: [Number, String],
			default: 1,
		},
		slidesPerGroup: {
			type: Number,
			default: 1,
		},
		autoplay: {
			type: Boolean,
			default: false,
		},
		autoplayDelay: {
			type: Number,
			default: 6000,
		},
		loop: {
			type: Boolean,
			default: true,
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
		swiper() {
			return this.$refs.mySwiper.$swiper;
		},
		// common options
		swiperOptions() {
			// ex. swiper-button-next, swiper-button-next-outside
			const swiperButtonNextSelector =
				this.controlsPosition === 'inside'
					? `#swiper-button-next-${this._uid}`
					: `#swiper-button-next-${this.controlsPosition}-${this._uid}`;
			const swiperButtonPrevSelector =
				this.controlsPosition === 'inside'
					? `#swiper-button-prev-${this._uid}`
					: `#swiper-button-prev-${this.controlsPosition}-${this._uid}`;
			const swiperPaginationSelector =
				this.indicatorPosition === 'inside'
					? `#swiper-pagination-${this._uid}`
					: `#swiper-pagination-${this.indicatorPosition}-${this._uid}`;
			// spacing을 적용할 수 있는 조건 (sliderPerView가 1이상이거나, 'auto'일 때)
			const canHaveSpacing =
				(Number.isInteger(Number(this.slidesPerView)) && this.slidesPerView > 1) ||
				this.slidesPerView === 'auto';
			return {
				loop: this.loop,
				navigation: {
					nextEl: swiperButtonNextSelector,
					prevEl: swiperButtonPrevSelector,
				},
				pagination: {
					el: swiperPaginationSelector,
					clickable: true,
				},
				centeredSlides: this.centeredSlides,
				allowTouchMove: true,
				slidesPerView: this.slidesPerView,
				...(canHaveSpacing && { spaceBetween: this.spacing }),
				...(this.autoplay && {
					autoplay: {
						delay: this.autoplayDelay,
						// swipe하면 autoplay가 멈추는 속성
						disableOnInteraction: false,
					},
				}),
				slidesPerGroup: this.slidesPerGroup,
			};
		},
		computedIndicatorColorClass() {
			return `swiper-indicator-${this.indicatorColor}`;
		},
		computedControlsColor() {
			const colorMap = {
				light: 'white',
				dark: 'gray800',
			};
			if (this.controlsCircle && this.controlsColor === 'dark') {
				return 'gray500';
			} else {
				return colorMap[this.controlsColor];
			}
		},
		computedControlsPosition() {
			return this.controlsPosition;
		},
		computedControlsCircle() {
			return (
				this.withControls &&
				this.controlsCircle &&
				`swiper-button-background-circle swiper-button-background-circle-${this.controlsColor}`
			);
		},
	},
	methods: {
		handleSwiperAutoplay(type) {
			if (this.autoplay) {
				if (type === 'start') {
					this.swiper.autoplay.start();
				} else {
					this.swiper.autoplay.stop();
				}
			}
		},
	},
	components: {
		BaseSwiper,
		BaseSwiperSlide,
		Icon,
	},
};
</script>

<style lang="scss" scoped>
::v-deep {
	@import '@/assets/style/swiper/swiper';
}
$swiper-control-size: 24px;
$swiper-control-circle-radius: 16px;

.c-swiper {
	position: relative;
}
.swiper {
	width: 100%;
	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: center;
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
}
/* 원형 컨트롤의 disabled 기존 스타일을 초기화 */
:not(.swiper-button-background-circle) {
	&.swiper-button-disabled {
		opacity: 1;
		fill: $gray300 !important;
	}
}
.swiper-button-background-circle {
	border-radius: 50%;
	padding: calc((#{$swiper-control-circle-radius} * 2 - #{$swiper-control-size}) / 2);
	margin-top: calc(-1 * #{$swiper-control-circle-radius} / 2);
	&-light {
		background-color: rgba(0, 0, 0, 0.3) !important;
		&.swiper-button-disabled {
			background-color: rgba(0, 0, 0, 0.3) !important;
			opacity: 0.1;
		}
	}
	&-dark {
		background-color: rgba(255, 255, 255, 0.9) !important;
		&.swiper-button-disabled {
			background-color: rgba(255, 255, 255, 0.9) !important;
			opacity: 0.3;
		}
	}
}
.swiper-button {
	width: auto;
	height: auto;
	margin-top: calc(-1 * #{$swiper-control-size} / 2) !important;
	&.swiper-button-background-circle {
		margin-top: calc(-1 * #{$swiper-control-circle-radius}) !important;
	}
}
.swiper-button-prev {
	left: 8px;
}
.swiper-button-next {
	right: 8px;
}
.swiper-button-prev-outside {
	left: calc(-1 * (#{$swiper-control-size} + 8px));
	&.swiper-button-background-circle {
		left: calc(-1 * (#{$swiper-control-circle-radius} * 2 + 8px));
	}
}
.swiper-button-next-outside {
	right: calc(-1 * (#{$swiper-control-size} + 8px));
	&.swiper-button-background-circle {
		right: calc(-1 * (#{$swiper-control-circle-radius} * 2 + 8px));
	}
}
.swiper-button-top {
	position: absolute;
	z-index: 10;
	cursor: pointer;
	width: auto;
	height: auto;
	top: calc(-1 * (#{$swiper-control-size} + 8px));
	&.swiper-button-background-circle {
		top: calc(-1 * (#{$swiper-control-circle-radius} * 2 + 8px));
	}
}
.swiper-button-prev-top {
	right: 38px;
}
.swiper-button-next-top {
	right: 0;
}
::v-deep .swiper-pagination-outside {
	text-align: center;
	margin-top: 3px !important;
	.swiper-pagination-bullet {
		&:not(:last-child) {
			margin-right: 6px;
		}
	}
}
</style>
