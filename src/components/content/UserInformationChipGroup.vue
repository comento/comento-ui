<template>
	<ChipGroup v-bind="$props">
		<slot />
	</ChipGroup>
</template>

<script>
/**
 * @displayName c-user-information-chip-group
 */
import ChipGroup from '@/components/chips/ChipGroup.vue';

export default {
	name: 'UserInformationChipGroup',
	props: {
		size: {
			type: String,
		},
	},
	components: { ChipGroup },
};
</script>

<style lang="scss" scoped>
.c-chip-group {
	display: inline-block;
	vertical-align: text-bottom;
	margin-left: 2px;
}
</style>
