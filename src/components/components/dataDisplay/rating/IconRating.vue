<template>
	<div class="c-application c-icon-rating">
		<Icon :name="iconName" :color="color" class="mr-4" />
		<Typography type="body2" :color="color">
			{{ text }}
		</Typography>
	</div>
</template>

<script>
import Icon from '@/components/elements/core/icon/Icon';
import Typography from '@/components/elements/core/typography/Typography';

/**
 * @displayName c-icon-rating
 */
export default {
	name: 'IconRating',
	props: {
		color: {
			type: String,
			default: 'primary',
		},
		iconName: {
			type: String,
			default: 'IconCommentMediumLine',
		},
		text: {
			type: [String, Number],
			required: true,
		},
	},
	components: {
		Icon,
		Typography,
	},
};
</script>

<style lang="scss" scoped>
.c-icon-rating {
	@include flexbox();
	@include align-items(center);
}
</style>
