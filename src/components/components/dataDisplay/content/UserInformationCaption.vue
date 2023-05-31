<template>
	<Typography type="caption1" color="gray400">
		<slot />
	</Typography>
</template>

<script>
/**
 * @displayName c-user-information-caption
 */
import Typography from '@/components/elements/core/typography/Typography.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'UserInformationCaption',
	components: { Typography },
});
</script>

<style scoped></style>
