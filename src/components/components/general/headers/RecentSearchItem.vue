<template>
	<ListItem class="recent-search-item" @click="clickKeyword">
		<div class="recent-search-item-content">
			<Icon name="IconClockSmallLine" class="mr-8" color="gray500" />
			<Typography type="body2" :font-weight="400" color="gray800"> {{ keyword }} </Typography>
		</div>
		<Icon name="IconCloseSmallLine" color="gray300" class="c-pointer" @click.stop="removeKeyword" />
	</ListItem>
</template>

<script>
import Icon from '@/components/elements/core/icon/Icon';
import Typography from '@/components/elements/core/typography/Typography';
import ListItem from '@/components/components/dataDisplay/list/list/ListItem';

export default {
	name: 'RecentSearchItem',
	props: {
		keyword: {
			type: String,
			default: '',
		},
		index: {
			type: Number,
			default: 0,
		},
	},
	methods: {
		removeKeyword() {
			this.$emit('remove-recent', { keyword: this.keyword, index: this.index });
		},
		clickKeyword() {
			this.$emit('click-recent', { keyword: this.keyword, index: this.index });
		},
	},
	components: {
		ListItem,
		Icon,
		Typography,
	},
};
</script>

<style lang="scss" scoped>
.recent-search-item {
	width: 100%;
	@include flexbox();
	@include justify-content(space-between);
	@include align-items(center);

	&-content {
		@include flexbox();
		@include align-items(center);
	}
}
</style>
