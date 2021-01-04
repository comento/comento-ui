<template>
	<div class="c-application c-badge--container">
		<!-- badge 대상 컴포넌트 -->
		<slot />

		<!-- badge -->
		<div v-if="text" class="c-badge--wrapper">
			<div class="c-badge" :style="[computedStyle]">
				<Typography type="caption2" color="white" :font-weight="700">{{ text }}</Typography>
			</div>
		</div>
	</div>
</template>

<script>
import { colors } from '@/src/Elements/Core/Colors';
import Typography from '@/src/Elements/Core/Typography/Typography';

export const badgeColors = ['primary'];

export default {
	name: 'Badge',
	props: {
		color: {
			type: String,
			default: 'primary',
			validator(value) {
				return badgeColors.indexOf(value) !== -1;
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
	},
	computed: {
		computedStyle() {
			return {
				background: colors[this.color],
				top: `calc(100% - ${this.offsetY}px)`,
				left: `calc(100% - ${this.offsetX}px)`,
				...this.computedPadding,
			};
		},
		computedPadding() {
			const is2Byte = this.getByte(this.text) === 2;
			const isN = this.text === 'N';
			if (is2Byte || isN) {
				// 2byte거나 'N'일 때는 동그란 모양을 위해 padding이 3px 4px로 된다.
				return { padding: '3px 4px' };
			}
			return false;
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
	position: absolute;
	min-width: 0;
	padding: 3px 5px;
	@include inline-block();
	@include border-radius(28px);

	&--container {
		display: inline-block;
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
