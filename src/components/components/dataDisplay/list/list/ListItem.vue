<template>
	<div class="c-application c-list-item" tabindex="0" :class="[size, computedCursor]" v-on="$listeners">
		<slot />
	</div>
</template>

<script>
export const ListItemSizes = ['small', 'medium', 'large'];
export const ListItemCursors = ['pointer', 'default'];

export default {
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
};
</script>

<style lang="scss" scoped>
$list-item-padding-x: 4px;

.c-list-item {
	padding: 8px $list-item-padding-x;
	@include flexbox();
	@include align-items(center);
	&:hover {
		background: $gray100;
		border-radius: 8px;
	}

	&.small {
		padding: 6px $list-item-padding-x;
	}

	&.large {
		padding: 12px $list-item-padding-x;
	}
}
</style>
