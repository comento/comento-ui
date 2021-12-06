<template>
	<article class="c-application c-core-card">
		<CBox :paddings="[18, 20, 16, 20]" :has-border="!isMobile" border-color="gray200">
			<div class="c-core-card--content-wrapper">
				<slot name="chips" />
				<CContent type="overline">
					<CTypography element="span" v-html="overlineLeft" />
					· <CTypography element="span" v-html="overlineRight" />
				</CContent>
				<CContent type="title" v-html="title" />
				<CContent type="body" v-html="body" />
				<CRatingGroup>
					<CRating
						icon-name="IconCommentMediumLine"
						icon-color="primary"
						:text="computedRepliesCount"
						text-color="primary"
					/>
					<CRating
						icon-name="IconLikeMediumLine"
						icon-color="red400"
						:text="computedLikeCount"
						text-color="red600"
					/>
				</CRatingGroup>
			</div>

			<template v-if="$slots['replies'] && showRepliesCount > 0">
				<CDivider type="dash" color="gray200" />

				<div class="c-card--replies-wrapper">
					<slot name="replies" />

					<CNarrowButton color="blue400" size="medium">
						+ <template v-if="isShowHiddenRepliesCount">{{ hiddenRepliesCount }}개 답변 </template>더보기
					</CNarrowButton>
				</div>
			</template>
		</CBox>
	</article>
</template>

<script>
import CBox from '@/components/components/general/CBox';
import CDivider from '@/components/elements/utility/CDivider';
import CNarrowButton from '@/components/components/general/button/CNarrowButton';
import CContent from '@/components/components/dataDisplay/content/CContent';
import CRatingGroup from '@/components/components/dataEntry/rating/CRatingGroup';
import CRating from '@/components/components/dataEntry/rating/CRating';
import CTypography from '@/components/elements/core/typography/CTypography';

/**
 * 멘토링 카드
 */
export default {
	name: 'CCoreCard',
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
		CRating,
		CRatingGroup,
		CNarrowButton,
		CDivider,
		CBox,
		CContent,
		CTypography,
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
