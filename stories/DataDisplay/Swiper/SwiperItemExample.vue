<template>
	<Box :paddings="[100, 32, 100, 32]" background-color="blue100">
		<Typography type="display1" color="white">{{ text }}</Typography>
	</Box>
</template>

<script>
import Box from '@/src/Components/DataDisplay/Box';
import Typography from '@/src/Elements/Core/Typography/Typography';
export default {
	name: 'SwiperItemExample',
	props: {
		text: {
			type: String,
		},
	},
	components: {
		Box,
		Typography,
	},
};
</script>

<style scoped></style>
