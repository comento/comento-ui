<template>
	<ListItem class="c-application px-10" size="large" @click="handleClickLinkItem({ link, index })">
		<div class="c-file-input-link-item--content" @click.stop="handleClickLinkItemContent({ link, index })">
			<div class="icon-wrapper">
				<img src="https://cdn.comento.kr/images/illust/illust-link.svg" alt="" />
			</div>
			<a :href="link" target="_blank" class="text-truncate linkified">
				{{ link }}
			</a>
		</div>
		<Icon
			v-if="isRemovable"
			name="IconCloseSmallLine"
			color="gray500"
			style="flex-shrink: 0"
			@click.stop="handleClickLinkTrashIcon({ link, index })"
		/>
	</ListItem>
</template>

<script>
import ListItem from '@/components/list/list/ListItem.vue';
import Icon from '@/components/icon/Icon.vue';

/**
 * @displayName c-file-input-link-item
 */
export default {
	name: 'FileInputLinkItem',
	props: {
		link: {
			type: String,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
		isRemovable: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		handleClickLinkItem({ link, index }) {
			this.$emit('click-item', { link, index });
		},
		handleClickLinkItemContent({ link, index }) {
			this.$emit('click-item-content', { link, index });
		},
		handleClickLinkTrashIcon({ link, index }) {
			this.$emit('remove-item', { link, index });
		},
	},
	components: {
		Icon,
		ListItem,
	},
};
</script>

<style lang="scss" scoped>
.c-file-input-link-item {
	&--content {
		height: 20px;
		cursor: pointer;
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
