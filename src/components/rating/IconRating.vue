<template>
	<div class="c-application c-icon-rating" v-bind="$attrs" v-on="$listeners">
		<Icon :name="iconName" :color="color" class="mr-4" />
		<Typography :type="typographyType" :font-weight="400" :color="color">
			{{ text }}
		</Typography>
	</div>
</template>

<script>
import Icon from '@/components/icon/Icon.vue';
import Typography from '@/components/typography/Typography.vue';
export const IconRatingSizes = ['small', 'large'];

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
			default: 'IconCommentSmallLine',
		},
		text: {
			type: [String, Number],
			required: true,
		},
		/**
		 * 크기(small, large)
		 */
		size: {
			type: String,
			default: 'small',
			validator(value) {
				return IconRatingSizes.includes(value);
			},
		},
	},
	computed: {
		typographyType() {
			return this.size === 'large' ? 'body1' : 'body2';
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
