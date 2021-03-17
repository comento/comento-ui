<template>
	<!-- blur class 로직 -->
	<!-- :class="[blurLeft ? 'c-tabs&#45;&#45;blur-left' : '', blurRight ? 'c-tabs&#45;&#45;blur-right' : '']"-->
	<swiper
		v-if="type === 'swiper'"
		ref="mySwiper"
		class="c-application c-tabs--menu-container swiper"
		:options="swiperOptions"
	>
		<swiper-slide
			v-for="(item, index) in Object.keys(this.$slots).length"
			:key="`tabs-item-${index}`"
			:class="{ active: index === tabIndex }"
		>
			<div class="c-tabs--menu-button" @click="setTabIndex(index)">
				<slot :name="'item' + index"></slot>
			</div>
		</swiper-slide>
	</swiper>
	<div v-else class="c-application c-tabs c-tabs--menu-container">
		<div class="c-tabs--menu-wrapper" :class="classes">
			<div
				v-for="(node, index) in Object.keys(this.$slots).length"
				:key="`tabs-item-${index}`"
				class="c-tabs--menu-button"
				:class="{ active: index === tabIndex }"
				@click="setTabIndex(index)"
			>
				<slot :name="'item' + index"></slot>
			</div>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export const TabsTypes = ['basic', 'swiper'];
export const TabsDirections = ['horizontal', 'vertical'];
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
		direction: {
			type: String,
			default: 'horizontal',
			validator(value) {
				return TabsDirections.indexOf(value) !== -1;
			},
		},
		tabIndex: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	data() {
		return {
			blurLeft: false,
			blurRight: false,
		};
	},
	computed: {
		swiperOptions() {
			return {
				slidesPerView: 'auto',
				slideToClickedSlide: true,
				freeMode: true,
				on: {
					init: () => {
						this.blurRight = true;
						this.$emit('swiperInit');
					},
					reachBeginning: () => {
						this.blurLeft = false;
						this.blurRight = true;
						this.$emit('swiperReachBeginning');
					},
					reachEnd: () => {
						this.blurLeft = true;
						this.blurRight = false;
						this.$emit('swiperReachEnd');
					},
				},
			};
		},
		computedDirection() {
			return `c-tabs--${this.direction}`;
		},
		classes() {
			return [this.computedDirection];
		},
		swiper() {
			return this.$refs.mySwiper.$swiper;
		},
	},
	methods: {
		setTabIndex(index) {
			this.$emit('changeTabIndex', index);
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
		&:not(:last-child) {
			margin-right: 12px;
		}
	}
}
.c-tabs {
	&--vertical {
		@include flex-direction(column);
		.c-tabs {
			&--menu {
				&-button {
					margin-right: 0;
					width: fit-content;
					&:not(:last-child) {
						margin-bottom: 16px;
					}
					/* pc 탭은 왼쪽 정렬이므로 */
					.c-button {
						justify-content: flex-start;
					}
				}
			}
		}
		&.c-tabs--menu-wrapper {
			width: fit-content;
			border-bottom: none;
		}
	}
	&--horizontal {
		.c-tabs {
			&--menu {
				&-button {
					&:not(:last-child) {
						margin-right: 12px;
					}
				}
			}
		}
		&.c-tabs--menu-wrapper {
			width: 100%;
		}
	}
	&--menu {
		&-wrapper {
			@include flexbox();
			border-bottom: 1px solid rgba($gray200, 0.97);
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
				min-width: auto;
				@include body2();
				@include remove-active-and-focus();
			}
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
