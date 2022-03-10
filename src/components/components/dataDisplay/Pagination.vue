<template>
	<pagination
		v-model="sync_page"
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
			default: null,
		},
	},
	computed: {
		sync_page: {
			get() {
				return this.page;
			},
			set(page) {
				this.$emit('update:page', page);
			},
		},
		computedOptions() {
			return { chunk: 5, template: CustomPagination, ...this.options };
		},
	},
	methods: {
		emitPaginate(page) {
			this.$emit('paginate', page);
		},
	},
	components: { pagination },
};
</script>
