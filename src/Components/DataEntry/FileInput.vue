<template>
	<label for="files">
		<Button size="large" color="gray" type="outlined" full @click="clickFileButton">
			<template v-slot:left-icon>
				<Icon name="plus_large_line" size="large" color="gray500"></Icon>
			</template>
			파일 첨부하기
		</Button>
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
</template>

<script>
import Button from '../Button/Button';
import customValidator from '@/utils/custom-validator.js';
export default {
	name: 'FileInput',
	props: {
		accept: {
			type: String,
			default:
				'.jpg,.jpeg,.bmp,.png,.doc,.docx,.csv,.rtf,.xlsx,.xls,.txt,.pdf,.ppt,.pptx,.zip,.alz,.7z,.rar,.hwp',
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
	},
	methods: {
		handleFilesUpload() {
			const uploadedFiles = this.$refs.files.files;
			this.emit('uploadFiles', uploadedFiles);
		},
		clickFileButton() {
			this.$refs.files.click();
		},
	},
	components: {
		Button,
	},
};
</script>

<style scoped></style>
