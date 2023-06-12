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
import CustomPagination from '@/components/components/dataDisplay/CCustomPagination.vue';
import { defineComponent, toRefs, computed } from 'vue';

export default defineComponent({
	name: 'CPagination',
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
	emits: ['paginate'],
	setup(props, { emit }) {
		const { options } = toRefs(props);

		const computedOptions = computed(() => {
			return { chunk: 5, template: CustomPagination, ...options.value };
		});

		const emitPaginate = page => {
			emit('paginate', page);
		};

		return { computedOptions, emitPaginate };
	},
	components: { pagination },
});
</script>
