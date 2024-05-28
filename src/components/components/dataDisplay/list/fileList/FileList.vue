<template>
	<List class="c-file-list--container" :class="computedClass">
		<FileItem
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
	</List>
</template>

<script>
import List from '@/components/components/dataDisplay/list/list/List.vue';
import FileItem from '@/components/components/dataDisplay/list/fileList/FileItem.vue';

/**
 * @displayName c-file-list
 */
export default {
	name: 'FileList',
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
	computed: {
		computedClass() {
			return { full: this.full };
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
	components: { List, FileItem },
};
</script>

<style lang="scss" scoped>
.c-file-list--container {
	&.full {
		width: 100%;
	}
}
</style>
