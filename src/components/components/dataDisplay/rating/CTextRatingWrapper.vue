<template>
	<CTypography :type="computedTypoType" :color="computedTypoColor" :font-weight="400">
		<slot />
	</CTypography>
</template>

<script>
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CTextRatingWrapper',
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
	components: { CTypography },
});
</script>
