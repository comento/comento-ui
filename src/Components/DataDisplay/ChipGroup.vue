<template>
	<div class="c-application c-chip-group" :class="[computedSize]">
		<slot />
	</div>
</template>

<script>
import { ChipSizes } from './Chip';

export default {
	name: 'ChipGroup',
	props: {
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return ChipSizes.indexOf(value) !== -1;
			},
		},
	},
	computed: {
		computedSize() {
			return `${this.size}`;
		},
	},
};
</script>

<style scoped lang="scss">
$margin-small: 4px;
$margin-medium: 6px;
$margin-large: 8px;
$margin-xlarge: 10px;

.c-chip-group {
	@include clearfix();
	&::v-deep .c-chip {
		float: left;
	}
	/*사이즈*/
	&.small {
		&::v-deep .c-chip {
			margin-right: $margin-small;
			&:last-child {
				margin-right: 0;
			}
		}
		&::v-deep .c-row {
			.c-style-col {
				padding-right: $margin-small;
			}
		}
	}
	&.medium {
		&::v-deep .c-chip {
			margin-right: $margin-medium;
			&:last-child {
				margin-right: 0;
			}
		}
		&::v-deep .c-row {
			.c-style-col {
				padding-right: $margin-medium;
			}
		}
	}
	&.large {
		&::v-deep .c-chip {
			margin-right: $margin-large;
			&:last-child {
				margin-right: 0;
			}
		}
		&::v-deep .c-row {
			.c-style-col {
				padding-right: $margin-large;
			}
		}
	}

	&.xlarge {
		&::v-deep .c-chip {
			margin-right: $margin-xlarge;
			&:last-child {
				margin-right: 0;
			}
		}
		&::v-deep .c-row {
			.c-style-col {
				padding-right: $margin-xlarge;
			}
		}
	}

	&::v-deep .c-row {
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
