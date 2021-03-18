<template>
	<div
		class="c-application c-col"
		:class="[computedSm, computedOffsetSm, computedLg, computedOffsetLg, computedGutters]"
		:style="computedStyle"
	>
		<slot />
	</div>
</template>

<script>
export default {
	name: 'NewCol',
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
		noGutters: {
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
				return `col-sm-${this.colSm}`;
			} else {
				return null;
			}
		},
		computedOffsetSm() {
			if (this.offsetSm !== -1) {
				return `offset-sm-${this.offsetSm}`;
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
			if (this.noGutters) {
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

<style lang="scss" scoped>
/* Mobile first */
.c-col {
	position: relative;
	width: 100%;
	padding-right: $grid-gutter-width-mobile / 2;
	padding-left: $grid-gutter-width-mobile / 2;
	box-sizing: border-box;
	&.no-gutters {
		padding-left: 0;
		padding-right: 0;
	}
	@include pc {
		padding-right: $grid-gutter-width-pc / 2;
		padding-left: $grid-gutter-width-pc / 2;
	}
}
@mixin create-columns-classes() {
	@for $i from 1 through $grid-columns-pc {
		.col-lg-#{$i} {
			@include get-columns-width-pc($i);
		}
	}
	@for $j from 1 through $grid-columns-mobile {
		.col-sm-#{$j} {
			@include get-columns-width-mobile($j);
		}
	}
}
@include create-columns-classes();

@mixin create-columns-offset() {
	@for $i from 1 through $grid-columns-pc {
		.offset-lg-#{$i} {
			@include get-offset-pc($i);
		}
	}
	@for $j from 1 through $grid-columns-mobile {
		.offset-sm-#{$j} {
			@include get-offset-mobile($j);
		}
	}
}
@include create-columns-offset();
</style>
