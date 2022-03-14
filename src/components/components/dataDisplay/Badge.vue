<template>
	<div class="c-application c-badge--container" :class="[computedType]">
		<!-- badge 대상 컴포넌트 -->
		<slot />

		<!-- badge -->
		<div v-if="text" class="c-badge--wrapper">
			<div class="c-badge" :style="[computedStyle]" :class="[computedSize, computedPosition]">
				<Typography type="caption2" color="white" font-weight="semi-bold" class="c-badge--text">
					{{ text }}
				</Typography>
			</div>
		</div>
	</div>
</template>

<script>
import { colors } from '@/utils/constants/color';
import Typography from '@/components/elements/core/typography/Typography';
import globalMixin from '@/mixins/globalMixin';

export const badgeColors = ['primary', 'secondary'];
export const badgeSizes = ['medium', 'small'];
export const badgeTypes = ['inline', 'absolute'];

/**
 * @displayName c-badge
 */
export default {
	name: 'Badge',
	mixins: [globalMixin],
	props: {
		/**
		 * 색상(primary, secondary)
		 */
		color: {
			type: String,
			default: 'primary',
			validator(value) {
				return badgeColors.indexOf(value) !== -1;
			},
		},
		/**
		 * 크기(medium, small)
		 */
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return badgeSizes.indexOf(value) !== -1;
			},
		},
		text: {
			type: [String, Number],
			default: '',
			validator(value) {
				return typeof value === 'string' || typeof value === 'number';
			},
		},
		offsetX: {
			type: Number,
			default: 0,
			validator(value) {
				return typeof value === 'number';
			},
		},
		offsetY: {
			type: Number,
			default: 0,
			validator(value) {
				return typeof value === 'number';
			},
		},
		/**
		 * 타입(inline, absolute)
		 */
		type: {
			type: String,
			default: 'absolute',
			validator(value) {
				return badgeTypes.indexOf(value) !== -1;
			},
		},
	},
	computed: {
		computedStyle() {
			return {
				...this.computedPadding,
				...this.computedBackground,
				...(this.typeAbsolute && this.computedPosition),
			};
		},
		computedPosition() {
			return {
				top: `calc(100% - ${this.offsetY}px)`,
				left: `calc(100% - ${this.offsetX}px)`,
			};
		},
		computedBackground() {
			return {
				background: colors[this.color],
			};
		},
		computedPadding() {
			const is2Byte = this.getByte(this.text) === 2;
			const isN = this.text === 'N';
			if (is2Byte || isN) {
				// 2byte거나 'N'일 때는 동그란 모양을 위해 padding을 조정함
				const paddings = {
					medium: '3px 4px',
					small: '3px',
				};
				return { padding: paddings[this.size] };
			}
			return false;
		},
		computedSize() {
			return this.size;
		},
		computedType() {
			return this.type;
		},
		typeAbsolute() {
			return this.type === 'absolute';
		},
		typeInline() {
			return this.type === 'inline';
		},
	},
	methods: {
		getByte(value) {
			if (!this.$_isEmpty(value)) {
				return value
					.toString()
					.split('')
					.map(s => s.charCodeAt(0))
					.reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0);
			}
		},
	},
	components: { Typography },
};
</script>

<style lang="scss" scoped>
.c-badge {
	@include caption2();
	min-width: 0;
	@include border-radius(28px);
	@include flexbox();
	@include align-items(center);
	@include justify-content(center);
	&.medium {
		height: 16px;
		min-width: 16px;
		padding: 0 5px;
		.c-badge--text {
			line-height: 10px;
		}
	}
	&.small {
		height: 12px;
		min-width: 12px;
		//font scale 때문에 padding 4가 아닌 2
		padding: 0 2px;
		font-size: 10px;
		.c-badge--text {
			//chrome은 최소 font-size 10px
			-webkit-transform: scale(0.8);
			line-height: 8px;
		}
	}

	&--container {
		&.inline {
			@include flexbox();
			@include align-items(center);
			.c-badge {
				@include flexbox();
				&--wrapper {
					position: inherit;
				}
			}
		}
		&.absolute {
			display: inline-flex;
			.c-badge {
				position: absolute;
			}
		}
		position: relative;
	}
	&--wrapper {
		flex: 0 1;
		height: 100%;
		left: 0;
		pointer-events: none;
		position: absolute;
		top: 0;
		width: 100%;
	}
}
</style>
