<template>
	<div class="c-application c-dropdown--container">
		<slot />
		<div v-if="$slots['content']" class="c-dropdown--wrapper">
			<slot name="content" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Dropdown',
};
</script>

<style lang="scss" scoped>
.c-dropdown {
	&--container {
		position: relative;
		height: 40px;
	}

	&--wrapper {
		position: absolute;
		width: 100%;
		padding: 8px 16px;
		background: $white;
		@include shadow4();
		overflow-y: auto;
		box-sizing: border-box;
	}
}
</style>
