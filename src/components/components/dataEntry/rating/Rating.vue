<template>
	<div class="c-application c-rating">
		<Icon :name="iconName" :color="iconColor" :rotate="iconRotate" />
		<Typography type="body2" :color="textColor">{{ text }}</Typography>
	</div>
</template>

<script>
import Icon from '@/src/components/elements/core/icon/Icon';
import Typography from '@/src/components/elements/core/typography/Typography';

export default {
	name: 'Rating',
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
	components: { Typography, Icon },
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
