<template>
	<List v-if="$slots.default" class="c-file-input-list--container" :class="computedClass">
		<slot />
	</List>
</template>

<script>
import List from '@/components/list/list/List.vue';

/**
 * @displayName c-file-input-list
 */
export default {
	name: 'FileInputList',
	props: {
		full: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		computedClass() {
			return { full: this.full };
		},
	},
	components: { List },
};
</script>

<style lang="scss" scoped>
.c-file-input-list--container {
	border: 1px solid $gray200;
	@include border-radius(6px);
	margin-top: 8px;
	padding: 4px;
	&.full {
		width: 100%;
	}
}
</style>
