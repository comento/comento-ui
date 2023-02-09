<template>
	<div class="search-top-bar" :class="{ transparent: isTransparent }">
		<NewGrid class="py-12">
			<NewRow>
				<NewCol :col-sm="12">
					<div class="flex flex-row justify-content-between align-items-center">
						<div class="search-top-bar-icon-wrapper">
							<Icon
								name="IconBackwardLargeLine"
								size="large"
								color="gray800"
								class="mr-16"
								@click="$emit('back')"
							/>
						</div>
						<SearchInput
							ref="searchInput"
							full
							:value.sync="sync_searchKeyword"
							:placeholder="searchPlaceholder"
							:show-search-dropdown.sync="sync_showSearchDropdown"
							:transparent="isTransparent"
							data-cy="searchInput"
							@search="search"
							@autocomplete="autocomplete"
						>
						</SearchInput>
					</div>
				</NewCol>
			</NewRow>
		</NewGrid>
	</div>
</template>

<script>
import NewGrid from '@/components/layout/NewGrid';
import NewRow from '@/components/layout/NewRow';
import NewCol from '@/components/layout/NewCol';
import Icon from '@/components/elements/core/icon/Icon';
import SearchInput from '@/components/components/dataEntry/input/SearchInput';

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
	},
	computed: {
		sync_showSearchDropdown: {
			get() {
				return this.showDropdown;
			},
			set(value) {
				return this.$emit('update:showDropdown', value);
			},
		},
		sync_searchKeyword: {
			get() {
				return this.searchKeyword;
			},
			set(value) {
				return this.$emit('update:searchKeyword', value);
			},
		},
	},
	methods: {
		search() {
			this.$emit('search');
		},
		autocomplete() {
			this.$emit('autocomplete', this.sync_searchKeyword);
		},
	},
	components: { SearchInput, NewCol, NewRow, NewGrid, Icon },
};
</script>

<style lang="scss" scoped>
.search-top-bar {
	width: 100%;
	height: 64px;
	position: fixed;
	top: 0;
	left: 0;
	background-color: $white;
	//padding: 12px 16px;
	z-index: 100;

	&.transparent {
		background-color: transparent;
	}

	&-icon {
		&-wrapper {
			@include flexbox();
		}
	}
}

.search {
	width: 300px;
	height: 40px;
	background-color: $gray100;
	border-radius: 4px;
	display: flex;
	align-items: center;

	& input {
		border: none;
		background-color: transparent;
		padding: 0;
		@include body2();
		color: $gray850;

		&::placeholder {
			color: $gray400;
		}
	}
}
</style>
