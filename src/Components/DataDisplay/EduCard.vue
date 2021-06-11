<template>
	<article class="c-application c-edu-card" v-bind="$attrs" v-on="$listeners">
		<div class="c-edu-card--info-container">
			<div class="c-edu-card--subtitle mb-4">
				<Typography type="caption1" color="gray800" :font-weight="700">
					{{ category }}
				</Typography>
			</div>
			<div class="c-edu-card--title mb-8">
				<Typography type="body1" color="gray900">
					<slot name="title" />
				</Typography>
			</div>
			<div class="c-edu-card--caption">
				<Typography type="caption1" element="span" color="gray500">
					{{ captionLeft }}
				</Typography>
				<Divider v-show="captionRight" vertical class="mx-8" />
				<Typography type="caption1" element="span" color="gray500"> {{ captionRight }}</Typography>
			</div>
		</div>
		<div class="c-edu-card--image-container">
			<img class="c-edu-card--image" :src="backgroundImage" alt="" />
		</div>
		<div v-if="$slots['chip']" class="c-edu-card--chip-container">
			<slot name="chip" />
		</div>
	</article>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';
import Divider from '@/src/Elements/Utility/Divider';

export default {
	name: 'EduCard',
	props: {
		backgroundImage: {
			type: String,
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
	},
	components: {
		Divider,
		Typography,
	},
};
</script>

<style lang="scss" scoped>
$thumbnail-height-mobile: 120px;
$thumbnail-height-pc: 128px;

.c-edu-card {
	padding: $thumbnail-height-mobile 0 12px 0;
	background-color: $white;
	@include pc {
		padding: $thumbnail-height-pc 0 12px 0;
	}
	border-radius: 4px;
	width: 100%;
	position: relative;
	z-index: 1;
	cursor: pointer;

	&--title {
		height: 48px;
		@include ellipsis(2);
	}
	&--info-container {
		margin-top: 12px;
		width: 100%;
	}
	&--image {
		border: none;
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		@include transform(translate(-50%, -50%));
		@include opacity(0.9);
		animation: scale-down-center 0.2s ease-in both;
		&-container {
			border: none;
			@include border-radius(4px);
			position: absolute;
			top: 0;
			right: 0;
			z-index: -1;
			overflow: hidden;
			width: 100%;
			height: $thumbnail-height-mobile;
			@include pc {
				height: $thumbnail-height-pc;
			}
		}
	}
	&--chip-container {
		position: absolute;
		top: 8px;
		left: 10px;
	}

	&--caption {
		@include flexbox();
		@include flex-direction(row);
	}

	&:hover {
		.c-edu-card--image {
			animation: scale-up-center 0.2s ease-in both;
		}
	}

	@keyframes scale-up-center {
		0% {
			-webkit-transform: translate(-50%, -50%) scale(1);
			transform: translate(-50%, -50%) scale(1);
		}
		100% {
			-webkit-transform: translate(-50%, -50%) scale(1.07);
			transform: translate(-50%, -50%) scale(1.07);
		}
	}

	@keyframes scale-down-center {
		0% {
			-webkit-transform: translate(-50%, -50%) scale(1.07);
			transform: translate(-50%, -50%) scale(1.07);
		}
		100% {
			-webkit-transform: translate(-50%, -50%) scale(1);
			transform: translate(-50%, -50%) scale(1);
		}
	}
}
</style>
