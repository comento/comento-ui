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
import { defineComponent } from 'vue';

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
