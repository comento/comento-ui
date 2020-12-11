<template>
	<div class="c-chip-group" :class="[computedSize]">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'Chip',
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
		}
	}
	&.medium {
		&::v-deep .c-chip {
			margin-right: 6px;
		}
	}
	&.large {
		&::v-deep .c-chip {
			margin-right: 8px;
		}
	}
}
</style>
