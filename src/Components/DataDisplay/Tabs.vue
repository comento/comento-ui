<template>
	<swiper v-if="type === 'swiper'" ref="mySwiper" class="swiper" :options="swiperOptions">
		<swiper-slide v-for="(item, index) in items" :key="`tabs-item-${item}-${index}`">
			<button class="c-tabs--menu-button" :class="{ active: index === selectedNo }" @click="setSelectedNo(index)">
				{{ item }}
			</button>
		</swiper-slide>
	</swiper>
	<div v-else class="c-application c-tabs--menu-container">
	    <div class="c-tabs--menu-wrapper">
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
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
		};
	},
	computed: {
		swiperOptions() {
			return {
				spaceBetween: 12,
				setWrapperSize: true,
				slidesPerView: 'auto',
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
};
</script>

<style scoped lang="scss">
.c-tabs--menu {
	&-wrapper {
		background-color: $white;
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
		position: relative;
		&:not(:last-child) {
			margin-right: 12px;
		}
		&.active {
			font-weight: 700;
			color: $gray800;
			&:after {
				content: '';
				display: flex;
				position: absolute;
				width: 100%;
				height: 2px;
				background: $gray600;
				left: 0;
				bottom: -1px;
			}
		}
		&:hover {
			background-color: $gray100;
		}
	}
}
::v-deep .swiper {
	&-slide {
		width: auto;
		&:last-child {
			margin-right: 0 !important;
		}
	}
}

.c-tabs--menu-container,
.swiper-container {
	display: inline-block;
	background: linear-gradient(180deg, transparent 97%, $gray200 0);
	padding-bottom: 1px;
}
</style>
