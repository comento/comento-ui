<template>
	<Box :paddings="[100, 32, 100, 32]" background-color="orange600">
		<Typography type="display1" color="white">{{ text }}</Typography>
	</Box>
</template>

<script>
import Box from '@/components/components/general/Box';
import Typography from '@/components/elements/core/typography/Typography';

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
