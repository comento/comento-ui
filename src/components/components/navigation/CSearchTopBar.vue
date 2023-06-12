<template>
	<div class="c-search-top-bar" :class="{ transparent: isTransparent }">
		<CNewGrid class="py-10">
			<CNewRow>
				<CNewCol :col-sm="12">
					<div class="c-search-top-bar-container">
						<div class="c-search-top-bar-icon-wrapper">
							<CIcon
								:name="`Icon${isClose ? 'Close' : 'Backward'}LargeLine`"
								size="large"
								color="gray800"
								class="mr-16"
								@click="$emit('click-button')"
							/>
						</div>
						<CSearchInput
							ref="searchInput"
							v-model:value="syncKeyword"
							v-model:show-search-dropdown="sync_showDropdown"
							full
							:placeholder="placeholder"
							:transparent="isTransparent"
							data-cy="searchInput"
							@search="search"
							@autocomplete="autocomplete"
							@click="clickSearchInput"
						>
						</CSearchInput>
					</div>
				</CNewCol>
			</CNewRow>
		</CNewGrid>
	</div>
</template>

<script>
import CNewGrid from '@/components/layout/CNewGrid.vue';
import CNewRow from '@/components/layout/CNewRow.vue';
import CNewCol from '@/components/layout/CNewCol.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import CSearchInput from '@/components/components/dataEntry/input/CSearchInput.vue';
import { defineComponent, toRefs, computed } from 'vue';

export default defineComponent({
	name: 'CSearchTopBar',
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
	emits: ['click-button', 'update:showDropdown', 'update:keyword', 'search', 'autocomplete', 'click-search-input'],
	setup(props, { emit }) {
		const { showDropdown, keyword } = toRefs(props);
		const sync_showDropdown = computed({
			get() {
				return showDropdown.value;
			},
			set(value) {
				emit('update:showDropdown', value);
			},
		});

		const syncKeyword = computed({
			get() {
				return keyword.value;
			},
			set(value) {
				emit('update:keyword', value);
			},
		});

		const search = () => {
			emit('search');
		};

		const autocomplete = () => {
			emit('autocomplete', syncKeyword.value);
		};

		const clickSearchInput = () => {
			emit('click-search-input');
		};

		return {
			sync_showDropdown,
			syncKeyword,
			search,
			autocomplete,
			clickSearchInput,
		};
	},
	components: { CSearchInput, CNewCol, CNewRow, CNewGrid, CIcon },
});
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
