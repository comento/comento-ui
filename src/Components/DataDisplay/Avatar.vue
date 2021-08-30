<template>
	<div class="c-application c-avatar--container" :class="[computedSize]">
		<i class="c-avatar" :class="[computedType, computedSize]" :style="computedStyle" />
		<div class="c-avatar--item">
			<Icon v-if="isProfileType" :name="computedIconName" />
			<div v-if="isLogoType" class="c-avatar--logo" :class="[computedSize]" />
			<Typography v-if="isTextType" :type="computedTypography" :font-weight="700" color="white">
				{{ text || computedRandomText }}
			</Typography>
		</div>
	</div>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';
import Icon from '@/src/Elements/Core/Icon/Icon';
import uniqueId from '@/utils/unique-id';

export const avatarSizes = ['xsmall', 'small', 'medium', 'large'];
export const avatarTypes = ['text', 'profile', 'logo', 'image'];

export default {
	name: 'Avatar',
	props: {
		type: {
			type: String,
			default: 'profile',
			validator(value) {
				return avatarTypes.includes(value);
			},
		},
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return avatarSizes.includes(value);
			},
		},
		text: {
			type: String,
			default: '',
		},
		// type : img 일 경우 이미지
		src: {
			type: String,
			default: null,
		},
	},
	data() {
		return {
			uid: uniqueId(),
		};
	},
	computed: {
		isTextType() {
			return this.type === 'text';
		},
		isProfileType() {
			return this.type === 'profile';
		},
		isLogoType() {
			return this.type === 'logo';
		},
		isImageType() {
			return this.type === 'image';
		},
		computedType() {
			return `${this.type}`;
		},
		computedSize() {
			return `${this.size}`;
		},
		computedStyle() {
			if (this.isImageType) {
				return { 'background-image': `url(${this.src})` };
			}
			if (this.isTextType) {
				return { background: this.computedRandomBackground };
			}
			return {};
		},
		computedRandomBackground() {
			const colors = ['#f5b3b6', '#f4c19f', '#efd76f', '#b0d0f5', '#b8bdea', '#b3e2de'];
			const randomNo = this.uid % 5;
			return colors[randomNo];
		},
		computedRandomText() {
			const text = 'ABCDEGHIJKLMNOPQRSTUVWXYZ';
			const textLength = text.length;
			const randomNo = this.uid % textLength;
			return text[randomNo];
		},
		computedTypography() {
			const typographyBySize = {
				xsmall: 'caption2',
				small: 'body2',
				medium: 'body1',
				large: 'headline4',
			};
			return typographyBySize[this.size];
		},
		computedIconName() {
			const iconBySize = {
				xsmall: 'Small',
				small: 'Large',
				medium: 'XLarge',
				large: '2XLarge',
			};
			return `IconProfile${iconBySize[this.size]}Fill`;
		},
	},
	components: {
		Typography,
		Icon,
	},
};
</script>

<style lang="scss" scoped>
.c-avatar {
	display: block;
	border-radius: 100%;

	&--container {
		display: inline-block;
		text-align: center;
		position: relative;
	}

	// 타입
	&.profile {
		background: $gray100;
	}
	&.image {
		background-size: 100% 100%;
	}
	&.logo {
		background: $green600;
	}
	&--item {
		display: flex;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		left: 50%;
	}
	&--logo {
		background-image: url('https://comento-asset.s3.ap-northeast-2.amazonaws.com/images/comento-ui/misc/symbol-comento-large-fill.svg');
		background-repeat: no-repeat;
		background-size: cover;

		&.xsmall {
			width: 12px;
			height: 12px;
		}
		&.small {
			width: 24px;
			height: 24px;
		}
		&.medium {
			width: 28px;
			height: 28px;
		}
		&.large {
			width: 40px;
			height: 40px;
		}
	}
}

// 사이즈
.xsmall {
	width: 24px;
	height: 24px;
	line-height: 24px;
}
.small {
	width: 40px;
	height: 40px;
	line-height: 40px;
}
.medium {
	width: 48px;
	height: 48px;
	line-height: 48px;
}
.large {
	width: 68px;
	height: 68px;
	line-height: 68px;
}
</style>
