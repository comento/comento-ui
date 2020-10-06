<template>
	<div class="c-application c-dropdown_container">
		<slot></slot>
		<div v-if="$slots['content']" class="c-dropdown_wrapper">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Dropdown',
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

.c-dropdown_container {
	position: relative;

	.c-dropdown_wrapper {
		position: absolute;
		width: 100%;
		padding: 8px 12px;
		background: $white;
		@include shadow4();
	}
}
</style>
