<template>
	<div
		class="c-application c-style-col"
		:class="[computedSm, computedOffsetSm, computedLg, computedOffsetLg, computedGutters]"
		:style="computedStyle"
	>
		<slot />
	</div>
</template>

<script>
export default {
	name: 'StyleCol',
	props: {
		colSm: {
			type: Number,
			default: -1,
			validator(value) {
				return typeof value === 'number';
			},
		},
		offsetSm: {
			type: Number,
			default: -1,
			validator(value) {
				return typeof value === 'number';
			},
		},
		colLg: {
			type: Number,
			default: -1,
			validator(value) {
				return typeof value === 'number';
			},
		},
		offsetLg: {
			type: Number,
			default: -1,
			validator(value) {
				return typeof value === 'number';
			},
		},
		colGutters: {
			type: Boolean,
			default: false,
		},
		offsetBetweenItems: {
			type: Number,
			default: null,
			validator(value) {
				return typeof value === 'number';
			},
		},
	},
	computed: {
		computedSm() {
			if (this.colSm !== -1) {
				return `col-${this.colSm}`;
			} else {
				return null;
			}
		},
		computedOffsetSm() {
			if (this.offsetSm !== -1) {
				return `offset-${this.offsetSm}`;
			} else {
				return null;
			}
		},
		computedLg() {
			if (this.colLg !== -1) {
				return `col-lg-${this.colLg}`;
			} else {
				return null;
			}
		},
		computedOffsetLg() {
			if (this.offsetLg !== -1) {
				return `offset-lg-${this.offsetLg}`;
			} else {
				return null;
			}
		},
		computedGutters() {
			if (this.colGutters) {
				return 'no-gutters';
			} else {
				return null;
			}
		},
		computedStyle() {
			// 그리드 안의 사이 간격
			return this.offsetBetweenItems ? { padding: `0 ${this.offsetBetweenItems}px` } : null;
		},
	},
};
</script>

<style scoped lang="scss">
$grid: 3px;
$grid-column-width: 1108px-$grid-gutter-width * 11;
@debug ($grid-column-width);
$grid-column-9-width: #{$grid-column-width * 9px} + $grid-gutter-width * 8;
$grid-column-3-width: calc(#{$grid-column-width}* 3) + calc(#{$grid-gutter-width}* 2);
@debug ($grid-column-9-width);
@debug ($grid-column-3-width);

/*@import '@/assets/style/base/main';*/

/* Mobile first */
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto {
	position: relative;
	width: 100%;
	padding-right: 16px;
	padding-left: 16px;
	box-sizing: border-box;
	&.no-gutters {
		padding-left: 0;
		padding-right: 0;
	}
	@include pc {
		padding-right: 24px;
		padding-left: 24px;
	}
}
.col-1 {
	-ms-flex: 0 0 8.333333%;
	flex: 0 0 8.333333%;
	max-width: 8.333333%;
}

.col-2 {
	-ms-flex: 0 0 16.666667%;
	flex: 0 0 16.666667%;
	max-width: 16.666667%;
}

.col-3 {
	-ms-flex: 0 0 $grid-column-3-width;
	flex: 0 0 $grid-column-3-width;
	max-width: $grid-column-3-width;
}

.col-4 {
	-ms-flex: 0 0 33.333333%;
	flex: 0 0 33.333333%;
	max-width: 33.333333%;
}

.col-5 {
	-ms-flex: 0 0 41.666667%;
	flex: 0 0 41.666667%;
	max-width: 41.666667%;
}

.col-6 {
	-ms-flex: 0 0 50%;
	flex: 0 0 50%;
	max-width: 50%;
}

.col-7 {
	-ms-flex: 0 0 58.333333%;
	flex: 0 0 58.333333%;
	max-width: 58.333333%;
}

.col-8 {
	-ms-flex: 0 0 66.666667%;
	flex: 0 0 66.666667%;
	max-width: 66.666667%;
}

.col-9 {
	-ms-flex: 0 0 $grid-column-9-width;
	flex: 0 0 $grid-column-9-width;
	max-width: $grid-column-9-width;
}

.col-10 {
	-ms-flex: 0 0 83.333333%;
	flex: 0 0 83.333333%;
	max-width: 83.333333%;
}

.col-11 {
	-ms-flex: 0 0 91.666667%;
	flex: 0 0 91.666667%;
	max-width: 91.666667%;
}

.col-12 {
	-ms-flex: 0 0 100%;
	flex: 0 0 100%;
	max-width: 100%;
}
.offset-0 {
	margin-left: 0;
}
.offset-1 {
	margin-left: 8.333333%;
}

.offset-2 {
	margin-left: 16.666667%;
}

.offset-3 {
	margin-left: 25%;
}

.offset-4 {
	margin-left: 33.333333%;
}

.offset-5 {
	margin-left: 41.666667%;
}

.offset-6 {
	margin-left: 50%;
}

.offset-7 {
	margin-left: 58.333333%;
}

.offset-8 {
	margin-left: 66.666667%;
}

.offset-9 {
	margin-left: 75%;
}

.offset-10 {
	margin-left: 83.333333%;
}

.offset-11 {
	margin-left: 91.666667%;
}
@include pc {
	.col-lg-1 {
		-ms-flex: 0 0 8.333333%;
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}
	.col-lg-2 {
		-ms-flex: 0 0 16.666667%;
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}
	.col-lg-3 {
		-ms-flex: 0 0 25%;
		flex: 0 0 25%;
		max-width: 25%;
	}
	.col-lg-4 {
		-ms-flex: 0 0 33.333333%;
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}
	.col-lg-5 {
		-ms-flex: 0 0 41.666667%;
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}
	.col-lg-6 {
		-ms-flex: 0 0 50%;
		flex: 0 0 50%;
		max-width: 50%;
	}
	.col-lg-7 {
		-ms-flex: 0 0 58.333333%;
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
	.col-lg-8 {
		-ms-flex: 0 0 66.666667%;
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
	.col-lg-9 {
		-ms-flex: 0 0 75%;
		flex: 0 0 75%;
		max-width: 75%;
	}
	.col-lg-10 {
		-ms-flex: 0 0 83.333333%;
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}
	.col-lg-11 {
		-ms-flex: 0 0 91.666667%;
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}
	.col-lg-12 {
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
	}
	.offset-lg-0 {
		margin-left: 0;
	}
	.offset-lg-1 {
		margin-left: 8.333333%;
	}
	.offset-lg-2 {
		margin-left: 16.666667%;
	}
	.offset-lg-3 {
		margin-left: 25%;
	}
	.offset-lg-4 {
		margin-left: 33.333333%;
	}
	.offset-lg-5 {
		margin-left: 41.666667%;
	}
	.offset-lg-6 {
		margin-left: 50%;
	}
	.offset-lg-7 {
		margin-left: 58.333333%;
	}
	.offset-lg-8 {
		margin-left: 66.666667%;
	}
	.offset-lg-9 {
		margin-left: 75%;
	}
	.offset-lg-10 {
		margin-left: 83.333333%;
	}
	.offset-lg-11 {
		margin-left: 91.666667%;
	}
}
</style>
