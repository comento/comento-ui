<template>
	<CList class="c-file-list--container" :class="computedClass">
		<CFileItem
			v-for="(item, index) in files"
			:key="`file-${index}`"
			:file="item.file"
			:is-loading="item.isLoading"
			:index="index"
			:is-removable="isRemovable"
			@clickFileDownloadIcon="handleClickFileDownloadIcon"
			@clickFileItemContent="handleClickFileItemContent"
			@clickFileItem="handleClickFileItem"
			@clickFileTrashIcon="handleClickFileTrashIcon"
		/>
	</CList>
</template>

<script>
import CList from '@/components/components/dataDisplay/list/list/CList.vue';
import CFileItem from '@/components/components/dataDisplay/list/fileList/CFileItem.vue';
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
	name: 'CFileList',
	props: {
		files: {
			type: Array,
			default() {
				return null;
			},
		},
		isRemovable: {
			type: Boolean,
			default: false,
		},
		full: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['clickFileDownloadIcon', 'clickFileItemContent', 'clickFileTrashIcon', 'clickFileItem'],
	setup(props, { emit }) {
		const { full } = toRefs(props);
		const computedClass = () => ({ full });
		const handleClickFileDownloadIcon = payload => emit('clickFileDownloadIcon', payload);
		const handleClickFileItemContent = payload => emit('clickFileItemContent', payload);
		const handleClickFileTrashIcon = payload => emit('clickFileTrashIcon', payload);
		const handleClickFileItem = payload => emit('clickFileItem', payload);

		return {
			computedClass,
			handleClickFileDownloadIcon,
			handleClickFileItemContent,
			handleClickFileTrashIcon,
			handleClickFileItem,
		};
	},
	components: { CList, CFileItem },
});
</script>

<style lang="scss" scoped>
.c-file-list--container {
	&.full {
		width: 100%;
	}
}
</style>
