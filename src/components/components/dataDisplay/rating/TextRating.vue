<template>
	<TextRatingWrapper :size="size" class="c-application c-text-rating">
		<div :class="{ 'mr-4': $slots['text-right'] }">
			<slot name="text-left" />
		</div>
		<Typography color="gray850">
			<slot name="text-right" />
		</Typography>
	</TextRatingWrapper>
</template>

<script>
import TextRatingWrapper from '@/components/components/dataDisplay/rating/TextRatingWrapper';
import Typography from '@/components/elements/core/typography/Typography';
export const TextRatingSizes = ['default', 'small'];

/**
 * @displayName c-text-rating
 */
export default {
	name: 'TextRating',
	props: {
		size: {
			type: String,
			validator(value) {
				return TextRatingSizes.includes(value);
			},
			default: 'default',
		},
	},
	components: {
		Typography,
		TextRatingWrapper,
	},
};
</script>

<style lang="scss" scoped>
.c-text-rating {
	@include flexbox();
	@include align-items(center);
}
</style>
