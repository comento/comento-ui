<template>
	<Box :paddings="[100, 32, 100, 32]">
		<Typography type="display1" color="white" align="center">{{ text }}</Typography>
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

<style lang="scss" scoped>
$swiper-background-color: #c4c4c4;
.c-box {
	width: 100%;
	background-color: $swiper-background-color;
}
</style>
