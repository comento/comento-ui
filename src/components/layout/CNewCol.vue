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
import { defineComponent, computed, toRefs } from 'vue';

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
	setup(props) {
		const { colSm, offsetSm, colLg, offsetLg, noGutters, offsetBetweenItems } = toRefs(props);

		const computedSm = computed(() => {
			return colSm.value !== -1 ? `new-col-sm-${colSm.value}` : null;
		});

		const computedOffsetSm = computed(() => {
			return offsetSm.value !== -1 ? `new-offset-sm-${offsetSm.value}` : null;
		});

		const computedLg = computed(() => {
			return colLg.value !== -1 ? `new-col-lg-${colLg.value}` : null;
		});

		const computedOffsetLg = computed(() => {
			return offsetLg.value !== -1 ? `new-offset-lg-${offsetLg.value}` : null;
		});

		const computedGutters = computed(() => {
			return noGutters.value ? 'no-gutters' : null;
		});

		const computedStyle = computed(() => {
			return offsetBetweenItems.value ? { padding: `0 ${offsetBetweenItems.value}px` } : null;
		});

		return {
			computedSm,
			computedOffsetSm,
			computedLg,
			computedOffsetLg,
			computedGutters,
			computedStyle,
		};
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
