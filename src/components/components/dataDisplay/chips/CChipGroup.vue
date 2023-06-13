<template>
	<div class="c-application c-chip-group" :class="[size]">
		<slot />
	</div>
</template>

<script>
import { ChipSizes } from '@/components/components/dataDisplay/chips/CChip.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CChipGroup',
	props: {
		/**
		 * 크기(small, medium, large, xlarge)
		 */
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return ChipSizes.indexOf(value) !== -1;
			},
		},
	},
});
</script>

<style scoped lang="scss">
$margin-small: 4px;
$margin-medium: 6px;
$margin-large: 8px;
$margin-xlarge: 10px;

.c-chip-group {
	@include clearfix();
	&:deep(.c-chip) {
		float: left;
	}

	&.small {
		&:deep(.c-chip) {
			margin-right: $margin-small;
			&:last-child {
				margin-right: 0;
			}
		}
		&:deep(.c-row) {
			.c-style-col {
				padding-right: $margin-small;
			}
		}
	}
	&.medium {
		&:deep(.c-chip) {
			margin-right: $margin-medium;
			&:last-child {
				margin-right: 0;
			}
		}
		&:deep(.c-row) {
			.c-style-col {
				padding-right: $margin-medium;
			}
		}
	}
	&.large {
		&:deep(.c-chip) {
			margin-right: $margin-large;
			&:last-child {
				margin-right: 0;
			}
		}
		&:deep(.c-row) {
			.c-style-col {
				padding-right: $margin-large;
			}
		}
	}

	&.xlarge {
		&:deep(.c-chip) {
			margin-right: $margin-xlarge;
			&:last-child {
				margin-right: 0;
			}
		}
		&:deep(.c-row) {
			.c-style-col {
				padding-right: $margin-xlarge;
			}
		}
	}

	&:deep(.c-row) {
		margin: 0;
		.c-style-col {
			padding: 0;
			&:last-child {
				padding-right: 0;
			}
			.c-chip {
				margin-right: 0;
			}
		}
	}
}
</style>
