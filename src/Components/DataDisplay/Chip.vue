<template>
	<span
		class="c-application c-chip"
		:class="[computedType, computedColor, computedSize, computedFull]"
		:style="[computedPadding]"
	>
		<slot />
	</span>
</template>

<script>
import paddingMixin from '../../../mixins/paddingMixin';
export const ChipColors = ['secondary', 'primary', 'success'];
export const ChipSizes = ['small', 'medium', 'large'];
export default {
	name: 'Chip',
	mixins: [paddingMixin],
	props: {
		/*fill, outlined, filter*/
		type: {
			type: String,
			default: 'fill',
		},
		color: {
			type: String,
			default: 'secondary',
			validator(value) {
				return ChipColors.indexOf(value) !== -1;
			},
		},
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return ChipSizes.indexOf(value) !== -1;
			},
		},
		full: {
			type: Boolean,
			default: false,
		},
		paddings: {
			type: Array,
			default() {
				return null;
			},
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
		computedFull() {
			return {
				full: this.full,
			};
		},
		computedPadding() {
			if (this.paddings) {
				return {
					...this.$_setPadding(this.paddings),
				};
			} else {
				return null;
			}
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
	text-align: center;
	&.secondary {
		color: $gray500;
		border: 1px solid $gray100;
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
	&.success {
		color: $white;
		border: 1px solid $success;
		background-color: $success;
		&.outlined {
			color: $success;
			border: 1px solid $success;
			background-color: $white;
		}
	}
	/*사이즈*/
	&.small {
		@include caption2();
		height: 16px;
		padding: 0 4px;
		font-weight: normal;
		&.filter {
			border-radius: 10px;
			padding: 3px 4px;
		}
	}
	&.medium {
		@include caption1();
		height: 24px;
		padding: 5.5px 8px;
		font-weight: normal;
		&.filter {
			border-radius: 12px;
			padding: 5.5px 10px;
		}
	}
	&.large {
		@include body2();
		height: 30px;
		padding: 4.5px 10px;
		font-weight: normal;
		&.filter {
			border-radius: 15px;
			padding: 5px 14px;
		}
	}
	&.filter {
		border: 0;
	}
	&.full {
		width: 100%;
	}
}
</style>
