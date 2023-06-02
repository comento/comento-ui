<template>
	<div class="c-application c-icon-rating" v-bind="$attrs">
		<CIcon :name="iconName" :color="color" class="mr-4" />
		<CTypography type="body2" :color="color">
			{{ text }}
		</CTypography>
	</div>
</template>

<script>
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CIconRating',
	props: {
		color: {
			type: String,
			default: 'primary',
		},
		iconName: {
			type: String,
			default: 'IconCommentSmallLine',
		},
		text: {
			type: [String, Number],
			required: true,
		},
	},
	components: {
		CIcon,
		CTypography,
	},
});
</script>

<style lang="scss" scoped>
.c-icon-rating {
	@include flexbox();
	@include align-items(center);
}
</style>
