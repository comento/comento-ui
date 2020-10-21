<template>
	<article class="edu_card">
		<div class="camp_info_wrapper">
			<div class="edu_card_subtitle mb-4">
				<Typography type="caption1" color="gray900" font-weight="700">
					{{ category }}
				</Typography>
			</div>
			<div class="edu_card_title mb-8">
				<Typography type="body1" color="gray900">{{ title }}</Typography>
			</div>
			<div>
				<Typography type="caption1" element="span" color="gray500">
					{{ captionLeft }}
				</Typography>
				<Typography type="caption1" class="edu_card_divider" element="span" color="gray500"> | </Typography>
				<Typography type="caption1" element="span" color="gray500"> {{ captionRight }}</Typography>
			</div>
		</div>
		<div class="edu_card_img_container" :class="backgroundDirection">
			<img class="edu_card_img" :class="backgroundDirection" :src="backgroundImage" alt="" />
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
			default: 'https://cdn.comento.kr/edu/title_OUZVTI7e2c.jpg',
		},
		backgroundDirection: {
			type: String,
			// horizontal, vertical
			default: 'vertical',
			validator(value) {
				// 값이 항상 아래 중 하나여야 합니다.
				return ['horizontal', 'vertical'].indexOf(value) !== -1;
			},
		},
		category: {
			type: String,
			default: 'category',
		},
		title: {
			type: String,
			default: 'title',
		},
		captionLeft: {
			type: String,
			default: 'caption1',
		},
		captionRight: {
			type: String,
			default: 'caption2',
		},
	},
	components: {
		Typography,
	},
};
</script>

<style lang="scss" scoped>
.edu_card {
	padding: 102px 0 12px 0;
	@include pc {
		padding: 140px 0 12px 0;
	}
	border-radius: 4px;
	width: 100%;
	position: relative;
	z-index: 1;
	cursor: pointer;

	&_title {
		height: 48px;
	}
	&_divider {
		margin: 0 8px;
	}
}

.camp_info_wrapper {
	width: 100%;
}

.edu_card_img_container {
	border: none;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	position: absolute;
	top: 0;
	right: 0;
	z-index: -1;
	overflow: hidden;
	.edu_card_img {
		border: none;
		&.horizontal {
			height: 100%;
			min-width: 100%;
			border-left: 1px solid white;
		}
		&.vertical {
			width: 100%;
			opacity: 0.7;
			height: 100%;
		}
	}
	&.horizontal {
		width: 198px;
		height: 100%;
	}
	&.vertical {
		width: 100%;
		height: 90px;
		@include pc {
			height: 128px;
		}
	}
}
</style>
