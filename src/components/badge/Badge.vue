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
import { colors } from '@/utils/constants/color.js';
import Typography from '@/components/typography/Typography.vue';
import globalMixin from '@/mixins/globalMixin.js';

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
	components: { Typography },
};
</script>

<style lang="scss" scoped>
.c-badge {
	@include caption2();
	min-width: 0;
	@include border-radius(9999px);
	@include flexbox();
	@include align-items(center);
	@include justify-content(center);
	&.medium {
		height: 17px;
		min-width: 17px;
		padding: 1.5px 5px;
	}
	&.small {
		height: 12px;
		min-width: 12px;
		//font scale 때문에 padding 4가 아닌 2
		padding: 0 2px;
		.c-badge--text {
			//chrome은 최소 font-size 10px
			-webkit-transform: scale(0.8);
			line-height: 10px;
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
	&--text {
		width: 100%;
		height: 100%;
		@include flexbox();
		@include align-items(center);
		@include justify-content(center);
	}
}
</style>
