<template>
	<div class="c-application c-list_item_container" tabindex="0" v-on="$listeners">
		<slot name="content">
			<Typography type="body2" :color="color"> </Typography>
		</slot>
	</div>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'ListItem',
	props: {
		value: {
			type: [String, Number],
			default: '',
		},
		color: {
			type: String,
		},
	},
	components: { Typography },
};
</script>

<style lang="scss" scoped>
/*@import '@/assets/style/base/main';*/

.c-list_item_container {
	padding: 12px 4px;
	cursor: pointer;

	&:hover,
	&:focus {
		background: $gray100;
	}

	> div {
		@include ellipsis();
	}
}
</style>
