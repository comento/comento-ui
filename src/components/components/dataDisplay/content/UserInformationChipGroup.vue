<template>
	<ChipGroup v-bind="$props">
		<slot />
	</ChipGroup>
</template>

<script>
import ChipGroup from '@/components/components/dataDisplay/chips/ChipGroup';
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
