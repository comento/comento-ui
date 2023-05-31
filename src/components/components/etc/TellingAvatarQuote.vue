<template>
	<div class="c-application c-telling-avatar-quote">
		<div class="telling-wrapper">
			<Typography
				v-if="$slots['title']"
				type="headline7"
				color="gray900"
				font-weight="semi-bold"
				class="telling-title"
			>
				<slot name="title" />
			</Typography>
			<Typography v-if="$slots['content']" :type="isMobile ? 'body2' : 'body1'" color="gray700">
				<slot name="content" />
			</Typography>
		</div>
		<div class="avatar-wrapper">
			<Avatar type="image" :src="avatarImage" :size="!isMobile ? 'large' : 'small'" />
			<Typography v-if="!isMobile" type="caption1" color="gray500" class="avatar-name-wrapper">
				<div>{{ avatarName }}</div>
				<slot v-if="$slots['icon']" name="icon" />
			</Typography>
		</div>
	</div>
</template>

<script>
import Avatar from '@/components/components/dataDisplay/Avatar.vue';
import Typography from '@/components/elements/core/typography/Typography.vue';
import { defineComponent } from 'vue';

/**
 * @displayName c-telling-avatar-quote
 */
export default defineComponent({
	name: 'TellingAvatarQuote',
	props: {
		avatarImage: {
			type: String,
		},
		avatarName: {
			type: String,
		},
	},
	components: { Typography, Avatar },
});
</script>

<style lang="scss" scoped>
$wrapper-margin-top: 60px;
$wrapper-margin-bottom: 40px;

.c-telling-avatar-quote {
	@include flexbox();
	@include justify-content(center);
	position: relative;
	background: $gray100;

	@include pc() {
		background: $gray000;
		@include flex-direction(row);
		@include align-items(center);
		@include justify-content(space-between);
	}

	.telling {
		&-wrapper {
			position: relative;
			padding: 16px;
			background: $gray000;
			border-radius: 8px;
			margin: 22px 16px 12px;
			width: 100%;

			@include pc() {
				background: white;
				border-radius: 20px;
				@include shadow2();
				padding: 20px 32px;
				margin: $wrapper-margin-top (16px + 14px) $wrapper-margin-bottom 0;
				flex: 1;

				&:after {
					content: '';
					display: block;
					position: absolute;
					width: 20px;
					height: 20px;
					background: white;
					top: calc(50% - 22px);
					right: -10px;
					transform: rotate(45deg);
				}
			}
		}

		&-title {
			margin-bottom: 4px;
			@include mobile {
				max-width: 270px;
			}
		}
	}

	.avatar {
		&-wrapper {
			position: absolute;
			top: 10px;
			right: 25px;

			@include pc {
				position: relative;
				top: auto;
				right: auto;
				margin-top: $wrapper-margin-top + 5px;
				margin-bottom: $wrapper-margin-bottom;
				@include flexbox();
				@include flex-direction(column);
				@include align-items(center);
				padding: 0 8px;
			}

			.c-avatar--container {
				margin-bottom: 8px;
			}
		}
		&-name-wrapper {
			@include flexbox();
			@include flex-direction(row);
			@include align-items(center);
			@include justify-content(center);
			> div {
				word-break: normal;
			}

			::v-deep.c-icon {
				margin-left: 2px;
			}
		}
	}
}
</style>
