<template>
	<div
		class="c-application c-new-col"
		:class="[computedSm, computedOffsetSm, computedLg, computedOffsetLg, computedGutters]"
		:style="computedStyle"
	>
		<slot />
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CNewCol',
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
				return `new-col-sm-${this.colSm}`;
			} else {
				return null;
			}
		},
		computedOffsetSm() {
			if (this.offsetSm !== -1) {
				return `new-offset-sm-${this.offsetSm}`;
			} else {
				return null;
			}
		},
		computedLg() {
			if (this.colLg !== -1) {
				return `new-col-lg-${this.colLg}`;
			} else {
				return null;
			}
		},
		computedOffsetLg() {
			if (this.offsetLg !== -1) {
				return `new-offset-lg-${this.offsetLg}`;
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
});
</script>

<style lang="scss" scoped>
/* Mobile first */
.c-new-col {
	position: relative;
	width: 100%;
	padding-right: calc($grid-gutter-width-mobile / 2);
	padding-left: calc($grid-gutter-width-mobile / 2);
	box-sizing: border-box;
	&.no-gutters {
		padding-left: 0;
		padding-right: 0;
	}
	@include pc {
		padding-right: calc($grid-gutter-width-pc / 2);
		padding-left: calc($grid-gutter-width-pc / 2);
	}
}
@mixin create-columns-classes() {
	@for $i from 1 through $grid-columns-pc {
		.new-col-lg-#{$i} {
			@include get-columns-width-pc($i);
		}
	}
	@for $j from 1 through $grid-columns-mobile {
		.new-col-sm-#{$j} {
			@include get-columns-width-mobile($j);
		}
	}
}
@include create-columns-classes();

@mixin create-columns-offset() {
	@for $i from 1 through $grid-columns-pc {
		.new-offset-lg-#{$i} {
			@include get-offset-pc($i);
		}
	}
	@for $j from 1 through $grid-columns-mobile {
		.new-offset-sm-#{$j} {
			@include get-offset-mobile($j);
		}
	}
}
@include create-columns-offset();
</style>
