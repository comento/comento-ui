<template>
	<div class="c-application c-badge--container" :class="[computedType]">
		<!-- badge 대상 컴포넌트 -->
		<slot />

		<!-- badge -->
		<div v-if="text" class="c-badge--wrapper">
			<div class="c-badge" :style="[computedStyle]" :class="[computedSize, computedPosition]">
				<Typography type="caption2" color="white" :font-weight="700" class="c-badge--text">
					{{ text }}
				</Typography>
			</div>
		</div>
	</div>
</template>

<script>
import { colors } from '@/src/components/elements/core/colors';
import Typography from '@/src/components/elements/core/typography/Typography';

export const badgeColors = ['primary', 'error'];
export const badgeSizes = ['medium', 'small'];
export const badgeTypes = ['inline', 'absolute'];

/**
 * @displayName c-badge
 */
export default {
	name: 'Badge',
	props: {
		/**
		 * 색상(primary, error)
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
		padding: 0 5px;
		.c-badge--text {
			line-height: 10px;
		}
	}
	&.small {
		height: 14px;
		padding: 0 4px;
		font-size: 10px;
		.c-badge--text {
			line-height: 8px;
		}
	}

	&--container {
		&.inline {
			display: flex;
			.c-badge {
				display: block;
				&--wrapper {
					position: static;
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