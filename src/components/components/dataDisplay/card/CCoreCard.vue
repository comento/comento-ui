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
					<CIconRating icon-name="IconCommentSmallLine" color="primary" :text="computedRepliesCount" />
					<CIconRating icon-name="IconLikeSmallLine" color="error" :text="computedLikeCount" />
				</CRatingGroup>
			</div>

			<template v-if="$slots['replies'] && showRepliesCount > 0">
				<CDivider type="dash" color="gray200" />

				<div class="c-card--replies-wrapper">
					<slot name="replies" />

					<CNarrowButton color="blue400" size="medium">
						+ <template v-if="isShowHiddenRepliesCount"> {{ hiddenRepliesCount }}개 답변 </template>더보기
					</CNarrowButton>
				</div>
			</template>
		</CBox>
	</article>
</template>

<script>
import CBox from '@/components/components/general/CBox.vue';
import CDivider from '@/components/elements/utility/CDivider.vue';
import CNarrowButton from '@/components/components/general/button/CNarrowButton.vue';
import CContent from '@/components/components/dataDisplay/content/CContent.vue';
import CRatingGroup from '@/components/components/dataDisplay/rating/CRatingGroup.vue';
import CIconRating from '@/components/components/dataDisplay/rating/CIconRating.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent, computed, toRefs } from 'vue';
import useWindowResize from '@/services/useWindowResize';

/**
 * 멘토링 카드
 */
export default defineComponent({
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
	setup(props) {
		const { repliesCount, showRepliesCount, likeCount } = toRefs(props);
		const { isMobile } = useWindowResize();
		const isShowHiddenRepliesCount = computed(
			() => showRepliesCount.value > 0 && repliesCount.value - showRepliesCount.value > 0,
		);
		const hiddenRepliesCount = computed(() => repliesCount.value - showRepliesCount.value);
		const handleCheckNegativeNumber = value => (value < 0 ? 0 : value);
		const computedRepliesCount = computed(() => handleCheckNegativeNumber(repliesCount));
		const computedLikeCount = computed(() => handleCheckNegativeNumber(likeCount));
		return { isMobile, isShowHiddenRepliesCount, hiddenRepliesCount, computedRepliesCount, computedLikeCount };
	},
	components: {
		CIconRating,
		CRatingGroup,
		CNarrowButton,
		CDivider,
		CBox,
		CContent,
		CTypography,
	},
});
</script>

<style lang="scss" scoped>
.c-core-card {
	background: white;
	cursor: pointer;

	.c-box {
		@include border-radius(10px);
	}

	&--content-wrapper {
		:deep(.c-content--body) {
			@include ellipsis(4, normal);
			@include pc {
				@include ellipsis(3, normal);
			}
		}

		.c-icon-rating {
			:deep(.c-icon) {
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
