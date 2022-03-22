<template>
	<div class="flex justify-center w-full">
		<pagination
			:value="page"
			:records="records"
			:per-page="perPage"
			:options="computedOptions"
			@input="emitPaginate"
		/>
	</div>
</template>

<script>
import pagination from 'vue-pagination-2';
import CustomPagination from '@/components/components/dataDisplay/CustomPagination';

/**
 * @displayName c-pagination
 */
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
