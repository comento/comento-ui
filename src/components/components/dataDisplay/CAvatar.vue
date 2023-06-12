<template>
	<div class="c-application c-avatar--container" :class="[size]">
		<i class="c-avatar" :class="[type, size]" :style="computedStyle" />
		<div class="c-avatar--item">
			<CIcon v-if="isProfileType" :name="computedIconName" :color="computedColorName" />
			<div v-if="isLogoType" class="c-avatar--logo" :class="[size]" />
			<CTypography v-if="isNicknameType" :type="computedTypography" font-weight="semi-bold" color="white">
				{{ text || computedRandomText }}
			</CTypography>
		</div>
	</div>
</template>

<script>
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import uniqueId from '@/utils/unique-id';
import { defineComponent, computed, toRefs } from 'vue';

export const avatarSizes = ['xsmall', 'small', 'medium', 'large'];
export const avatarTypes = ['nickname', 'profile', 'logo', 'image'];
const avatarColors = ['#f5b3b3', '#f3c499', '#f0db80', '#b4d2a9', '#91cfd3', '#acc5ea', '#ceb9e2', '#b0aba4'];

export default defineComponent({
	name: 'CAvatar',
	props: {
		/**
		 * 타입(nickname, profile, logo, image)
		 */
		type: {
			type: String,
			default: 'nickname',
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
		/**
		 * profile type일 때 색상
		 */
		color: {
			type: String,
			default: 'gray300',
		},
	},
	setup(props) {
		const { type, id, src, size, color } = toRefs(props);
		const uid = uniqueId();

		const isNicknameType = computed(() => type.value === 'nickname');
		const isProfileType = computed(() => type.value === 'profile');
		const isLogoType = computed(() => type.value === 'logo');
		const isImageType = computed(() => type.value === 'image');
		const computedId = computed(() => (id.value > -1 ? id : uid));
		const computedRandomBackground = computed(() => {
			const randomNo = computedId.value % avatarColors.length;
			return avatarColors[randomNo];
		});
		const computedStyle = computed(() => {
			if (isImageType.value) return { 'background-image': `url(${src.value})` };
			if (isNicknameType.value) return { background: computedRandomBackground };
			return {};
		});

		const computedRandomText = computed(() => {
			const text = 'ABCDEGHIJKLMNOPQRSTUVWXYZ';
			const textLength = text.length;
			const randomNo = uid % textLength;
			return text[randomNo];
		});

		const computedTypography = computed(
			() =>
				({
					xsmall: 'caption2',
					small: 'body2',
					medium: 'body1',
					large: 'headline4',
				}[size]),
		);
		const computedIconName = computed(() => {
			const iconBySize = {
				xsmall: 'Small',
				small: 'Large',
				medium: 'XLarge',
				large: '2XLarge',
			};
			return `IconProfile${iconBySize[size]}Fill`;
		});
		const computedColorName = computed(() => color.value.toLowerCase());

		return {
			uid,
			computedStyle,
			isProfileType,
			isLogoType,
			isNicknameType,
			computedIconName,
			computedColorName,
			computedTypography,
			computedRandomText,
		};
	},
	components: {
		CTypography,
		CIcon,
	},
});
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
		background: $primary;
	}
	&--item {
		display: flex;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		left: 50%;
	}
	&--logo {
		background-image: url('https://comento-s3-bucket.s3.ap-northeast-2.amazonaws.com/images/icon/icon-comento-typo-logo.svg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;

		&.xsmall {
			width: 24px;
			height: 24px;
		}
		&.small {
			width: 40px;
			height: 40px;
		}
		&.medium {
			width: 48px;
			height: 48px;
		}
		&.large {
			width: 68px;
			height: 68px;
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
