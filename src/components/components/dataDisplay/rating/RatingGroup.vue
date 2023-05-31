<template>
	<div class="c-application c-rating-group">
		<slot />
	</div>
</template>

<script>
import { defineComponent } from 'vue';

/**
 * @displayName c-rating-group
 */
export default defineComponent({
	name: 'RatingGroup',
});
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
