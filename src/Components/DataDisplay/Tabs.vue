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
				return [];
			},
			validator(value) {
				return Array.isArray(value);
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
	methods: {
		setSelectedNo(index) {
			this.selectedNo = index;
			this.$emit('changeSelectedNo', index);
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
.c-tabs--menu {
	&-wrapper {
		background-color: $white;
	}
	&-container {
		// content만큼만 width를 차지하기 위함
		display: inline-block;
		border-bottom: 1px solid $gray200;
	}
	&-button {
		background: none;
		border: 0;
		outline: 0;
		padding: 4px;
		cursor: pointer;
		color: $gray800;
		width: fit-content;
		@include body2();
		&:not(:last-child) {
			margin-right: 12px;
		}
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
::v-deep .swiper {
	&-slide {
		width: auto;
	}
}
.swiper {
	&-container {
		display: inline-block;
		border-bottom: 1px solid $gray200;
	}
}
</style>
