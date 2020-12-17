<template>
	<base-swiper ref="mySwiper" class="swiper" :options="swiperOptions" v-bind="$attrs">
		<base-swiper-slide v-for="(node, index) in Object.keys(this.$slots).length" :key="`tabs-item-${index}-${key}`">
			<slot :name="'item' + index"></slot>
		</base-swiper-slide>
		<Icon
			v-show="withControls"
			slot="button-prev"
			name="IconArrowXLargeLine"
			:rotate="-90"
			class="swiper-button-prev"
			color="white"
		></Icon>
		<Icon
			v-show="withControls"
			slot="button-next"
			name="IconArrowXLargeLine"
			:rotate="90"
			class="swiper-button-next"
			color="white"
		></Icon>
		<div slot="pagination" class="swiper-pagination" :class="computedPaginationBulletColorClass"></div>
	</base-swiper>
</template>

<script>
import customValidator from '@/utils/custom-validator.js';
import Icon from '@/src/Elements/Core/Icon/Icon';
import { Swiper as BaseSwiper, SwiperSlide as BaseSwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export const SwiperTypes = ['swiper', 'slider'];
export const SwiperPaginationBulletColors = ['white', 'black'];

export default {
	name: 'Swiper',
	inheritAttrs: false,
	props: {
		type: {
			type: String,
			default: 'swiper',
			validator(value) {
				const assert = value => {
					return SwiperTypes.indexOf(value) !== -1;
				};
				return customValidator(value, assert, 'Swiper type');
			},
		},
		withControls: {
			type: Boolean,
			default: false,
			validator(value) {
				const assert = value => {
					return typeof value === 'boolean';
				};
				return customValidator(value, assert, 'Swiper withControls');
			},
		},
		paginationBulletColor: {
			type: String,
			default: 'white',
			validator(value) {
				const assert = value => {
					return SwiperPaginationBulletColors.indexOf(value) !== -1;
				};
				return customValidator(value, assert, 'Swiper paginationBulletColor');
			},
		},
	},
	data() {
		return {
			key: Math.random(),
		};
	},
	computed: {
		swiperOptions() {
			return {
				slidesPerView: 'auto',
				spaceBetween: 12,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
				},
			};
		},
		swiper() {
			return this.$refs.mySwiper.$swiper;
		},
		computedPaginationBulletColorClass() {
			return `swiper-pagination-bullet-${this.paginationBulletColor}`;
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
::v-deep .swiper-pagination-bullet-black {
	.swiper-pagination-bullet {
		background-color: $gray800;
	}
}
::v-deep .swiper-pagination-bullet-white {
	.swiper-pagination-bullet {
		background-color: $white;
	}
}
</style>
