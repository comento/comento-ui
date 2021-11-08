<template>
	<div class="c-application c-profile-with-text">
		<div v-if="$slots['avatar']" class="avatar-wrapper">
			<slot name="avatar" />
		</div>
		<div class="name-text-container">
			<div class="name-wrapper">
				<Typography type="body2" color="gray850" font-weight="bold" class="text-truncate">
					<slot name="name" />
				</Typography>
				<slot name="icon" />
			</div>
			<div>
				<slot name="text" />
			</div>
		</div>
	</div>
</template>

<script>
import Typography from '@/components/elements/core/typography/Typography';

/**
 * @displayName c-profile-with-text
 */
export default {
	name: 'ProfileWithText',
	components: { Typography },
};
</script>

<style lang="scss" scoped>
.c-profile-with-text {
	padding: 2px 0 16px;
	@include flexbox();
	@include flex-direction(row);
	overflow-x: hidden;

	.avatar-wrapper {
		margin-right: 8px;
	}

	.name-text-container {
		overflow-x: inherit;

		.name-wrapper {
			@include flexbox();
			@include align-items(center);

			::v-deep.c-icon {
				margin-left: 2px;
			}
		}
	}
}
</style>
