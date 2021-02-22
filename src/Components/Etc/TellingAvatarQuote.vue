<template>
	<div class="c-application c-telling-avatar-quote">
		<div class="telling-wrapper">
			<Typography
				v-if="$slots['title']"
				type="headline6"
				color="gray900"
				font-weight="bold"
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
			<Typography v-show="!isMobile" type="caption1" color="gray500" class="avatar-name-wrapper">
				<div>{{ avatarName }}</div>
				<slot v-if="$slots['icon']" name="icon" />
			</Typography>
		</div>
	</div>
</template>

<script>
import Avatar from '@/src/Components/DataDisplay/Avatar';
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
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
};
</script>

<style lang="scss" scoped>
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
			padding: 16px 20px;
			background: $gray000;
			border-radius: 8px;
			margin: 22px 16px 12px;
			width: 100%;

			@include pc() {
				background: white;
				border-radius: 20px;
				@include shadow2();
				padding: 20px 32px;
				margin: 60px (16px + 14px) 40px 0;
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
		}
	}

	.avatar {
		&-wrapper {
			position: absolute;
			top: 10px;
			right: 25px;

			@include pc {
				position: relative;
				top: 5px;
				right: auto;
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
