<template>
	<div class="c-application c-file-input" :class="classes">
		<label for="files">
			<CFileButton :text="buttonText" :disabled="disabled" @clickFileButton="handleClickFileButton" />
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
import CFileButton from '@/components/components/general/button/CFileButton.vue';
import { defineComponent, toRefs, computed, ref } from 'vue';

export default defineComponent({
	name: 'CFileInput',
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
	emits: ['uploadFiles'],
	setup(props, { emit }) {
		const { full, disabled } = toRefs(props);
		const files = ref(null);

		const classes = computed(() => {
			return {
				full: full.value,
				disabled: disabled.value,
			};
		});

		const handleFilesUpload = () => {
			const uploadedFiles = files.value.files;
			emit('uploadFiles', uploadedFiles);
		};

		const handleClickFileButton = () => files.value.click();

		const handleFileInputClick = event => (event.target.value = null);

		return { files, classes, handleFilesUpload, handleClickFileButton, handleFileInputClick };
	},
	components: {
		CFileButton,
	},
});
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
