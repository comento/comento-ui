<template>
	<div class="c-application c-avatar_container">
		<i class="c-avatar" :class="[computedType, computedSize]" :style="computedStyle" />
		<Typography class="flex mt-8" :class="[computedAlign]" type="caption1" :color="textColor">
			{{ text }}
			<div class="c-avatar_icon" :style="$slots['text-right-icon'] ? 'margin-left: 2px;' : ''">
				<slot name="text-right-icon" />
			</div>
		</Typography>
	</div>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'Avatar',
	props: {
		// user, img
		type: {
			type: String,
			default: 'user',
		},
		// 사이즈
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return ['small', 'medium', 'large'].indexOf(value) !== -1;
			},
		},
		// type : user일 경우 색상
		color: {
			type: String,
			default: 'gainsboro',
		},
		textColor: {
			type: String,
			default: 'gray800',
		},
		// type : user일 경우 문구
		text: {
			type: String,
			default: null,
		},
		// type : img 일 경우 이미지
		src: {
			type: String,
			default: null,
		},
		align: {
			type: String,
			default: 'center',
			validator(value) {
				return ['center', 'left', 'right'].indexOf(value) !== -1;
			},
		},
	},
	computed: {
		computedType() {
			return `${this.type}`;
		},
		computedSize() {
			return `${this.size}`;
		},
		computedAlign() {
			const alignItem = {
				center: 'justify-center',
				left: 'justify-start',
				right: 'justify-end',
			};
			return alignItem[this.align];
		},
		computedStyle() {
			if (this.type === 'user') {
				return {
					'background-color': this.color,
					// 'background-image': `url(${this.randomAvatarSrc(this.getRandomArbitrary(1, 30))})`,
				};
			} else {
				return {
					'background-image': `url(${this.src})`,
				};
			}
		},
	},
	components: { Typography },
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

.c-avatar {
	&_container {
		display: inline-block;
		text-align: center;
	}
	display: inline-block;
	text-align: center;
	font-size: 15px;
	color: $white;
	font-weight: bold;
	font-style: normal;
	border-radius: 100%;
	/*사이즈*/
	&.small {
		width: 40px;
		height: 40px;
		line-height: 40px;
	}
	&.medium {
		width: 48px;
		height: 48px;
		line-height: 48px;
	}
	&.large {
		width: 68px;
		height: 68px;
		line-height: 68px;
	}
	&.user {
		border: 1px solid $gray100;
		background-image: url('../../../assets/images/avatar/my_anonymous_' + (random(29) + 1) + '.svg');
	}
	&.img {
		background-size: contain;
	}
	&_icon {
		display: inline-block;
		vertical-align: middle;
	}
}
</style>
