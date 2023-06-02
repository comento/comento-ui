<template>
	<CChipGroup v-bind="$props">
		<slot />
	</CChipGroup>
</template>

<script>
import CChipGroup from '@/components/components/dataDisplay/chips/CChipGroup.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CUserInformationChipGroup',
	props: {
		size: {
			type: String,
		},
	},
	components: { CChipGroup },
});
</script>

<style lang="scss" scoped>
.c-chip-group {
	display: inline-block;
	vertical-align: text-bottom;
	margin-left: 2px;
}
</style>
