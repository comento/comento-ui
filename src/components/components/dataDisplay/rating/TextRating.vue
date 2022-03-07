<template>
	<TextRatingText :size="size" class="c-application c-text-rating">
		<div :class="{ 'mr-4': $slots['text-right'] }">
			<slot name="text-left" />
		</div>
		<div>
			<slot name="text-right" />
		</div>
	</TextRatingText>
</template>

<script>
import TextRatingText from '@/components/components/dataDisplay/rating/TextRatingText';
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
		TextRatingText,
	},
};
</script>

<style lang="scss" scoped>
.c-text-rating {
	@include flexbox();
	@include align-items(center);
}
</style>
