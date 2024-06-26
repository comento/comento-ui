<template>
	<div class="c-application c-input-group">
		<slot />
	</div>
</template>

<script>
/**
 * @displayName c-input-group
 */
export default {
	name: 'InputGroup',
};
</script>

<style lang="scss" scoped>
.c-input-group {
	@include flexbox();

	> :first-child {
		flex: 1;
	}

	.c-button {
		margin-left: 4px;
		height: 40px;
	}
}
</style>
