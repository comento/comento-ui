<template>
	<div class="c-application c-rating-group">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'RatingGroup',
};
</script>

<style lang="scss" scoped>
.c-rating {
	&-group {
		@include flexbox();
		@include flex-direction(row);
	}

	margin-right: 6px;
	&:last-child {
		margin-right: 0;
	}
}
</style>
