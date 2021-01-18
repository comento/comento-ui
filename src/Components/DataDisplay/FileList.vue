<template>
	<List class="c-file-list--container" spacing>
		<FileItem
			v-for="(item, index) in files"
			:key="`file-${index}`"
			:file="item.file"
			:is-loading="item.isLoading"
			:index="index"
			:is-edit="isEdit"
			@clickFileDownloadIcon="handleClickFileDownloadIcon"
			@clickItemContent="handleClickItemContent"
			@clickTrashIcon="handleClickTrashIcon"
		></FileItem>
	</List>
</template>

<script>
import List from '@/src/Components/DataDisplay/List';
import FileItem from '@/src/Components/DataDisplay/FileItem';
export default {
	name: 'FileList',
	props: {
		files: {
			type: Array,
			default() {
				return null;
			},
		},
		isEdit: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		handleClickFileDownloadIcon(payload) {
			this.$emit('clickFileDownloadIcon', payload);
		},
		handleClickItemContent(payload) {
			this.$emit('clickItemContent', payload);
		},
		handleClickTrashIcon(payload) {
			this.$emit('clickTrashIcon', payload);
		},
	},
	components: { List, FileItem },
};
</script>

<style lang="scss" scoped></style>
