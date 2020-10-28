<!--
ex) <grid>
        <row>
            <style_col> <- 이부분
        </row>
    </grid>
-->
<template>
	<div
		class="c-application"
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
		},
		offsetSm: {
			type: Number,
			default: -1,
		},
		colLg: {
			type: Number,
			default: -1,
		},
		offsetLg: {
			type: Number,
			default: -1,
		},
		colGutters: {
			type: Boolean,
			default: false,
		},
		offsetBetweenItems: {
			type: Number,
			default: null,
		},
	},
	computed: {
		computedSm() {
			if (this.colSm !== -1) {
				return `col_${this.colSm}`;
			} else {
				return null;
			}
		},
		computedOffsetSm() {
			if (this.offsetSm !== -1) {
				return `offset_${this.offsetSm}`;
			} else {
				return null;
			}
		},
		computedLg() {
			if (this.colLg !== -1) {
				return `col_lg_${this.colLg}`;
			} else {
				return null;
			}
		},
		computedOffsetLg() {
			if (this.offsetLg !== -1) {
				return `offset_lg_${this.offsetLg}`;
			} else {
				return null;
			}
		},
		computedGutters() {
			if (this.colGutters) {
				return 'no_gutters';
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
/*@import '@/assets/style/base/main';*/

/* Mobile first */
.col_1,
.col_2,
.col_3,
.col_4,
.col_5,
.col_6,
.col_7,
.col_8,
.col_9,
.col_10,
.col_11,
.col_12,
.col_lg_1,
.col_lg_2,
.col_lg_3,
.col_lg_4,
.col_lg_5,
.col_lg_6,
.col_lg_7,
.col_lg_8,
.col_lg_9,
.col_lg_10,
.col_lg_11,
.col_lg_12,
.col_lg,
.col_lg_auto {
	position: relative;
	width: 100%;
	padding-right: 16px;
	padding-left: 16px;
	box-sizing: border-box;
	&.no_gutters {
		padding-left: 0;
		padding-right: 0;
	}
	@include pc {
		padding-right: 24px;
		padding-left: 24px;
	}
}
.col_1 {
	-ms-flex: 0 0 8.333333%;
	flex: 0 0 8.333333%;
	max-width: 8.333333%;
}

.col_2 {
	-ms-flex: 0 0 16.666667%;
	flex: 0 0 16.666667%;
	max-width: 16.666667%;
}

.col_3 {
	-ms-flex: 0 0 25%;
	flex: 0 0 25%;
	max-width: 25%;
}

.col_4 {
	-ms-flex: 0 0 33.333333%;
	flex: 0 0 33.333333%;
	max-width: 33.333333%;
}

.col_5 {
	-ms-flex: 0 0 41.666667%;
	flex: 0 0 41.666667%;
	max-width: 41.666667%;
}

.col_6 {
	-ms-flex: 0 0 50%;
	flex: 0 0 50%;
	max-width: 50%;
}

.col_7 {
	-ms-flex: 0 0 58.333333%;
	flex: 0 0 58.333333%;
	max-width: 58.333333%;
}

.col_8 {
	-ms-flex: 0 0 66.666667%;
	flex: 0 0 66.666667%;
	max-width: 66.666667%;
}

.col_9 {
	-ms-flex: 0 0 75%;
	flex: 0 0 75%;
	max-width: 75%;
}

.col_10 {
	-ms-flex: 0 0 83.333333%;
	flex: 0 0 83.333333%;
	max-width: 83.333333%;
}

.col_11 {
	-ms-flex: 0 0 91.666667%;
	flex: 0 0 91.666667%;
	max-width: 91.666667%;
}

.col_12 {
	-ms-flex: 0 0 100%;
	flex: 0 0 100%;
	max-width: 100%;
}
.offset_0 {
	margin-left: 0;
}
.offset_1 {
	margin-left: 8.333333%;
}

.offset_2 {
	margin-left: 16.666667%;
}

.offset_3 {
	margin-left: 25%;
}

.offset_4 {
	margin-left: 33.333333%;
}

.offset_5 {
	margin-left: 41.666667%;
}

.offset_6 {
	margin-left: 50%;
}

.offset_7 {
	margin-left: 58.333333%;
}

.offset_8 {
	margin-left: 66.666667%;
}

.offset_9 {
	margin-left: 75%;
}

.offset_10 {
	margin-left: 83.333333%;
}

.offset_11 {
	margin-left: 91.666667%;
}
@include pc {
	.styleCol_component {
		padding-right: 24px;
		padding-left: 24px;
	}
	.col_lg_1 {
		-ms-flex: 0 0 8.333333%;
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}
	.col_lg_2 {
		-ms-flex: 0 0 16.666667%;
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}
	.col_lg_3 {
		-ms-flex: 0 0 25%;
		flex: 0 0 25%;
		max-width: 25%;
	}
	.col_lg_4 {
		-ms-flex: 0 0 33.333333%;
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}
	.col_lg_5 {
		-ms-flex: 0 0 41.666667%;
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}
	.col_lg_6 {
		-ms-flex: 0 0 50%;
		flex: 0 0 50%;
		max-width: 50%;
	}
	.col_lg_7 {
		-ms-flex: 0 0 58.333333%;
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
	.col_lg_8 {
		-ms-flex: 0 0 66.666667%;
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
	.col_lg_9 {
		-ms-flex: 0 0 75%;
		flex: 0 0 75%;
		max-width: 75%;
	}
	.col_lg_10 {
		-ms-flex: 0 0 83.333333%;
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}
	.col_lg_11 {
		-ms-flex: 0 0 91.666667%;
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}
	.col_lg_12 {
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
	}
	.offset_lg_0 {
		margin-left: 0;
	}
	.offset_lg_1 {
		margin-left: 8.333333%;
	}
	.offset_lg_2 {
		margin-left: 16.666667%;
	}
	.offset_lg_3 {
		margin-left: 25%;
	}
	.offset_lg_4 {
		margin-left: 33.333333%;
	}
	.offset_lg_5 {
		margin-left: 41.666667%;
	}
	.offset_lg_6 {
		margin-left: 50%;
	}
	.offset_lg_7 {
		margin-left: 58.333333%;
	}
	.offset_lg_8 {
		margin-left: 66.666667%;
	}
	.offset_lg_9 {
		margin-left: 75%;
	}
	.offset_lg_10 {
		margin-left: 83.333333%;
	}
	.offset_lg_11 {
		margin-left: 91.666667%;
	}
}
</style>
