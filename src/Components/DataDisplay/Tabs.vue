<template>
	<swiper
		v-if="type === 'swiper'"
		ref="mySwiper"
		class="c-application c-tabs--menu-container swiper"
		:class="[blurLeft ? 'c-tabs--blur-left' : '', blurRight ? 'c-tabs--blur-right' : '']"
		:options="swiperOptions"
	>
		<div class="c-tabs--menu-wrapper">
			<swiper-slide
				v-for="(item, index) in Object.keys(this.$slots).length"
				:key="`tabs-item-${index}`"
				:class="{ active: index === selectedNo }"
			>
				<div class="c-tabs--menu-button" @click="setSelectedNo(index)">
					<slot :name="'item' + index"></slot>
				</div>
			</swiper-slide>
		</div>
	</swiper>
	<div v-else class="c-application c-tabs c-tabs--menu-container">
		<div class="c-tabs--menu-wrapper">
			<div
				v-for="(node, index) in Object.keys(this.$slots).length"
				:key="`tabs-item-${index}`"
				class="c-tabs--menu-button"
				:class="{ active: index === selectedNo }"
				@click="setSelectedNo(index)"
			>
				<slot :name="'item' + index"></slot>
			</div>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export const TabsTypes = ['basic', 'swiper'];
export default {
	name: 'Tabs',
	props: {
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
			blurLeft: false,
			blurRight: false,
		};
	},
	computed: {
		swiperOptions() {
			return {
				spaceBetween: 12,
				slidesPerView: 'auto',
				on: {
					init: () => {
						console.log('init');
						this.blurRight = true;
					},
					reachBeginning: () => {
						console.log('reachBeginning');
						this.blurLeft = false;
						this.blurRight = true;
					},
					reachEnd: () => {
						console.log('reachEnd');
						this.blurLeft = true;
						this.blurRight = false;
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
	},
	components: {
		Swiper,
		SwiperSlide,
	},
};
</script>

<style lang="scss" scoped>
::v-deep {
	@import '@/assets/style/swiper/swiper';
}
::v-deep .swiper {
	&-slide {
		width: auto;
		&:last-child {
			margin-right: 0 !important;
		}
	}
}
.c-tabs {
	&--menu {
		&-wrapper {
			@include flexbox();
			background: linear-gradient(180deg, transparent 97%, $gray200 0);
			padding-bottom: 1px;
		}
		&-container {
			background-color: $white;
			width: 100%;
		}
		&-button {
			@include flexbox();
			position: relative;
			@include align-items(center);
			&:hover {
				background-color: $gray100;
			}
			&::v-deep .c-button {
				background: none !important;
				border: 0;
				outline: 0;
				padding: 4px;
				cursor: pointer;
				color: $gray400;
				width: fit-content;
				@include body2();
				&:focus {
					background: transparent;
				}
				&:not(:last-child) {
					margin-right: 12px;
				}
			}
			@include remove-active-and-focus();
		}
	}
}
.active {
	&::v-deep .c-button {
		font-weight: 700;
		color: $gray800;
	}
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
/*&--blur-left {*/
/*	background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);*/
/*}*/
/*&--blur-right {*/
/*	background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);*/
/*}*/
</style>
