<template>
	<div class="c-application c-file-list--container">
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
	</div>
</template>

<script>
import FileItem from './FileItem';
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
		type: {
			type: String,
			default: 'assignment',
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
	components: { FileItem },
};
</script>

<style lang="scss" scoped>
.c-file {
	&-list {
		&--container {
			width: 100%;
			padding: 4px 0;
		}
	}
}
</style>
