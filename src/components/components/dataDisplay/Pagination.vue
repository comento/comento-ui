<template>
	<pagination
		class="pagination-group"
		:page="page"
		:records="records"
		:per-page="perPage"
		:options="computedOptions"
		@paginate="emitPaginate"
	/>
</template>

<script>
import pagination from 'vue-pagination-2';
import CustomPagination from '@/components/components/dataDisplay/CustomPagination';
export default {
	name: 'Pagination',
	props: {
		page: {
			type: Number,
			default: 1,
		},
		records: {
			type: Number,
			default: 0,
		},
		perPage: {
			type: Number,
			default: 10,
		},
		options: {
			type: Object,
			default: () => {},
		},
	},
	computed: {
		computedOptions() {
			return { template: CustomPagination };
		},
	},
	methods: {
		emitPaginate() {
			this.$emit('paginate');
		},
	},
	components: { pagination },
};
</script>

<style lang="scss" scoped>
.pagination-group {
	&::v-deep nav {
		ul {
			> li {
				display: inline-block;
			}
			.VuePagination__pagination-item {
				text-align: center;

				> a {
					display: block;
					min-width: 25px;
					height: 25px;
					cursor: pointer;
					@include body2();
					line-height: 25px !important;
				}
				&.active {
					background-color: $success;
					border-radius: 4px;
					> a {
						color: white;
					}
				}
				&.disabled {
					cursor: not-allowed;
					color: $gray200;
					//display: none;
				}
				&-prev-page,
				&-next-page {
					/*display: none;*/
				}
				&-prev-chunk,
				&-next-chunk {
					// 안쓰는 버튼이라 가림
					display: none;
					background: $gray100;
					margin: 0 5px;
				}
			}
		}
		.VuePagination__count {
			display: none;
		}
	}
}
</style>
