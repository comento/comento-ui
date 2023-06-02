<template>
	<article class="c-application c-edu-card" v-bind="$attrs" :style="computedStyle">
		<div class="c-edu-card--image-container">
			<div v-if="$slots['chip']" class="c-edu-card--chip-container">
				<slot name="chip" />
			</div>
			<div v-if="$slots['additional-button']" class="c-edu-card--additional-button">
				<slot name="additional-button" />
			</div>
			<img class="c-edu-card--image" :src="backgroundImage" :alt="alt" :loading="imageLoading" />
		</div>
		<div class="c-edu-card--info-container">
			<div class="c-edu-card--subtitle">
				<CTypography type="caption1" color="gray800" :font-weight="400">
					{{ category }}
				</CTypography>
				<CTypography v-if="additionalSubtitle" type="caption1" color="gray300" class="mx-4"> ∙ </CTypography>
				<CTypography v-if="additionalSubtitle" type="caption1" color="secondary">
					{{ additionalSubtitle }}
				</CTypography>
			</div>
			<div class="c-edu-card--title mt-4">
				<CTypography :type="getTypography('title')" color="gray900" :font-weight="500">
					<slot name="title" />
				</CTypography>
			</div>
			<div class="c-edu-card--caption mt-8">
				<CTypography :type="getTypography('caption')" element="span" color="gray400">
					{{ captionLeft }}
				</CTypography>
				<CDivider v-show="captionRight" vertical color="gray200" class="mx-8" />
				<CTypography :type="getTypography('caption')" element="span" color="gray400">
					{{ captionRight }}
				</CTypography>
				<slot name="additional-captions" />
			</div>
		</div>
	</article>
</template>

<script>
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import CDivider from '@/components/elements/utility/CDivider.vue';
import { defineComponent } from 'vue';
import useWindowResize from '@/services/useWindowResize';

/**
 * 직무부트캠프 카드
 */
export default defineComponent({
	name: 'CEduCard',
	props: {
		backgroundImage: {
			type: String,
		},
		backgroundColor: {
			type: String,
			default: 'white',
		},
		category: {
			type: String,
		},
		title: {
			type: String,
		},
		captionLeft: {
			type: String,
		},
		captionRight: {
			type: String,
		},
		width: {
			type: String,
			default: '100%',
		},
		imageHeight: {
			type: String,
			default: '',
		},
		additionalSubtitle: {
			type: String,
			default: '',
		},
		emphasized: {
			type: Boolean,
			default: false,
		},
		withSwiper: {
			type: Boolean,
			default: false,
		},
		imageLoading: {
			type: String,
			default: 'eager',
		},
		alt: {
			type: String,
			default: '',
		},
	},
	setup() {
		const { isMobile } = useWindowResize();
		return { isMobile };
	},
	computed: {
		computedStyle() {
			return {
				'--card-width': this.computedWidth,
				'--image-height': this.computedImageHeight,
				'--background-color': this.backgroundColor,
				'--title-height': this.computedTitleHeight,
				'--border-radius': this.computedBorderRadius,
			};
		},
		computedWidth() {
			return this.isMobileWithSwiper ? '152px' : this.width;
		},
		computedImageHeight() {
			if (this.imageHeight) return this.imageHeight;
			if (this.emphasized) return this.isMobile ? '180px' : '300px';
			if (this.isMobileWithSwiper) return '100px';

			return this.isMobile ? '144px' : '136px';
		},
		computedTitleHeight() {
			return this.isMobileWithSwiper ? '40px' : '50px';
		},
		isMobileWithSwiper() {
			return this.isMobile && this.withSwiper;
		},
		computedTypographyForMobileWithSwiper() {
			return {
				title: ['body1', 'body2'],
				caption: ['caption1', 'caption2'],
			};
		},
		computedBorderRadius() {
			return this.isMobileWithSwiper ? '8px' : '10px';
		},
	},
	methods: {
		getTypography(type) {
			return this.computedTypographyForMobileWithSwiper[type][Number(this.isMobileWithSwiper)];
		},
	},
	components: {
		CDivider,
		CTypography,
	},
});
</script>

<style lang="scss" scoped>
.c-edu-card {
	padding-bottom: 12px;
	background-color: var(--background-color);
	@include border-radius(4px);
	width: var(--card-width);
	min-width: 152px;
	cursor: pointer;

	&--image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		animation: scale-down-center 0.2s ease-in both;
		&-container {
			position: relative;
			isolation: isolate;
			@include border-radius(var(--border-radius));
			overflow: hidden;
			width: 100%;
			height: var(--image-height);
		}
	}

	&--chip-container {
		position: absolute;
		z-index: 1;
		top: 8px;
		left: 8px;
	}

	&--additional-button {
		position: absolute;
		z-index: 1;
		top: 8px;
		right: 8px;
	}

	&--info-container {
		margin-top: 12px;
		width: 100%;
	}

	&--subtitle {
		@include flexbox();
		@include align-items(center);
	}

	&--title {
		height: var(--title-height);
		@include ellipsis(2);
	}

	&--caption {
		@include flexbox();
		@include align-items(center);
	}

	.c-divider {
		height: 10px;
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
		&:hover {
			& .c-edu-card--image {
				animation: scale-up-center 0.2s ease-in both;
			}
		}
	}
}
</style>
