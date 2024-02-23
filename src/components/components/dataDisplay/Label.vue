<template>
	<Typography :type="typographyInfo.type" :color="typographyInfo.color" class="c-application c-label">
		<slot />
	</Typography>
</template>

<script>
import Typography from '@/components/elements/core/typography/Typography.vue';

const DATA_ENTRY = 'dataEntry';
const DATA_DISPLAY = 'dataDisplay';
export const labelTypes = [DATA_ENTRY, DATA_DISPLAY];

/**
 * @displayName c-label
 */
export default {
	name: 'Label',
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
	components: { Typography },
};
</script>

<style scoped lang="scss">
.c-label {
	display: inline-block;
	padding: 0 4px;
}
</style>
