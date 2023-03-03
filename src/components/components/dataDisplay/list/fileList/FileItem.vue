<template>
	<ListItem class="c-application c-file-item--container" @click="handleClickFileItem({ file, index })">
		<div class="c-file-item--content" @click.stop="handleClickFileItemContent({ file, index })">
			<template v-if="isRemovable">
				<Loader v-if="isLoading" class="c-file-item--content-icon" size="small" />
				<Icon v-else class="c-file-item--content-icon" name="IconFileSmallLine" color="gray700" />
			</template>
			<Typography type="body2" color="gray700" class="text-truncate">{{ file.title || file.name }}</Typography>
		</div>
		<Icon
			v-if="isRemovable"
			name="IconTrashSmallLine"
			color="gray500"
			style="flex-shrink: 0"
			@click.stop="handleClickFileTrashIcon({ file, index })"
		/>
		<template v-else>
			<Loader v-if="isLoading" size="small" />
			<Icon
				v-else
				name="IconDownloadSmallLine"
				color="gray500"
				@click.stop="handleClickFileDownloadIcon({ file, index })"
			/>
		</template>
	</ListItem>
</template>

<script>
import ListItem from '@/components/components/dataDisplay/list/list/ListItem.vue';
import Icon from '@/components/elements/core/icon/Icon.vue';
import Loader from '@/components/components/other/Loader.vue';
import Typography from '@/components/elements/core/typography/Typography.vue';

/**
 * @displayName c-file-item
 */
export default {
	name: 'FileItem',
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
