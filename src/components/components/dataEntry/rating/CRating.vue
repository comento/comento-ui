<template>
	<div class="c-application c-rating">
		<CIcon :name="iconName" :color="iconColor" :rotate="iconRotate" />
		<CTypography type="body2" :color="textColor">{{ text }}</CTypography>
	</div>
</template>

<script>
import CIcon from '@/components/elements/core/icon/CIcon';
import CTypography from '@/components/elements/core/typography/CTypography';

export default {
	name: 'CRating',
	props: {
		iconName: {
			type: String,
		},
		iconRotate: {
			type: Number,
		},
		iconColor: {
			type: String,
		},
		text: {
			type: [Number, String],
		},
		textColor: {
			type: String,
		},
	},
	components: { CTypography, CIcon },
};
</script>

<style lang="scss" scoped>
.c-rating {
	@include flexbox();
	@include flex-direction(row);

	.c-icon {
		margin: 2px 4px 2px 0;
	}
}
</style>
