<template>
	<div class="c-application c-chip-group" :class="[computedSize]">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'ChipGroup',
	props: {
		size: {
			type: String,
			default: 'medium',
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
/*@import '@/assets/style/base/main';*/

.c-chip-group {
	@include clearfix();
	&::v-deep .c-chip {
		float: left;
	}
	/*사이즈*/
	&.small {
		&::v-deep .c-chip {
			margin-right: 4px;
			&:last-child {
				margin-right: 0;
			}
		}
		&::v-deep .c-row {
			.c-style-col {
				padding-right: 4px;
			}
		}
	}
	&.medium {
		&::v-deep .c-chip {
			margin-right: 6px;
			&:last-child {
				margin-right: 0;
			}
		}
		&::v-deep .c-row {
			.c-style-col {
				padding-right: 6px;
			}
		}
	}
	&.large {
		&::v-deep .c-chip {
			margin-right: 8px;
			&:last-child {
				margin-right: 0;
			}
		}
		&::v-deep .c-row {
			.c-style-col {
				padding-right: 8px;
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
