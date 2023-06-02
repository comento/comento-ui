<template>
	<CTypography :type="typographyInfo.type" :color="typographyInfo.color" class="c-application c-label">
		<slot />
	</CTypography>
</template>

<script>
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent } from 'vue';

const DATA_ENTRY = 'dataEntry';
const DATA_DISPLAY = 'dataDisplay';
export const labelTypes = [DATA_ENTRY, DATA_DISPLAY];

export default defineComponent({
	name: 'CLabel',
	props: {
		/**
		 * 타입(dataEntry, dataDisplay)
		 */
		type: {
			type: String,
			default: DATA_ENTRY,
			validator(value) {
				return labelTypes.indexOf(value) !== -1;
			},
		},
	},
	computed: {
		typographyInfo() {
			return {
				[DATA_ENTRY]: {
					type: 'body2',
					color: 'gray600',
				},
				[DATA_DISPLAY]: {
					type: 'caption1',
					color: 'gray400',
				},
			}[this.type];
		},
	},
	components: { CTypography },
});
</script>

<style scoped lang="scss">
.c-label {
	display: inline-block;
	padding: 0 4px;
}
</style>
