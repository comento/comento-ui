<template>
	<div class="c-application c-form-group" v-bind="$attrs" v-on="$listeners">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'CFormGroup',
};
</script>

<style scoped lang="scss">
.c-form-group {
	&::v-deep > * {
		&:not(:last-child) {
			margin-bottom: 12px;
		}
	}
}
</style>
