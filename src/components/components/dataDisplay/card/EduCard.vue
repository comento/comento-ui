<template>
	<article class="c-application c-edu-card" v-bind="$attrs" :style="computedStyle" v-on="$listeners">
		<div class="c-edu-card--image-container">
			<div v-if="$slots['chip']" class="c-edu-card--chip-container">
				<slot name="chip" />
			</div>
			<div v-if="$slots['additionalButton']" class="c-edu-card--additional-button">
				<slot name="additionalButton" />
			</div>
			<img class="c-edu-card--image" :src="backgroundImage" alt />
		</div>
		<div class="c-edu-card--info-container">
			<div class="c-edu-card--subtitle">
				<Typography type="caption1" color="gray800" :font-weight="400">
					{{ category }}
				</Typography>
				<Typography v-if="additionalSubtitle" type="caption1" color="gray300" class="mx-4"> ∙ </Typography>
				<Typography v-if="additionalSubtitle" type="caption1" color="secondary">
					{{ additionalSubtitle }}
				</Typography>
			</div>
			<div class="c-edu-card--title mt-4">
				<Typography type="body1" color="gray900" :font-weight="400">
					<slot name="title" />
				</Typography>
			</div>
			<div class="c-edu-card--caption mt-8">
				<Typography type="caption1" element="span" color="gray400">
					{{ captionLeft }}
				</Typography>
				<Divider v-show="captionRight" vertical color="gray200" class="mx-8" />
				<Typography type="caption1" element="span" color="gray400"> {{ captionRight }}</Typography>
				<slot name="additionalCaptions" />
			</div>
		</div>
	</article>
</template>

<script>
import Typography from '@/components/elements/core/typography/Typography';
import Divider from '@/components/elements/utility/Divider';
import windowMixin from '@/mixins/windowMixin';

/**
 * 직무부트캠프 카드
 * @displayName c-edu-card
 */
export default {
	name: 'EduCard',
	mixins: [windowMixin],
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
	},
	computed: {
		computedStyle() {
			return {
				'--card-width': this.width,
				'--image-height': this.computedImageHeight,
				'--background-color': this.backgroundColor,
			};
		},
		computedImageHeight() {
			if (this.imageHeight) return this.imageHeight;
			if (this.emphasized) return '300px';

			return this.isMobile ? '144px' : '136px';
		},
	},
	components: {
		Divider,
		Typography,
	},
};
</script>

<style lang="scss" scoped>
.c-edu-card {
	padding-bottom: 12px;
	background-color: var(--background-color);
	@include border-radius(4px);
	width: var(--card-width);
	max-width: 343px;
	cursor: pointer;

	&--image {
		position: absolute;
		left: 50%;
		@include transform(translateX(-50%));
		border: none;
		max-width: none;
		height: 100%;
		@include opacity(0.9);
		animation: scale-down-center 0.2s ease-in both;
		&-container {
			position: relative;
			@include flexbox();
			border: none;
			@include border-radius(4px);
			overflow: hidden;
			width: 100%;
			height: var(--image-height);
		}
	}

	&--chip-container {
		position: absolute;
		z-index: 1;
		top: 8px;
		left: 10px;
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
		height: 50px;
		@include ellipsis(2);
	}

	&--caption {
		@include flexbox();
	}

	@keyframes scale-up-center {
		0% {
			-webkit-transform: translateX(-50%) scale(1);
			transform: translateX(-50%) scale(1);
		}
		100% {
			-webkit-transform: translateX(-50%) scale(1.07);
			transform: translateX(-50%) scale(1.07);
		}
	}

	@keyframes scale-down-center {
		0% {
			-webkit-transform: translateX(-50%) scale(1.07);
			transform: translateX(-50%) scale(1.07);
		}
		100% {
			-webkit-transform: translateX(-50%) scale(1);
			transform: translateX(-50%) scale(1);
		}
	}

	@include pc {
		max-width: 259px;

		&:hover {
			& .c-edu-card--image {
				animation: scale-up-center 0.2s ease-in both;
			}
		}
	}
}
</style>
