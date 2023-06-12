<template>
	<CTypography :type="computedTypoType" :color="computedTypoColor" :font-weight="400">
		<slot />
	</CTypography>
</template>

<script>
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent, computed, toRefs } from 'vue';

export default defineComponent({
	name: 'CTextRatingWrapper',
	props: {
		size: {
			type: String,
			default: 'default',
		},
	},
	setup(props) {
		const { size } = toRefs(props);
		const computedTypoType = computed(() => ({ default: 'body2', small: 'caption1' }[size]));
		const computedTypoColor = computed(
			() =>
				({
					default: 'gray700',
					small: 'gray500',
				}[size]),
		);

		return {
			computedTypoType,
			computedTypoColor,
		};
	},
	components: { CTypography },
});
</script>
