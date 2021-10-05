<template>
	<div class="c-application search_input_container" :class="[computedFull]">
		<label :for="`c-search-input-${uid}`">
			<!-- 자동완성 방지용 더미 input -->
			<input style="display: none" aria-hidden="true" />
			<input
				:id="`c-search-input-${uid}`"
				ref="searchInput"
				v-model="sync_value"
				v-click-outside="hideSearchDropdown"
				autocomplete="off"
				type="text"
				class="search_input full"
				:placeholder="placeholder"
				v-bind="$attrs"
				v-on="$listeners"
				@input="handleTyping"
				@click="handleShowSearchDropdown()"
				@keyup="handleAutocomplete()"
				@keypress.enter="handleSearch()"
			/>
		</label>
		<div class="search_input_icon_wrapper">
			<div @click="resetKeyword()">
				<Icon
					v-if="isTyping && sync_value.length > 0"
					name="IconCloseMediumFill"
					size="medium"
					:color="mobileCaseList ? 'gray200' : 'gray400'"
					class="icon_reset"
					role="button"
					tabindex="2"
				/>
			</div>
			<div @click="handleSearch()">
				<Icon
					role="button"
					tabindex="1"
					name="IconSearchLargeLine"
					size="large"
					:color="iconColor"
					class="icon_search ml-8"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Icon from '@/src/Elements/Core/Icon/Icon';
import clickOutside from '@/directives/click-outside';
import uniqueId from '@/utils/unique-id';
import { colors } from '@/src/Elements/Core/Colors';

export default {
	name: 'SearchInput',
	inheritAttrs: false,
	props: {
		placeholder: {
			type: String,
			default: '내용을 입력해주세요.',
		},
		value: [String, Number],
		full: {
			type: Boolean,
			default: false,
		},
		showSearchDropdown: {
			// searchInput에 포커싱되거나, 검색어가 빈값일 때
			type: Boolean,
			default: false,
		},
		iconColor: {
			type: String,
			default: 'green600',
		},
	},
	data: () => ({
		isTyping: false,
		uid: uniqueId(),
	}),
	computed: {
		sync_value: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('update:value', val);
			},
		},
		computedFull() {
			return this.full ? 'full' : '';
		},
		computedColor() {
			if (!this.iconColor) return 'inherit';
			return colors[this.iconColor] ? colors[this.iconColor] : this.iconColor;
		},
		computedStyle() {
			return {
				color: this.computedColor,
				'text-align': this.align,
				'font-weight': this.fontWeight,
			};
		},
	},
	methods: {
		hideSearchDropdown() {
			if (this.showSearchDropdown) this.$emit('update:showSearchDropdown', false);
		},
		handleTyping(e) {
			this.isTyping = true;
			this.sync_value = e.target.value;
		},
		handleAutocomplete() {
			this.$emit('autocomplete');
		},
		resetKeyword() {
			this.sync_value = '';
			this.handleAutocomplete();
			this.isTyping = false;
			this.$refs.searchInput.focus();
		},
		handleSearch() {
			this.$emit('search');
		},
		handleShowSearchDropdown() {
			this.$emit('update:showSearchDropdown', !this.showSearchDropdown);
		},
	},
	components: {
		Icon,
	},
	directives: {
		clickOutside,
	},
};
</script>

<style lang="scss" scoped>
/*@import '@/assets/style/base/main';*/

.search_input_container {
	@include clearfix();
	@include flexbox();
	@include flex-direction(row);
	@include align-items(center);
	position: relative;

	&.full {
		width: 100%;
		label,
		.search_input {
			width: 100%;
		}
	}

	.search_input {
		@include border-radius(2px);
		-webkit-appearance: none;
		@include inline-block();
		vertical-align: top;
		@include transition(all 0.2s ease);
		border: 0;
		background: $gray000;
		padding: 8px 48px 8px 12px;
		@include body2();
		width: 226px;
		color: $gray800;

		@include placeholder {
			color: $gray400;
			font-weight: normal;
		}

		&:focus,
		&:active {
			padding-right: 68px;
		}

		&-lg {
			height: 48px;
		}
	}
	.search_input_icon_wrapper {
		position: absolute;
		z-index: 1;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		@include flexbox();
		@include flex-direction(row);
		@include align-items(center);

		.icon_reset {
			cursor: pointer;
			position: relative;
			margin: 0 8px;
			display: block;
			z-index: 2;
		}
		.icon_search {
			cursor: pointer;
			position: relative;
			margin-right: 12px;
			display: block;
			z-index: 2;
		}
	}
}
</style>
