<template>
	<div class="c-application c-rating-group">
		<slot />
	</div>
</template>

<script>
/**
 * @displayName c-rating-group
 */
export default {
	name: 'RatingGroup',
};
</script>

<style lang="scss" scoped>
.c-rating-group {
	@include flexbox();
	@include flex-direction(row);
}

.c-icon-rating,
.c-text-rating {
	margin-right: 12px;
	&:last-child {
		margin-right: 0;
	}
}
</style>
