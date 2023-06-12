<template>
	<article class="c-application c-promotion-edu-card" v-bind="$attrs" :style="computedStyle">
		<div class="c-promotion-edu-card--image-container">
			<div v-if="$slots['additional-button']" class="c-promotion-edu-card--additional-button">
				<slot name="additional-button" />
			</div>
			<img class="c-promotion-edu-card--image" :src="backgroundImage" alt />
		</div>
		<div class="c-promotion-edu-card--info-container">
			<div class="c-promotion-edu-card--subtitle">
				<div class="c-promotion-edu-card--subtitle-category">
					<CTypography
						:type="isMobile ? 'caption1' : 'body2'"
						color="white"
						:font-weight="400"
						element="span"
					>
						{{ category }}
					</CTypography>
				</div>
			</div>
			<div class="c-promotion-edu-card--title">
				<CTypography
					:type="isMobile ? 'body2' : 'headline7'"
					color="gray900"
					:font-weight="isMobile ? 600 : 400"
				>
					<slot name="title" />
				</CTypography>
			</div>
			<div class="c-promotion-edu-card--caption mt-12">
				<template v-if="!$slots['alternative-caption']">
					<div class="c-promotion-edu-card--caption-side c-promotion-edu-card--caption-left">
						<CIcon
							:name="isMobile ? 'IconStarXSmallFill' : 'IconStarSmallFill'"
							color="yellow600"
							element="span"
							class="mr-2"
						/>
						<CTypography
							:type="isMobile ? 'caption2' : 'caption1'"
							color="gray700"
							:font-weight="400"
							element="span"
						>
							{{ scoreAverage.toFixed(1) }}
						</CTypography>
						<CTypography type="caption2" color="gray700" :font-weight="300" class="ml-2">
							({{ reviewCount }})
						</CTypography>
					</div>
					<CDivider class="c-promotion-edu-card--divider mx-8" vertical color="gray300" />
					<div class="c-promotion-edu-card--caption-side c-promotion-edu-card--caption-right">
						<CTypography
							:type="isMobile ? 'caption2' : 'caption1'"
							color="blue600"
							:font-weight="400"
							element="span"
						>
							{{ applicantCount }}
						</CTypography>
						<CTypography :type="isMobile ? 'caption2' : 'caption1'" color="gray700" :font-weight="400">
							<template v-if="isMobile"> 명 수강! </template>
							<template v-else> 명이 수강했어요 </template>
						</CTypography>
					</div>
				</template>
				<slot v-else name="alternative-caption" />
			</div>
		</div>
	</article>
</template>

<script>
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import CDivider from '@/components/elements/utility/CDivider.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import { defineComponent, computed, toRefs } from 'vue';
import useWindowResize from '@/services/useWindowResize';

/**
 * 직무부트캠프 프로모션용 카드
 */
export default defineComponent({
	name: 'CPromotionEduCard',
	props: {
		backgroundImage: {
			type: String,
		},
		category: {
			type: String,
		},
		scoreAverage: {
			type: Number,
			default: 0,
		},
		reviewCount: {
			type: Number,
			default: 0,
		},
		applicantCount: {
			type: Number,
			default: 0,
		},
		dominantColor: {
			type: Object,
		},
	},
	setup(props) {
		const { dominantColor, imageHeight } = toRefs(props);
		const { isMobile } = useWindowResize();
		const computedImageHeight = computed(() => {
			if (imageHeight.value !== '') return imageHeight;
			return isMobile ? '144px' : '136px';
		});
		const computedDominantColor = computed(
			() => `${dominantColor.value.red}, ${dominantColor.value.green}, ${dominantColor.value.blue}`,
		);
		const computedStyle = computed(() => {
			return {
				'--card-width': this.width,
				'--image-height': computedImageHeight,
				'--dominant-color': computedDominantColor,
			};
		});
		return { isMobile, computedStyle };
	},
	components: {
		CDivider,
		CTypography,
		CIcon,
	},
});
</script>

<style lang="scss" scoped>
$backgroundColorAlpha: 0.04;

.c-promotion-edu-card {
	padding: 0 10px 10px;
	overflow: hidden;
	@include border-radius(10px);
	isolation: isolate;
	background-color: rgba(var(--dominant-color), $backgroundColorAlpha);
	width: var(--card-width);
	max-width: 152px;
	cursor: pointer;

	&--image {
		border: none;
		width: 100%;
		height: 100%;
		@include opacity(0.9);
		animation: scale-down-center 0.2s ease-in both;
		&-container {
			position: relative;
			overflow: hidden;
			@include border-radius(114px);
			isolation: isolate;
			margin: -28px 0 -27px;
			width: 250px;
			height: 134px;
			border: none;
		}
	}

	&--additional-button {
		position: absolute;
		z-index: 1;
		top: 12px;
		right: 12px;
	}

	&--info-container {
		position: relative;
		width: 100%;
	}

	&--title {
		margin-top: 10px;
		height: 60px;
		@include ellipsis(3);
	}

	&--subtitle {
		margin-left: -10px;
		z-index: 1;
		&-category {
			@include inline-flex();
			@include align-items(center);
			height: 28px;

			color: white;
			background-color: rgb(var(--dominant-color));
			padding: 0 12px 0 10px;
			border-radius: 0px 30px 30px 0;
			min-width: 54px;
		}
	}

	&--caption {
		@include flexbox();
		@include align-items(center);

		&-side {
			@include flexbox();
			@include align-items(center);
		}
	}

	&--divider {
		height: 10px !important;
	}

	@keyframes scale-up-center {
		0% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
		100% {
			-webkit-transform: scale(1.07);
			transform: scale(1.07);
		}
	}

	@keyframes scale-down-center {
		0% {
			-webkit-transform: scale(1.07);
			transform: scale(1.07);
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}

	@include pc {
		padding: 0 16px 16px;
		max-width: 259px;

		&--image {
			border: none;
			width: 100%;
			height: 100%;
			@include opacity(0.9);
			animation: scale-down-center 0.2s ease-in both;
			&-container {
				margin: -40px 0 -28px;
				width: 406px;
				height: 224px;
				position: relative;
				border: none;
				@include border-radius(114px);
				overflow: hidden;
			}
		}

		&--title {
			margin-top: 16px;
			height: 75px;
		}

		&--subtitle {
			margin-left: -16px;
			&-category {
				height: 38px;
				padding: 0 14px 0 16px;
				min-width: 74px;
			}
		}

		&:hover {
			& .c-promotion-edu-card--image {
				animation: scale-up-center 0.2s ease-in both;
			}
		}
	}
}
</style>
