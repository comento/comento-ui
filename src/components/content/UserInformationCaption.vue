<template>
	<Typography type="caption1" color="gray400"><slot /></Typography>
</template>

<script>
/**
 * @displayName c-user-information-caption
 */
import Typography from '@/components/typography/Typography.vue';

export default {
	name: 'UserInformationCaption',
	components: { Typography },
};
</script>

<style scoped></style>
