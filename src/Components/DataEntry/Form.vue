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
	&::v-deep > * {
		&:not(:last-child) {
			margin-bottom: 12px;
		}
	}
}
</style>
