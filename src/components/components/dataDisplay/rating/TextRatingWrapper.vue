<template>
	<Typography :type="computedTypoType" :color="computedTypoColor" :font-weight="400">
		<slot />
	</Typography>
</template>

<script>
import Typography from '@/components/elements/core/typography/Typography.vue';

export default {
	name: 'TextRatingWrapper',
	props: {
		size: {
			type: String,
			default: 'default',
		},
	},
	computed: {
		computedTypoType() {
			return {
				default: 'body2',
				small: 'caption1',
			}[this.size];
		},
		computedTypoColor() {
			return {
				default: 'gray700',
				small: 'gray500',
			}[this.size];
		},
	},
	components: { Typography },
};
</script>
