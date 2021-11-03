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
import Typography from '@/components/elements/core/typography/Typography';
import Icon from '@/components/elements/core/icon/Icon';
import uniqueId from '@/utils/unique-id';

export const avatarSizes = ['xsmall', 'small', 'medium', 'large'];
export const avatarTypes = ['text', 'profile', 'logo', 'image'];
const avatarColors = ['#f5b3b3', '#f3c499', '#f0db80', '#b4d2a9', '#91cfd3', '#acc5ea', '#ceb9e2', '#b0aba4'];

/**
 * @displayName c-avatar
 */
export default {
	name: 'Avatar',
	props: {
		/**
		 * 타입(text, profile, logo, image)
		 */
		type: {
			type: String,
			default: 'profile',
			validator(value) {
				return avatarTypes.includes(value);
			},
		},
		/**
		 * xsmall, small, medium, large
		 */
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
		/**
		 * 이미지 경로
		 */
		src: {
			type: String,
			default: null,
		},
		id: {
			type: Number,
			default: -1,
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
		computedId() {
			return this.id > -1 ? this.id : this.uid;
		},
		computedRandomBackground() {
			const randomNo = this.computedId % avatarColors.length;
			return avatarColors[randomNo];
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
