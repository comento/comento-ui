<template>
	<ListItem class="c-application c-file-item--container" @click="handleClickFileItem({ file, index })">
		<div class="c-file-item--content" @click="handleClickFileItemContent({ file, index })">
			<Icon v-if="isEdit" name="IconFileMediumLineLight" class="mr-4" color="gray500" />
			<Typography type="caption1" color="gray700">{{ file.title || file.name }}</Typography>
		</div>
		<Icon
			v-if="isEdit"
			name="IconTrashMediumLineLight"
			color="gray500"
			@click="handleClickFileTrashIcon({ file, index })"
		/>
		<Icon
			v-else-if="!isLoading"
			name="IconDownloadMediumLineLight"
			color="gray500"
			@click="handleClickFileDownloadIcon({ file, index })"
		/>
		<Loader v-else size="small"></Loader>
	</ListItem>
</template>

<script>
import ListItem from '@/src/components/components/dataDisplay/list/list/ListItem';
import Icon from '@/src/components/elements/core/icon/Icon';
import Loader from '@/src/components/components/other/Loader';
import Typography from '@/src/components/elements/core/typography/Typography';

export default {
	name: 'FileItem',
	props: {
		// 파일은 내장 타입이 없음.
		file: {},
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
		handleClickFileItem({ file, index }) {
			this.$emit('clickFileItem', { file, index });
		},
		handleClickFileDownloadIcon({ file, index }) {
			this.$emit('clickFileDownloadIcon', { file, index });
		},
		handleClickFileItemContent({ file, index }) {
			this.$emit('clickFileItemContent', { file, index });
		},
		handleClickFileTrashIcon({ file, index }) {
			this.$emit('clickFileTrashIcon', { file, index });
		},
	},
	components: { Icon, Loader, Typography, ListItem },
};
</script>

<style lang="scss" scoped>
.c-file {
	&-item {
		&--content {
			width: 100%;
			cursor: pointer;
			@include flexbox();
			@include align-items(center);
		}
	}
}
</style>
