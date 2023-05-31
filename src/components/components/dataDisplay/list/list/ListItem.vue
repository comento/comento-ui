<template>
	<div class="c-application c-list-item" tabindex="0" :class="[size, computedCursor]" v-on="$listeners">
		<slot />
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export const ListItemSizes = ['small', 'medium', 'large'];
export const ListItemCursors = ['pointer', 'default'];

/**
 * @displayName c-list-item
 */
export default defineComponent({
	name: 'ListItem',
	props: {
		/**
		 * 크기(small, medium, large)
		 */
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return ListItemSizes.indexOf(value) !== -1;
			},
		},
		/**
		 * 커서 모양(pointer, default)
		 */
		cursor: {
			type: String,
			default: 'pointer',
			validator(value) {
				return ListItemCursors.indexOf(value) !== -1;
			},
		},
	},
	computed: {
		computedCursor() {
			return `c-${this.cursor}`;
		},
	},
});
</script>

<style lang="scss" scoped>
$list-item-padding-x: 4px;

.c-list-item {
	padding: 8px $list-item-padding-x;
	@include flexbox();
	@include align-items(center);
	@include justify-content(space-between);
	@include border-radius(6px);

	@include state-style {
		background: $gray100;
	}

	&.small {
		padding: 6px $list-item-padding-x;
		@include border-radius(6px);
	}

	&.large {
		padding: 12px $list-item-padding-x;
		@include border-radius(8px);
	}
}
</style>
