<template>
	<div class="c-application c-rating-group">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'CRatingGroup',
};
</script>

<style lang="scss" scoped>
.c-rating {
	&-group {
		@include flexbox();
		@include flex-direction(row);
	}

	margin-right: 12px;
	&:last-child {
		margin-right: 0;
	}
}
</style>
