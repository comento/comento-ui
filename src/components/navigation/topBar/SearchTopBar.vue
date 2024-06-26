<template>
	<div class="c-search-top-bar" :class="{ transparent: isTransparent }">
		<NewGrid class="py-10">
			<NewRow>
				<NewCol :col-sm="12">
					<div class="c-search-top-bar-container">
						<div class="c-search-top-bar-icon-wrapper">
							<Icon
								:name="`Icon${isClose ? 'Close' : 'Backward'}LargeLine`"
								size="large"
								color="gray800"
								class="mr-16"
								@click="$emit('click-button')"
							/>
						</div>
						<SearchInput
							ref="searchInput"
							full
							:value.sync="sync_keyword"
							:placeholder="placeholder"
							:show-search-dropdown.sync="sync_showDropdown"
							:transparent="isTransparent"
							data-cy="searchInput"
							@search="search"
							@autocomplete="autocomplete"
							@click="clickSearchInput"
						>
						</SearchInput>
					</div>
				</NewCol>
			</NewRow>
		</NewGrid>
	</div>
</template>

<script>
import NewGrid from '@/components/grid/NewGrid.vue';
import NewRow from '@/components/grid/NewRow.vue';
import NewCol from '@/components/grid/NewCol.vue';
import Icon from '@/components/icon/Icon.vue';
import SearchInput from '@/components/input/SearchInput.vue';

/**
 * @displayName c-search-top-bar
 */

export default {
	name: 'SearchTopBar',
	props: {
		isTransparent: {
			type: Boolean,
			default: false,
		},
		keyword: {
			type: String,
			default: '',
		},
		placeholder: {
			type: String,
			default: '',
		},
		showDropdown: {
			type: Boolean,
			default: false,
		},
		isClose: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		sync_showDropdown: {
			get() {
				return this.showDropdown;
			},
			set(value) {
				return this.$emit('update:showDropdown', value);
			},
		},
		sync_keyword: {
			get() {
				return this.keyword;
			},
			set(value) {
				return this.$emit('update:keyword', value);
			},
		},
	},
	methods: {
		search() {
			this.$emit('search');
		},
		autocomplete() {
			this.$emit('autocomplete', this.sync_keyword);
		},
		clickSearchInput() {
			this.$emit('click-search-input');
		},
	},
	components: { SearchInput, NewCol, NewRow, NewGrid, Icon },
};
</script>

<style lang="scss" scoped>
.c-search-top-bar {
	width: 100%;
	height: 52px;
	position: fixed;
	top: 0;
	left: 0;
	background-color: $white;
	z-index: 90;

	&-container {
		@include flexbox();
		@include justify-content(space-between);
		@include align-items(center);
	}

	&.transparent {
		background-color: transparent;
	}

	&-icon {
		&-wrapper {
			@include flexbox();
		}
	}
}
</style>
