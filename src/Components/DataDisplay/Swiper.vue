<template>
	<base-swiper ref="mySwiper" class="swiper" :options="swiperOptions">
		<base-swiper-slide v-for="(node, index) in Object.keys(this.$slots).length" :key="`tabs-item-${index}-${key}`">
			<slot :name="'item' + index"></slot>
		</base-swiper-slide>
	</base-swiper>
</template>

<script>
import customValidator from '@/utils/custom-validator.js';
import { Swiper as BaseSwiper, SwiperSlide as BaseSwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export const SwiperTypes = ['swiper', 'slider'];

export default {
	name: 'Swiper',
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
			};
		},
		swiper() {
			return this.$refs.mySwiper.$swiper;
		},
	},
	components: {
		BaseSwiper,
		BaseSwiperSlide,
	},
	directives: {
		swiper: directive,
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
</style>
