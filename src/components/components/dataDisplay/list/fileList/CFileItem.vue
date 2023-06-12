<template>
	<CListItem class="c-application c-file-item--container" @click="handleClickFileItem({ file, index })">
		<div class="c-file-item--content" @click.stop="handleClickFileItemContent({ file, index })">
			<template v-if="isRemovable">
				<CLoader v-if="isLoading" class="c-file-item--content-icon" size="small" />
				<CIcon v-else class="c-file-item--content-icon" name="IconFileSmallLine" color="gray700" />
			</template>
			<CTypography type="body2" color="gray700" class="text-truncate">
				{{ file.title || file.name }}
			</CTypography>
		</div>
		<CIcon
			v-if="isRemovable"
			name="IconTrashSmallLine"
			color="gray500"
			style="flex-shrink: 0"
			@click.stop="handleClickFileTrashIcon({ file, index })"
		/>
		<template v-else>
			<CLoader v-if="isLoading" size="small" />
			<CIcon
				v-else
				name="IconDownloadSmallLine"
				color="gray500"
				@click.stop="handleClickFileDownloadIcon({ file, index })"
			/>
		</template>
	</CListItem>
</template>

<script>
import CListItem from '@/components/components/dataDisplay/list/list/CListItem.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import CLoader from '@/components/components/other/CLoader.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent } from 'vue';

export default defineComponent({
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
		isRemovable: {
			type: Boolean,
			default: false,
		},
		isLoading: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['clickFileItem', 'clickFileDownloadIcon', 'clickFileItemContent', 'clickFileTrashIcon'],
	setup(props, { emit }) {
		const handleClickFileItem = ({ file, index }) => emit('clickFileItem', { file, index });
		const handleClickFileDownloadIcon = ({ file, index }) => emit('clickFileDownloadIcon', { file, index });
		const handleClickFileItemContent = ({ file, index }) => emit('clickFileItemContent', { file, index });
		const handleClickFileTrashIcon = ({ file, index }) => emit('clickFileTrashIcon', { file, index });

		return {
			handleClickFileItem,
			handleClickFileDownloadIcon,
			handleClickFileItemContent,
			handleClickFileTrashIcon,
		};
	},
	components: { CIcon, CLoader, CTypography, CListItem },
});
</script>

<style lang="scss" scoped>
.c-file {
	&-item {
		&--content {
			height: 20px;
			cursor: pointer;
			@include flexbox();
			@include align-items(center);
			overflow: hidden;
			&-icon {
				cursor: pointer;
				flex-shrink: 0;
				margin-right: 4px;
			}
		}
	}
}
</style>
