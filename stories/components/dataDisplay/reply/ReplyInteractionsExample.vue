<template>
	<div class="flex flex-row align-center">
		<RatingButton icon-name="IconLikeSmallLine" text="좋아요 0" color="info" />
		<Divider vertical color="gray200" class="mx-12" style="height: 12px" />
		<RatingButton text="답글 달기" color="info" />
	</div>
</template>

<script>
import RatingButton from '@/components/button/RatingButton.vue';
import Divider from '@/components/divider/Divider.vue';

export default {
	name: 'ReplyInteractionsExample',
	components: { Divider, RatingButton },
};
</script>

<style scoped lang="scss"></style>
