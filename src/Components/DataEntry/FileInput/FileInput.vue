<template>
	<div class="c-application c-file-input" :class="classes">
		<label for="files">
			<FileButton @clickFileButton="clickFileButton"></FileButton>
			<input
				id="files"
				ref="files"
				type="file"
				name="files"
				style="display: none"
				:accept="accept"
				:multiple="multiple"
				@change="handleFilesUpload"
			/>
		</label>
	</div>
</template>

<script>
import customValidator from '@/utils/custom-validator.js';
import FileButton from '@/src/Components/DataEntry/FileInput/FileButton';
export default {
	name: 'FileInput',
	props: {
		accept: {
			type: String,
			// TODO 정규식으로 검사?
			validator(value) {
				return customValidator(value, typeof value === 'string', 'FileInput', 'accept');
			},
		},
		multiple: {
			type: Boolean,
			default: false,
			validator(value) {
				return customValidator(value, typeof value === 'boolean', 'FileInput', 'multiple');
			},
		},
		full: {
			type: Boolean,
			default: false,
			validator(value) {
				return customValidator(value, typeof value === 'boolean', 'FileInput', 'full');
			},
		},
	},
	computed: {
		classes() {
			return {
				full: this.full,
			};
		},
	},
	methods: {
		handleFilesUpload() {
			const uploadedFiles = this.$refs.files.files;
			this.$emit('uploadFiles', uploadedFiles);
		},
		clickFileButton() {
			this.$refs.files.click();
		},
	},
	components: {
		FileButton,
	},
};
</script>

<style lang="scss" scoped>
.c-file {
	&-input {
		&.full {
			width: 100%;
		}
	}
}
label {
	width: 100%;
}
</style>
