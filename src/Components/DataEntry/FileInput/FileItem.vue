<template>
	<div class="c-application c-file-item--container">
		<div class="c-file-item--content" @click="handleClickItemContent({ file, index })">
			<Typography type="caption1" color="gray700">{{ file.title || file.name }}</Typography>
		</div>
		<Icon
			v-if="isEdit"
			name="IconTrashMediumLineLight"
			size="medium"
			color="gray500"
			@click="handleClickTrashIcon({ file, index })"
		/>
		<Icon
			v-else-if="!isLoading"
			name="IconDownloadMediumLineLight"
			size="medium"
			color="gray500"
			@click="handleClickFileDownloadIcon({ file, index })"
		/>
		<Loader v-else></Loader>
	</div>
</template>

<script>
import Icon from '@/src/Elements/Core/Icon/Icon';
import Loader from '@/src/Components/Other/Loader';
import Typography from '@/src/Elements/Core/Typography/Typography';
export default {
	name: 'FileItem',
	props: {
		file: {
			type: File,
			default: null,
		},
		// 파일 리스트 내부 인덱스
		index: {
			type: Number,
			default: -1,
		},
		// 수정인지 다운로드인지
		isEdit: {
			type: Boolean,
			default: false,
		},
		isLoading: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		handleClickFileDownloadIcon({ file, index }) {
			this.$emit('clickFileDownloadIcon', { file, index });
		},
		handleClickItemContent({ file, index }) {
			this.$emit('clickItemContent', { file, index });
		},
		handleClickTrashIcon({ file, index }) {
			this.$emit('clickTrashIcon', { file, index });
		},
	},
	components: { Icon, Loader, Typography },
};
</script>

<style lang="scss" scoped>
.c-file {
	&-item {
		&--container {
			display: flex;
			height: 26px;
			align-items: center;
			padding: 8px 12px 8px 6px;
			&:hover {
				background-color: $gray100;
			}
		}
		&--content {
			width: 100%;
			cursor: pointer;
		}
	}
}
</style>
