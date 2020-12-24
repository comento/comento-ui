<template>
	<form class="c-application c-form" v-bind="$attrs" v-on="$listeners">
		<slot />
	</form>
</template>

<script>
export default {
	name: 'Form',
	props: {},
	data() {},
	computed: {},
};
</script>

<style scoped lang="scss">
.c-form {
	&::v-deep .c-application {
		margin-top: 12px;
	}
}
</style>
