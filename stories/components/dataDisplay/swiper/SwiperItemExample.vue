<template>
	<CBox :paddings="[100, 32, 100, 32]" background-color="orange600">
		<CTypography type="display1" color="white">
			{{ text }}
		</CTypography>
	</CBox>
</template>

<script>
import CBox from '@/components/components/general/CBox.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SwiperItemExample',
	props: {
		text: {
			type: String,
		},
	},
	components: {
		CBox,
		CTypography,
	},
});
</script>

<style lang="scss" scoped>
$swiper-background-color: #c4c4c4;
.c-box {
	width: 100%;
	background-color: $swiper-background-color;
}
</style>
