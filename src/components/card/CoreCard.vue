<template>
	<article class="c-application c-core-card">
		<Box :paddings="[18, 20, 16, 20]" :has-border="!isMobile" border-color="gray200">
			<div class="c-core-card--content-wrapper">
				<slot name="chips" />
				<Content type="overline">
					<Typography element="span" v-html="overlineLeft" />
					· <Typography element="span" v-html="overlineRight" />
				</Content>
				<Content type="title" v-html="title" />
				<Content type="body" v-html="body" />
				<RatingGroup>
					<IconRating icon-name="IconCommentSmallLine" color="primary" :text="computedRepliesCount" />
					<IconRating icon-name="IconLikeSmallLine" color="accent" :text="computedLikeCount" />
				</RatingGroup>
			</div>

			<template v-if="$slots['replies'] && showRepliesCount > 0">
				<Divider type="dash" color="gray200" />

				<div class="c-card--replies-wrapper">
					<slot name="replies" />

					<NarrowButton color="blue400" size="medium">
						+ <template v-if="isShowHiddenRepliesCount">{{ hiddenRepliesCount }}개 답변 </template>더보기
					</NarrowButton>
				</div>
			</template>
		</Box>
	</article>
</template>

<script>
import Box from '@/components/box/Box.vue';
import Divider from '@/components/divider/Divider.vue';
import NarrowButton from '@/components/button/NarrowButton';
import Content from '@/components/content/Content';
import RatingGroup from '@/components/rating/RatingGroup';
import IconRating from '@/components/rating/IconRating';
import Typography from '@/components/typography/Typography';

/**
 * 멘토링 카드
 * @displayName c-core-card
 */
export default {
	name: 'CoreCard',
	props: {
		overlineLeft: {
			type: String,
		},
		overlineRight: {
			type: String,
		},
		title: {
			type: String,
		},
		body: {
			title: String,
		},
		repliesCount: {
			type: Number,
			default: 0,
		},
		showRepliesCount: {
			type: Number,
			default: 2,
		},
		likeCount: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		isShowHiddenRepliesCount() {
			return this.showRepliesCount > 0 && this.repliesCount - this.showRepliesCount > 0;
		},
		hiddenRepliesCount() {
			return this.repliesCount - this.showRepliesCount;
		},
		computedRepliesCount() {
			return this.handleCheckNegativeNumber(this.repliesCount);
		},
		computedLikeCount() {
			return this.handleCheckNegativeNumber(this.likeCount);
		},
	},
	methods: {
		handleCheckNegativeNumber(value) {
			return value < 0 ? 0 : value;
		},
	},
	components: {
		IconRating,
		RatingGroup,
		NarrowButton,
		Divider,
		Box,
		Content,
		Typography,
	},
};
</script>

<style lang="scss" scoped>
.c-core-card {
	background: white;
	cursor: pointer;

	.c-box {
		@include border-radius(10px);
	}

	&--content-wrapper {
		::v-deep.c-content--body {
			@include ellipsis(4, normal);
			@include pc {
				@include ellipsis(3, normal);
			}
		}

		.c-icon-rating {
			::v-deep.c-icon {
				cursor: pointer;
			}
		}
	}

	.c-divider {
		margin: 16px 0;
	}

	.c-narrow-button {
		margin: 0 auto;
	}
}
</style>
