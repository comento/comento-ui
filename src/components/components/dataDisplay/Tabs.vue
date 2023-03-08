<!--<template>-->
<!--	&lt;!&ndash; blur class 로직 &ndash;&gt;-->
<!--	&lt;!&ndash; :class="[blurLeft ? 'c-tabs&#45;&#45;blur-left' : '', blurRight ? 'c-tabs&#45;&#45;blur-right' : '']"&ndash;&gt;-->
<!--	<swiper-->
<!--		v-if="type === 'swiper'"-->
<!--		ref="mySwiper"-->
<!--		class="c-application c-tabs&#45;&#45;menu-container swiper"-->
<!--		:class="[computedTransparent, computedWithHeader]"-->
<!--		:options="swiperOptions"-->
<!--	>-->
<!--		<swiper-slide-->
<!--			v-for="(item, index) in Object.keys(this.$slots).length"-->
<!--			:key="`tabs-item-${index}`"-->
<!--			:class="{ active: index === tabIndex }"-->
<!--		>-->
<!--			<div class="c-tabs&#45;&#45;menu-button" @click="setTabIndex(index)">-->
<!--				<slot :name="'item' + index"></slot>-->
<!--			</div>-->
<!--		</swiper-slide>-->
<!--	</swiper>-->
<!--	<div v-else class="c-application c-tabs c-tabs&#45;&#45;menu-container" :class="classes">-->
<!--		<div class="c-tabs&#45;&#45;menu-wrapper">-->
<!--			<div-->
<!--				v-for="(node, index) in Object.keys(this.$slots).length"-->
<!--				:key="`tabs-item-${index}`"-->
<!--				class="c-tabs&#45;&#45;menu-button"-->
<!--				:class="{ active: index === tabIndex }"-->
<!--				@click="setTabIndex(index)"-->
<!--			>-->
<!--				<slot :name="'item' + index"></slot>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
<!--</template>-->

<!--<script>-->
<!--import { Swiper, SwiperSlide } from 'vue-awesome-swiper';-->

<!--export const TabsTypes = ['basic', 'swiper'];-->
<!--export const TabsDirections = ['horizontal', 'vertical'];-->

<!--/**-->
<!-- * @displayName c-tabs-->
<!-- */-->
<!--export default {-->
<!--	name: 'Tabs',-->
<!--	props: {-->
<!--		/**-->
<!--		 * 타입(basic, swiper)-->
<!--		 */-->
<!--		type: {-->
<!--			type: String,-->
<!--			default: 'basic',-->
<!--			validator(value) {-->
<!--				return TabsTypes.indexOf(value) !== -1;-->
<!--			},-->
<!--		},-->
<!--		/**-->
<!--		 * 방향(horizontal, vertical)-->
<!--		 */-->
<!--		direction: {-->
<!--			type: String,-->
<!--			default: 'horizontal',-->
<!--			validator(value) {-->
<!--				return TabsDirections.indexOf(value) !== -1;-->
<!--			},-->
<!--		},-->
<!--		tabIndex: {-->
<!--			type: Number,-->
<!--			required: true,-->
<!--			default: 0,-->
<!--		},-->
<!--		transparent: {-->
<!--			type: Boolean,-->
<!--			default: false,-->
<!--		},-->
<!--		withHeader: {-->
<!--			type: Boolean,-->
<!--			default: false,-->
<!--		},-->
<!--	},-->
<!--	data() {-->
<!--		return {-->
<!--			blurLeft: false,-->
<!--			blurRight: false,-->
<!--		};-->
<!--	},-->
<!--	computed: {-->
<!--		swiperOptions() {-->
<!--			return {-->
<!--				slidesPerView: 'auto',-->
<!--				slideToClickedSlide: true,-->
<!--				freeMode: true,-->
<!--				on: {-->
<!--					init: () => {-->
<!--						this.blurRight = true;-->
<!--						this.$emit('swiperInit');-->
<!--					},-->
<!--					reachBeginning: () => {-->
<!--						this.blurLeft = false;-->
<!--						this.blurRight = true;-->
<!--						this.$emit('swiperReachBeginning');-->
<!--					},-->
<!--					reachEnd: () => {-->
<!--						this.blurLeft = true;-->
<!--						this.blurRight = false;-->
<!--						this.$emit('swiperReachEnd');-->
<!--					},-->
<!--				},-->
<!--			};-->
<!--		},-->
<!--		computedDirection() {-->
<!--			return `c-tabs&#45;&#45;${this.direction}`;-->
<!--		},-->
<!--		computedTransparent() {-->
<!--			return { transparent: this.transparent };-->
<!--		},-->
<!--		computedWithHeader() {-->
<!--			return { 'with-header': this.withHeader };-->
<!--		},-->
<!--		classes() {-->
<!--			return [this.computedDirection, this.computedTransparent, this.computedWithHeader];-->
<!--		},-->
<!--		swiper() {-->
<!--			return this.$refs.mySwiper.$swiper;-->
<!--		},-->
<!--	},-->
<!--	methods: {-->
<!--		setTabIndex(index) {-->
<!--			this.$emit('changeTabIndex', index);-->
<!--		},-->
<!--	},-->
<!--	components: {-->
<!--		Swiper,-->
<!--		SwiperSlide,-->
<!--	},-->
<!--};-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--::v-deep {-->
<!--	@import '@/assets/style/swiper/swiper';-->
<!--}-->
<!--::v-deep .swiper {-->
<!--	&-slide {-->
<!--		width: auto;-->
<!--		&:not(:last-child) {-->
<!--			margin-right: 12px;-->
<!--		}-->
<!--	}-->
<!--}-->
<!--/* tabs 최소 높이 */-->
<!--::v-deep {-->
<!--	.c-button {-->
<!--		height: 30px !important;-->
<!--	}-->
<!--}-->

<!--// 투명 타입-->
<!--.transparent {-->
<!--	&.c-tabs&#45;&#45;menu-container {-->
<!--		background-color: transparent;-->
<!--	}-->
<!--	.c-tabs&#45;&#45;menu-button {-->
<!--		&::v-deep .c-button {-->
<!--			color: white;-->
<!--			opacity: 0.6;-->
<!--		}-->
<!--		@include pc {-->
<!--			&:hover {-->
<!--				background-color: rgba(255, 255, 255, 0.2);-->
<!--				@include border-radius(6px);-->
<!--				&::v-deep .c-button {-->
<!--					opacity: 1;-->
<!--				}-->
<!--			}-->
<!--		}-->
<!--	}-->
<!--	.active {-->
<!--		&::v-deep .c-button {-->
<!--			color: white;-->
<!--			opacity: 1;-->
<!--		}-->
<!--		&:after {-->
<!--			background-color: $white;-->
<!--		}-->
<!--	}-->
<!--}-->

<!--.c-tabs {-->
<!--	&&#45;&#45;vertical {-->
<!--		.c-tabs {-->
<!--			&&#45;&#45;menu {-->
<!--				&-wrapper {-->
<!--					@include flex-direction(column);-->
<!--					width: fit-content;-->
<!--					border-bottom: none;-->
<!--				}-->
<!--				&-button {-->
<!--					margin-right: 0;-->
<!--					width: fit-content;-->
<!--					&:not(:last-child) {-->
<!--						margin-bottom: 16px;-->
<!--					}-->
<!--					/* pc 탭은 왼쪽 정렬이므로 */-->
<!--					.c-button {-->
<!--						justify-content: flex-start;-->
<!--					}-->
<!--				}-->
<!--			}-->
<!--		}-->
<!--	}-->
<!--	&&#45;&#45;horizontal {-->
<!--		.c-tabs {-->
<!--			&&#45;&#45;menu {-->
<!--				&-wrapper {-->
<!--					width: 100%;-->
<!--				}-->
<!--				&-button {-->
<!--					&:not(:last-child) {-->
<!--						margin-right: 12px;-->
<!--					}-->
<!--				}-->
<!--			}-->
<!--		}-->
<!--	}-->
<!--	&&#45;&#45;menu {-->
<!--		&-wrapper {-->
<!--			@include flexbox();-->
<!--		}-->
<!--		&-container {-->
<!--			background-color: $white;-->
<!--			width: 100%;-->
<!--			&:not(.c-tabs&#45;&#45;vertical) {-->
<!--				border-bottom: 1px solid $gray200;-->
<!--			}-->
<!--		}-->
<!--		&-button {-->
<!--			@include flexbox();-->
<!--			position: relative;-->
<!--			@include align-items(center);-->
<!--			@include pc {-->
<!--				&:hover {-->
<!--					@include border-radius(6px);-->
<!--					background-color: $gray100;-->
<!--				}-->
<!--			}-->
<!--			&::v-deep .c-button {-->
<!--				background: none !important;-->
<!--				border: 0;-->
<!--				outline: 0;-->
<!--				padding: 4px;-->
<!--				cursor: pointer;-->
<!--				color: $gray400;-->
<!--				width: fit-content;-->
<!--				min-width: auto;-->
<!--				@include body2();-->
<!--				@include remove-active-and-focus();-->
<!--			}-->
<!--		}-->
<!--	}-->
<!--}-->
<!--.active {-->
<!--	&::v-deep .c-button {-->
<!--		color: $gray900;-->
<!--		font-weight: $medium;-->
<!--	}-->
<!--	&:after {-->
<!--		content: '';-->
<!--		display: flex;-->
<!--		position: absolute;-->
<!--		width: 100%;-->
<!--		height: 2px;-->
<!--		background-color: $gray700;-->
<!--		left: 0;-->
<!--		bottom: -1px;-->
<!--	}-->
<!--}-->

<!--.with-header {-->
<!--	::v-deep {-->
<!--		.c-tabs&#45;&#45;menu-button .c-button {-->
<!--			height: 44px !important;-->
<!--		}-->
<!--	}-->
<!--}-->
<!--/*&&#45;&#45;blur-left {*/-->
<!--/*	background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);*/-->
<!--/*}*/-->
<!--/*&&#45;&#45;blur-right {*/-->
<!--/*	background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);*/-->
<!--/*}*/-->
<!--</style>-->
