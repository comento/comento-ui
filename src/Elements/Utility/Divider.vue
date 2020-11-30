<template>
	<hr
		class="c-divider"
		:style="computedStyle"
		:class="[computedType, computedVertical, computedDirection, computedColor]"
	/>
</template>

<script>
export default {
	name: 'Divider',
	props: {
		/* Divider type line, dash */
		type: {
			type: String,
			default: 'line',
		},
		/* Divider 방향
		 * 가로 (Vertical) : true
		 * 세로 (Vertical) :false
		 * */
		vertical: {
			type: Boolean,
			default: true,
		},
		/* dividerDirection top, bottom, left, right */
		direction: {
			type: String,
			default: 'top',
		},
		/* Divider color
		 * default :gray200
		 *  */
		color: {
			type: String,
			default: 'default',
		},
		width: {
			type: String,
			default: '0',
		},
		height: {
			type: String,
			default: '0',
		},
	},
	data: () => ({}),
	computed: {
		computedType() {
			return `c-divider_type_${this.type}`;
		},
		computedVertical() {
			if (this.vertical) {
				return 'c-divider_vertical';
			} else {
				return 'c-divider_horizontal';
			}
		},
		computedDirection() {
			return `c-divider_direction_${this.direction}`;
		},
		computedColor() {
			return `c-divider_color_${this.color}`;
		},
		computedWidth() {
			if (this.vertical) {
				return this.width;
			} else {
				return null;
			}
		},
		computedHeight() {
			if (!this.vertical) {
				return this.height;
			} else {
				return null;
			}
		},
		computedStyle() {
			const { width, height } = this;
			return {
				width: `${width}px`,
				height: `${height}px`,
			};
		},
	},
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

.c-divider {
	border: 0;
	margin: 0;
	&_vertical {
		width: 100%;
		height: 0;
		border-top: 1px;
	}
	&_horizontal {
		width: 0;
		height: 100%;
		border-left: 1px;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	&_type_line {
		border-style: solid;
	}
	&_type_dash {
		border-style: dashed;
	}
	&_color_default {
		border-color: $gray200;
	}
	&_color_gray100 {
		border-color: $gray100;
	}
	&_direction_top {
		top: 0;
		left: 0;
	}
	&_direction_bottom {
		bottom: 0;
		left: 0;
	}
	&_direction_left {
		top: 0;
		left: 0;
	}
	&_direction_right {
		top: 0;
		right: 0;
	}
}
</style>
