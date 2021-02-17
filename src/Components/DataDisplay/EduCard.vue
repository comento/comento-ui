<template>
	<article class="c-application c-edu-card">
		<div class="c-edu-card--info-container">
			<div class="c-edu-card--subtitle mb-4">
				<Typography type="caption1" color="gray800" :font-weight="700">
					{{ category }}
				</Typography>
			</div>
			<div class="c-edu-card--title mb-8">
				<Typography type="body1" color="gray900">{{ title }}</Typography>
			</div>
			<div>
				<Typography type="caption1" element="span" color="gray500">
					{{ captionLeft }}
				</Typography>
				<Typography
					v-if="captionRight"
					type="caption1"
					class="c-edu-card--divider"
					element="span"
					color="gray500"
				>
					|
				</Typography>
				<Typography type="caption1" element="span" color="gray500"> {{ captionRight }}</Typography>
			</div>
		</div>
		<div class="c-edu-card--image-container">
			<img class="c-edu-card--image" :src="backgroundImage" alt="" />
		</div>
	</article>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';

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
		Typography,
	},
};
</script>

<style lang="scss" scoped>
.c-edu-card {
	padding: 90px 0 12px 0;
	background-color: $white;
	@include pc {
		padding: 128px 0 12px 0;
	}
	border-radius: 4px;
	width: 100%;
	position: relative;
	z-index: 1;
	cursor: pointer;

	&--title {
		height: 48px;
	}
	&--divider {
		margin: 0 8px;
	}
	&--info-container {
		margin-top: 12px;
		width: 100%;
	}
	&--image {
		border: none;
		width: 100%;
		opacity: 0.7;
		height: 100%;
		&-container {
			border: none;
			border-top-right-radius: 4px;
			border-bottom-right-radius: 4px;
			position: absolute;
			top: 0;
			right: 0;
			z-index: -1;
			overflow: hidden;
			width: 100%;
			height: 90px;
			@include pc {
				height: 128px;
			}
		}
	}
}
</style>
