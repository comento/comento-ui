<template>
	<div class="c-application c-input-group">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'CInputGroup',
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
