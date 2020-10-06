<template>
	<span class="c-application c-chip" :class="[computedType, computedColor, computedSize]">
		<slot />
	</span>
</template>

<script>
export default {
	name: 'Chip',
	props: {
		/*fill, outlined, filter*/
		type: {
			type: String,
			default: 'fill',
		},
		/*gray , green*/
		color: {
			type: String,
			default: 'gray',
		},
		/*chip 사이즈 (medium, large)*/
		size: {
			type: String,
			default: 'medium',
		},
	},
	computed: {
		computedType() {
			return `${this.type}`;
		},
		computedColor() {
			return `${this.color}`;
		},
		computedSize() {
			return `${this.size}`;
		},
	},
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

.c-chip {
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	&.gray {
		color: $gray500;
		border: 1px solid $gray500;
		background-color: $gray100;
		&.outlined {
			color: $gray500;
			border: 1px solid $gray400;
			background-color: $white;
		}
	}
	&.primary {
		color: $white;
		border: 1px solid $primary;
		background-color: $primary;
		&.outlined {
			color: $primary;
			border: 1px solid $primary;
			background-color: $white;
		}
	}
	/*사이즈*/
	&.small {
		@include caption2();
		height: 16px;
		padding: 0 4px;
		font-weight: normal;
	}
	&.medium {
		@include caption1();
		height: 24px;
		padding: 5.5px 8px;
		font-weight: normal;
	}
	&.large {
		@include body2();
		height: 30px;
		padding: 4.5px 10px;
		font-weight: normal;
	}
}
</style>
