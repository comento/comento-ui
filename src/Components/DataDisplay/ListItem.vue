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
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return ListItemSizes.indexOf(value) !== -1;
			},
		},
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
.c-list-item {
	padding: 8px 6px;
	@include flexbox();
	@include align-items(center);
	&:hover,
	&:focus {
		background: $gray100;
	}

	&.small {
		padding: 6px 4px;
	}

	&.large {
		padding: 12px;
	}
}
</style>
