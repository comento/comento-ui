<template>
	<div class="c-application c-form-group" v-bind="$attrs" v-on="$listeners">
		<slot />
	</div>
</template>

<script>
/**
 * @displayName c-form-group
 */
export default {
	name: 'FormGroup',
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
