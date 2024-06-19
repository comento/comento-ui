<template>
	<div class="c-application c-file-input" :class="classes">
		<label for="files">
			<FileButton :text="buttonText" :disabled="disabled" @clickFileButton="handleClickFileButton" />
			<input
				id="files"
				ref="files"
				type="file"
				name="files"
				style="display: none"
				:accept="accept"
				:multiple="multiple"
				:disabled="disabled"
				@change="handleFilesUpload"
				@click="handleFileInputClick"
			/>
		</label>
	</div>
</template>

<script>
import customValidator from '@/utils/custom-validator.js';
import FileButton from '@/components/button/FileButton.vue';

/**
 * @displayName c-file-input
 */
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
		buttonText: {
			type: String,
			default: '파일 첨부하기',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		classes() {
			return {
				full: this.full,
				disabled: this.disabled,
			};
		},
	},
	methods: {
		handleFilesUpload() {
			const uploadedFiles = this.$refs.files.files;
			this.$emit('uploadFiles', uploadedFiles);
		},
		handleClickFileButton() {
			this.$refs.files.click();
		},
		handleFileInputClick(event) {
			event.target.value = null;
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
		&:hover {
			background-color: $gray100;
		}
		&.full {
			width: 100%;
		}
		&.disabled {
			label {
				cursor: not-allowed;
			}
		}
	}
}
label {
	cursor: pointer;
}
</style>
