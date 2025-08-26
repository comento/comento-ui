<template>
	<ListItem class="c-application px-10" size="large" @click="handleClickFileItem({ file, index })">
		<div class="c-file-input-file-item--content" @click.stop="handleClickFileItemContent({ file, index })">
			<div class="icon-wrapper">
				<Loader v-if="isRemovable && isLoading" size="small" />
				<Icon v-else-if="isRemovable && isError" name="IconExclamationSmallFill" color="accent" />
				<img v-else src="https://cdn.comento.kr/images/illust/illust-file.svg" alt="" />
			</div>
			<Typography
				type="body2"
				:color="isRemovable && isError ? 'accent' : 'gray700'"
				:font-weight="400"
				class="text-truncate"
			>
				{{ file.title || file.name }}
			</Typography>
		</div>
		<Icon
			v-if="isRemovable"
			name="IconCloseSmallLine"
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
import ListItem from '@/components/list/list/ListItem.vue';
import Icon from '@/components/icon/Icon.vue';
import Loader from '@/components/loader/Loader.vue';
import Typography from '@/components/typography/Typography.vue';

/**
 * @displayName c-file-input-file-item
 */
export default {
	name: 'FileInputFileItem',
	props: {
		file: {
			// 파일은 내장 타입이 없음.
			required: true,
		},
		/**
		 * 파일 리스트 내부 인덱스
		 */
		index: {
			type: Number,
			default: -1,
			required: true,
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
		isError: {
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
.c-file-input-file-item {
	&--content {
		height: 20px;
		@include flexbox();
		@include align-items(center);
		overflow: hidden;
		gap: 8px;
	}
}

.icon-wrapper {
	width: 20px;
	height: 20px;
	@include flexbox();
	@include align-items(center);
	@include justify-content(center);
	flex: none;
}
</style>
