<template>
	<CTypography type="caption1" color="gray400">
		<slot />
	</CTypography>
</template>

<script>
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CUserInformationCaption',
	components: { CTypography },
});
</script>

<style scoped></style>
