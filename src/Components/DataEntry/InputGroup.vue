<template>
	<div class="c-input-group">
		<slot />
	</div>
</template>

<script>
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
		height: 40px;
	}
}
</style>
