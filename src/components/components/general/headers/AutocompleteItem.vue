<template>
	<ListItem class="search-auto-complete-item" @click="clickAutocomplete">
		<Icon name="IconSearchSmallLine" class="mr-8" color="gray500" />
		<Typography type="body2" :font-weight="400" v-html="getAutoCompleteColor(keyword)" />
	</ListItem>
</template>

<script>
import ListItem from '@/components/components/dataDisplay/list/list/ListItem';
import Icon from '@/components/elements/core/icon/Icon';
import Typography from '@/components/elements/core/typography/Typography';

/**
 * @displayName c-autocomplete-item
 */

export default {
	name: 'AutocompleteItem',
	props: {
		searchKeyword: {
			type: String,
			default: '',
		},
		keyword: {
			type: String,
			default: '',
		},
	},
	methods: {
		getAutoCompleteColor(text) {
			if (text) {
				if (!this.searchKeyword) {
					return text;
				}
				const tr = this.searchKeyword.split(' ').join('|');
				return text.replace(new RegExp(tr, 'gi'), match => {
					return `<span style="color: #2A7DE1">${match}</span>`;
				});
			}
		},
		clickAutocomplete() {
			this.$emit('click-autocomplete', this.keyword);
		},
	},
	components: { Typography, Icon, ListItem },
};
</script>

<style lang="scss" scoped>
.search-auto-complete {
	&-item {
		&.c-list-item {
			padding: 6px 4px;
			justify-content: flex-start !important;
		}
	}
}
</style>
