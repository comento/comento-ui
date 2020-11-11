<template>
	<a class="c-link-button" v-bind="$attrs" :href="to" v-on="$listeners">
		<Typography :type="type" color="success">
			<slot />
		</Typography>
	</a>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'LinkButton',
	inheritAttrs: false,
	props: {
		type: String,
		to: {
			type: String,
			default: '#none',
		},
	},
	components: { Typography },
};
</script>

<style lang="scss" scoped>
.c-link-button {
	text-decoration: none;

	&:hover,
	&:focus {
		text-decoration: underline;
		text-decoration-color: $blue600;
	}
}
</style>
