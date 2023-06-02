<template>
	<CTextRatingWrapper :size="size" class="c-application c-text-rating">
		<div :class="{ 'mr-4': $slots['text-right'] }">
			<slot name="text-left" />
		</div>
		<div>
			<slot name="text-right" />
		</div>
	</CTextRatingWrapper>
</template>

<script>
import CTextRatingWrapper from '@/components/components/dataDisplay/rating/CTextRatingWrapper.vue';
import { defineComponent } from 'vue';
export const TextRatingSizes = ['default', 'small'];

export default defineComponent({
	name: 'CTextRating',
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
		CTextRatingWrapper,
	},
});
</script>

<style lang="scss" scoped>
.c-text-rating {
	@include flexbox();
	@include align-items(center);
}
</style>
