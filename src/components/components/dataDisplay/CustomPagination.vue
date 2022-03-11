<template>
	<div class="VuePagination" :class="props.theme.wrapper">
		<nav :class="props.theme.nav">
			<ul v-show="props.showPagination" class="pagination--row" :class="props.theme.list">
				<li
					v-if="props.hasEdgeNav"
					class="pagination--button"
					:class="props.theme.firstPage"
					@click="props.setFirstPage"
				>
					<a v-bind="{ ...props.aProps, ...props.firstPageProps }">{{ props.texts.first }}</a>
				</li>

				<li :class="props.theme.prev" class="pagination--button" @click="props.setPrevPage">
					<Icon
						class="pagination--icon"
						:class="computedPrevClass"
						name="IconArrowMediumLine"
						:rotate="270"
					/>
				</li>

				<li
					v-for="page in props.pages"
					:key="page"
					class="pagination--button"
					:class="props.pageClasses(page)"
					v-on="props.pageEvents(page)"
				>
					<a v-bind="props.aProps" :class="props.theme.link">{{ page }}</a>
				</li>

				<li :class="props.theme.next" class="pagination--button" @click="props.setNextPage">
					<Icon class="pagination--icon" :class="computedNextClass" name="IconArrowMediumLine" :rotate="90" />
				</li>

				<li
					v-if="props.hasEdgeNav"
					class="pagination--button"
					:class="props.theme.lastPage"
					@click="props.setLastPage"
				>
					<a v-bind="{ ...props.aProps, ...props.lastPageProps }">{{ props.texts.last }}</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import Icon from '@/components/elements/core/icon/Icon';

export default {
	name: 'CustomPagination',
	props: ['props'],
	computed: {
		computedPrevClass() {
			return { 'pagination--icon-disabled': this.props.prevProps.disabled };
		},
		computedNextClass() {
			return { 'pagination--icon-disabled': this.props.nextProps.disabled };
		},
	},
	components: { Icon },
};
</script>
<style lang="scss" scoped>
.pagination {
	&--row {
		list-style-type: none;
	}
	&--button {
		float: left;
		text-align: center;
		min-width: 24px;
		height: 24px;
		margin-right: 2px;
		border-radius: 6px;
		> a {
			@include body2();
			display: block;
			cursor: pointer;
			line-height: 24px !important;
			text-decoration: none;
			color: $info;
			font-weight: $regular;
		}
		&:hover {
			background-color: $gray100;
		}
		&.active {
			> a {
				color: $primary;
				font-weight: $semi-bold;
			}
		}
	}
	&--icon {
		margin-top: 4px;
		cursor: pointer;
		fill: $gray800;
		&-disabled {
			cursor: not-allowed;
			fill: $gray300;
		}
	}
}
</style>
