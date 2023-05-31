<template>
	<div class="c-application c-icon-rating" v-bind="$attrs" v-on="$listeners">
		<Icon :name="iconName" :color="color" class="mr-4" />
		<Typography type="body2" :color="color">
			{{ text }}
		</Typography>
	</div>
</template>

<script>
import Icon from '@/components/elements/core/icon/Icon';
import Typography from '@/components/elements/core/typography/Typography';
import { defineComponent } from 'vue';

/**
 * @displayName c-icon-rating
 */
export default defineComponent({
	name: 'IconRating',
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
		Icon,
		Typography,
	},
});
</script>

<style lang="scss" scoped>
.c-icon-rating {
	@include flexbox();
	@include align-items(center);
}
</style>
