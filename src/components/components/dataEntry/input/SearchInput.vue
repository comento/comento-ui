<template>
	<div class="c-application search_input_container" :class="classes">
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
		<div class="search_input_icon_wrapper" @click="resetKeyword()">
			<Icon
				v-if="isTyping && sync_value.length > 0"
				name="IconCloseRoundSmallFill"
				size="medium"
				:color="transparent ? 'gray200' : 'gray300'"
				class="icon_reset"
				role="button"
				tabindex="2"
			/>
		</div>
		<div class="search_input_icon_wrapper left" @click="handleSearch()">
			<IconButton
				role="button"
				tabindex="1"
				icon-name="IconSearchLargeLine"
				size="medium"
				:color="computedIconColor"
				:transparent="transparent"
				class="icon_search"
			/>
		</div>
	</div>
</template>

<script>
import Icon from '@/components/elements/core/icon/Icon';
import IconButton from '@/components/components/general/button/IconButton';
import clickOutside from '@/directives/click-outside';
import uniqueId from '@/utils/unique-id';

/**
 * @displayName c-search-input
 */

export default {
	name: 'SearchInput',
	inheritAttrs: false,
	props: {
		placeholder: {
			type: String,
			default: '내용을 입력해주세요.',
		},
		value: {
			type: [String, Number],
			default: '',
		},
		full: {
			type: Boolean,
			default: false,
		},
		showSearchDropdown: {
			// searchInput에 포커싱되거나, 검색어가 빈값일 때
			type: Boolean,
			default: false,
		},
		transparent: {
			type: Boolean,
			default: false,
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
			return { full: this.full };
		},
		computedTransparent() {
			return { transparent: this.transparent };
		},
		classes() {
			return [this.computedFull, this.computedTransparent, this.computedActive];
		},
		computedIconColor() {
			return this.transparent ? 'gray100' : 'gray500';
		},
		computedActive() {
			return { active: this.sync_value.length > 0 };
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
		IconButton,
	},
	directives: {
		clickOutside,
	},
};
</script>

<style lang="scss" scoped>
.search_input_container {
	@include clearfix();
	@include flexbox();
	@include flex-direction(row);
	@include align-items(center);
	position: relative;

	// focus, typing
	&:focus-within,
	&.active {
		.search_input_icon_wrapper .icon_search {
			opacity: 1;
		}

		// transparent(focus, typing)
		&.transparent {
			.search_input {
				@include background-opacity(white, 0.12);
				color: $gray100;
			}
			.search_input_icon_wrapper .icon_reset {
				opacity: 0.6;
			}
		}
	}

	// transparent
	&.transparent {
		.search_input {
			@include background-opacity(white, 0.06);
			@include placeholder {
				@include color-opacity($gray200, 0.6);
				font-weight: $regular;
			}
		}
	}

	&.full {
		width: 100%;
		label,
		.search_input {
			width: 100%;
		}
	}

	.search_input {
		@include border-radius(4px);
		-webkit-appearance: none;
		@include inline-block();
		vertical-align: top;
		@include transition(all 0.2s ease);
		border: 0;
		background-color: $gray100;
		padding: 10px 36px 10px 36px;
		@include body2();
		width: 226px;
		color: $gray800;

		@include placeholder {
			@include color-opacity($gray400, 0.6);
			font-weight: $regular;
		}

		&-lg {
			height: 48px;
		}
	}
	.search_input_icon_wrapper {
		position: absolute;
		z-index: 1;
		right: 14px;
		top: 50%;
		transform: translateY(-50%);
		@include flexbox();
		@include flex-direction(row);
		@include align-items(center);

		&.left {
			left: 0 !important;
			z-index: 1;
			width: max-content;
		}

		.icon_reset {
			cursor: pointer;
			position: relative;
			margin: 0 4px 0 8px;
			display: block;
			z-index: 2;
		}
		.icon_search {
			cursor: pointer;
			position: relative;
			margin-left: 4px;
			display: block;
			z-index: 2;
			opacity: 0.8;
		}
	}
}
</style>
