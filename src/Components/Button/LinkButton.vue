<template>
	<a class="c-link-button" v-bind="$attrs" :href="to" v-on="$listeners">
		<Typography :type="type" :color="color">
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
		type: {
			type: String,
			default: 'body1',
		},
		to: {
			type: String,
			default: 'javascript:void();',
		},
		color: {
			type: String,
			default: 'blue600',
			validator(value) {
				return ['blue600', 'blue400'].indexOf(value) !== -1;
			},
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
