<template>
	<article class="c-application c-core-card">
		<Box :paddings="[18, 20, 16, 20]" :has-border="!isMobile" border-color="gray200">
			<div class="c-core-card--content-wrapper">
				<Content type="overline">
					<Typography element="span" v-html="overlineLeft" />
					· <Typography element="span" v-html="overlineRight" />
				</Content>
				<Content type="title" v-html="title" />
				<Content type="body" v-html="body" />
				<RatingGroup>
					<Rating
						icon-name="IconCommentMediumLine"
						icon-color="primary"
						:text="repliesCount"
						text-color="primary"
					/>
					<Rating icon-name="IconLikeMediumLine" icon-color="red400" :text="likeCount" text-color="red600" />
				</RatingGroup>
			</div>

			<template v-if="$slots['replies']">
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
import Box from '@/src/Components/DataDisplay/Box';
import Divider from '@/src/Elements/Utility/Divider';
import NarrowButton from '@/src/Components/Button/NarrowButton';
import Content from '@/src/Components/DataDisplay/Content/Content';
import RatingGroup from '@/src/Components/DataEntry/Rating/RatingGroup';
import Rating from '@/src/Components/DataEntry/Rating/Rating';
import Typography from '@/src/Elements/Core/Typography/Typography';

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
		},
		hiddenRepliesCount: {
			type: Number,
		},
		likeCount: {
			type: Number,
		},
	},
	computed: {
		isShowHiddenRepliesCount() {
			return this.hiddenRepliesCount && this.hiddenRepliesCount > 0;
		},
	},
	components: {
		Rating,
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
		@include border-radius(4px);
	}

	&--content-wrapper {
		::v-deep.c-content--body {
			@include ellipsis(4, normal);
			@include pc {
				@include ellipsis(3, normal);
			}
		}

		.c-rating {
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
