<template>
	<ListItem class="c-application px-10" size="large">
		<div class="c-link-item--content" @click.stop="handleClickLinkItemContent({ link, index })">
			<div class="icon-wrapper">
				<img src="https://cdn.comento.kr/images/illust/illust-link.svg" alt="" />
			</div>
			<Typography type="body2" color="gray700" :font-weight="400" class="text-truncate">
				{{ link }}
			</Typography>
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
import Typography from '@/components/typography/Typography.vue';
import Icon from '@/components/icon/Icon.vue';

/**
 * @displayName c-link-item
 */
export default {
	name: 'LinkItem',
	props: {
		index: {
			type: Number,
			default: -1,
		},
		isRemovable: {
			type: Boolean,
			default: false,
		},
		link: {
			type: String,
			required: true,
		},
	},
	methods: {
		handleClickLinkItemContent({ link, index }) {
			this.$emit('clickLinkItemContent', { link, index });
		},
		handleClickLinkTrashIcon({ link, index }) {
			this.$emit('clickLinkTrashIcon', { link, index });
		},
	},
	components: {
		Icon,
		Typography,
		ListItem,
	},
};
</script>

<style lang="scss" scoped>
.c-link {
	&-item {
		&--content {
			height: 20px;
			cursor: pointer;
			@include flexbox();
			@include align-items(center);
			overflow: hidden;
			gap: 8px;
		}
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
