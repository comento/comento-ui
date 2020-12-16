<template>
	<swiper v-if="type === 'swiper'" ref="mySwiper" :options="swiperOptions">
		<swiper-slide v-for="(item, index) in items" :key="`tabs-item-${item}-${index}`">
			<button class="c-tabs--menu-button" :class="{ active: index === selectedNo }" @click="setSelectedNo(index)">
				{{ item }}
			</button>
		</swiper-slide>
	</swiper>
	<div v-else class="c-application c-tabs--menu-wrapper">
		<div class="c-tabs--menu-container">
			<button
				v-for="(item, index) in items"
				:key="`tabs-item-${item}-${index}`"
				class="c-tabs--menu-button"
				:class="{ active: index === selectedNo }"
				@click="setSelectedNo(index)"
			>
				{{ item }}
			</button>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export const TabsTypes = ['basic', 'swiper'];

export default {
	name: 'Tabs',
	props: {
		items: {
			type: Array,
			default() {
				return ['item1', 'item2', 'item3', 'item4', 'item5'];
			},
		},
		type: {
			type: String,
			default: 'basic',
			validator(value) {
				return TabsTypes.indexOf(value) !== -1;
			},
		},
	},
	data() {
		return {
			selectedNo: 0,
			slidesPerView: 10,
		};
	},
	computed: {
		// groupInfoSwiperOption() {
		// 	return {
		// 		slidesPerView: 3,
		// 		initialSlide: 0,
		// 		slidesPerColumn: 1,
		// 		spaceBetween: 0,
		// 		direction: 'vertical',
		// 		allowTouchMove: false, // 드래그로 이동 못하게 막기
		// 		slideToClickedSlide: false,
		// 		navigation: {
		// 			nextEl: '.swiper-button-next',
		// 			prevEl: '.swiper-button-prev',
		// 		},
		// 	};
		// },
		swiperOptions() {
			return {
				slidesPerView: 5,
				spaceBetween: 12,
				breakpoints: {
					0: {
						slidesPerView: 5,
						spaceBetween: 12,
					},
					481: {
						slidesPerView: this.items.length,
						spaceBetween: 12,
					},
				},
				on: {
					// 무조건 화살표 함수 써야됨. 일반함수 쓰면 바인딩이 잘못됨
					slideChange: swiper => {
						this.setActiveIndex(swiper.activeIndex);
					},
				},
			};
		},
		swiper() {
			return this.$refs.mySwiper.$swiper;
		},
	},
	methods: {
		setSelectedNo(index) {
			this.selectedNo = index;
			this.$emit('changeSelectedNo', index);
		},
		setActiveIndex(index) {
			this.activeIndex = index;
		},
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	directives: {
		swiper: directive,
	},
};
</script>

<style scoped lang="scss">
button {
	background: none;
	border: 0;
	outline: 0;
	cursor: pointer;
	color: $gray800;
}
.c-tabs--menu {
	&-wrapper {
		background-color: $white;
	}
	&-container {
		display: flex;
		/*justify-content: space-evenly;*/
		border-bottom: 1px solid $gray200;
	}
	&-button {
		width: 100%;
		height: 36px;
		transition: 0.3s all;
		&.active {
			border-bottom: 2px solid $gray600;
			font-weight: 700;
			color: $gray800;
		}
		&:hover {
			background-color: $gray100;
		}
	}
}
</style>
