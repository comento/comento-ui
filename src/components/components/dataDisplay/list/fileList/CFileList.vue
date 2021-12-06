<template>
	<CList class="c-file-list--container" spacing>
		<CFileItem
			v-for="(item, index) in files"
			:key="`file-${index}`"
			:file="item.file"
			:is-loading="item.isLoading"
			:index="index"
			:is-edit="isEdit"
			@clickFileDownloadIcon="handleClickFileDownloadIcon"
			@clickFileItemContent="handleClickFileItemContent"
			@clickFileItem="handleClickFileItem"
			@clickFileTrashIcon="handleClickFileTrashIcon"
		></CFileItem>
	</CList>
</template>

<script>
import CList from '@/components/components/dataDisplay/list/list/CList';
import CFileItem from '@/components/components/dataDisplay/list/fileList/CFileItem';

export default {
	name: 'CFileList',
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
		handleClickFileItemContent(payload) {
			this.$emit('clickFileItemContent', payload);
		},
		handleClickFileTrashIcon(payload) {
			this.$emit('clickFileTrashIcon', payload);
		},
		handleClickFileItem(payload) {
			this.$emit('clickFileItem', payload);
		},
	},
	components: { CList, CFileItem },
};
</script>

<style lang="scss" scoped></style>
