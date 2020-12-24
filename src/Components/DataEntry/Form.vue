<template>
	<form class="c-application c-form" v-bind="$attrs" v-on="$listeners">
		<slot />
	</form>
</template>

<script>
export default {
	name: 'Form',
};
</script>

<style scoped lang="scss">
.c-form {
	&::v-deep .c-application {
		&:first-child {
			margin-top: 0;
		}
		margin-top: 12px;
	}
}
</style>
