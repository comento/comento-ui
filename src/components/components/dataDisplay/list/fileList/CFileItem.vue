<template>
	<CListItem class="c-application c-file-item--container" @click="handleClickFileItem({ file, index })">
		<div class="c-file-item--content" @click="handleClickFileItemContent({ file, index })">
			<CTypography type="caption1" color="gray700">{{ file.title || file.name }}</CTypography>
		</div>
		<CIcon
			v-if="isEdit"
			name="IconTrashMediumLineLight"
			color="gray500"
			@click="handleClickFileTrashIcon({ file, index })"
		/>
		<CIcon
			v-else-if="!isLoading"
			name="IconDownloadMediumLineLight"
			color="gray500"
			@click="handleClickFileDownloadIcon({ file, index })"
		/>
		<CLoader v-else size="small"></CLoader>
	</CListItem>
</template>

<script>
import CListItem from '@/components/components/dataDisplay/list/list/CListItem';
import CIcon from '@/components/elements/core/icon/CIcon';
import CLoader from '@/components/components/other/CLoader';
import CTypography from '@/components/elements/core/typography/CTypography';

export default {
	name: 'CFileItem',
	props: {
		file: {
			// 파일은 내장 타입이 없음.
		},
		/**
		 * 파일 리스트 내부 인덱스
		 */
		index: {
			type: Number,
			default: -1,
		},
		/**
		 * 수정 or 다운로드
		 */
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
	components: { CIcon, CLoader, CTypography, CListItem },
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
