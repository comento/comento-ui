<template>
	<div class="c-application c-badge_container">
		<slot></slot>
		<div v-if="text" class="c-badge_wrapper">
			<div class="c-badge" :class="[computedCircle]" :style="[computedStyle]">
				<Typography type="caption2" :color="color" :font-weight="700">{{ text }}</Typography>
			</div>
		</div>
	</div>
</template>

<script>
import { colors } from '@/src/Elements/Core/Colors';
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'Badge',
	props: {
		bgColor: {
			type: String,
			default: 'primary',
		},
		color: {
			type: String,
			default: 'white',
		},
		text: {
			type: [String, Number],
			default: '',
		},
		circle: {
			type: Boolean,
			default: true,
		},
		offsetX: {
			type: Number,
			default: 0,
		},
		offsetY: {
			type: Number,
			default: 0,
		},
		height: {
			type: Number,
			default: 16,
		},
	},
	computed: {
		computedStyle() {
			return {
				height: `${this.height}px`,
				background: colors[this.bgColor],
				top: `calc(100% - ${this.offsetY}px)`,
				left: `calc(100% - ${this.offsetX}px)`,
			};
		},
		computedCircle() {
			return this.circle ? 'circle' : '';
		},
	},
	components: { Typography },
};
</script>

<style lang="scss" scoped>
/*@import '@/assets/style/base/main';*/

.c-badge_container {
	display: inline-block;
	line-height: 1;
	position: relative;

	.c-badge_wrapper {
		flex: 0 1;
		height: 100%;
		left: 0;
		pointer-events: none;
		position: absolute;
		top: 0;
		width: 100%;

		.c-badge {
			@include caption2();
			position: absolute;
			min-width: 0;
			padding: 3px 5px;
			@include flexbox();
			@include align-items(center);

			&.circle {
				@include border-radius(28px);
			}
		}
	}
}
</style>
