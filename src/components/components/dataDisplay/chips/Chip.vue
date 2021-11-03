<template>
	<span
		class="c-application c-chip"
		:class="[computedType, computedColor, computedSize, computedFull, computedTransparent]"
		:style="[computedPadding]"
		v-on="$listeners"
	>
		<slot />
	</span>
</template>

<script>
import paddingMixin from '../../../../mixins/paddingMixin';
export const ChipColors = ['secondary', 'primary', 'success'];
export const ChipSizes = ['small', 'medium', 'large', 'xlarge'];
export const ChipTypes = ['fill', 'outlined', 'oval-fill', 'oval-outline'];

/**
 * 작은 정보를 전달하기 위해 사용
 * @displayName c-chip
 */
export default {
	name: 'Chip',
	mixins: [paddingMixin],
	props: {
		/**
		 * 타입(fill, outlined, oval-fill, oval-outline)
		 */
		type: {
			type: String,
			default: 'fill',
			validator(value) {
				return ChipTypes.indexOf(value) !== -1;
			},
		},
		/**
		 * 색상(secondary, primary, success)
		 */
		color: {
			type: String,
			default: 'secondary',
			validator(value) {
				return ChipColors.indexOf(value) !== -1;
			},
		},
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
		transparent: {
			type: Boolean,
			default: false,
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
		computedTransparent() {
			return {
				transparent: this.transparent,
			};
		},
	},
};
</script>

<style scoped lang="scss">
/*@import '@/src/assets/style/base/main';*/

.c-chip {
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	text-align: center;
	&.secondary {
		color: $gray700;
		border: 1px solid $gray100;
		background-color: $gray100;

		&:hover {
			background-color: $gray200;
		}

		&.outlined {
			color: $gray700;
			border: 1px solid $gray400;
			background-color: $white;

			&:hover {
				background-color: $gray100;
			}

			&.transparent {
				background-color: transparent;
			}
		}
		&.oval-outline {
			color: $gray700;
			border: 1px solid $gray400;
			background-color: $white;

			&:hover {
				background-color: $gray100;
			}

			&.transparent {
				background-color: transparent;
			}
		}
	}
	&.primary {
		color: $white;
		border: 1px solid $primary;
		background-color: $primary;

		&:hover {
			background-color: $green800;
		}

		&.outlined {
			color: $primary;
			border: 1px solid $primary;
			background-color: $white;

			&:hover {
				background-color: $green100;
			}

			&.transparent {
				background-color: transparent;
			}
		}
		&.oval-outline {
			color: $primary;
			border: 1px solid $primary;
			background-color: $white;

			&:hover {
				background-color: $green100;
			}

			&.transparent {
				background-color: transparent;
			}
		}
	}
	&.success {
		color: $white;
		border: 1px solid $success;
		background-color: $success;

		&:hover {
			background-color: $blue800;
		}

		&.outlined {
			color: $success;
			border: 1px solid $success;
			background-color: $white;

			&:hover {
				background-color: $blue100;
			}

			&.transparent {
				background-color: transparent;
			}
		}
		&.oval-outline {
			color: $success;
			border: 1px solid $success;
			background-color: $white;

			&:hover {
				background-color: $blue100;
			}

			&.transparent {
				background-color: transparent;
			}
		}
	}
	/*사이즈*/
	&.small {
		@include caption2();
		height: 16px;
		padding: 0 4px;
		font-weight: normal;
		&.oval-fill {
			border-radius: 10px;
			padding: 3px 4px;
		}
		&.oval-outline {
			border-radius: 10px;
			padding: 2px 3px;
		}
	}
	&.medium {
		@include caption1();
		height: 24px;
		padding: 5.5px 8px;
		font-weight: normal;
		&.oval-fill {
			border-radius: 12px;
			padding: 5.5px 10px;
		}
		&.oval-outline {
			border-radius: 12px;
			padding: 4.5px 9px;
		}
	}
	&.large {
		@include body2();
		height: 30px;
		padding: 4.5px 10px;
		font-weight: normal;
		&.oval-fill {
			border-radius: 15px;
			padding: 5px 14px;
		}
		&.oval-outline {
			border-radius: 15px;
			padding: 4px 13px;
		}
	}
	&.xlarge {
		@include body1();
		padding: 4.5px 12px;
		font-weight: normal;
		&.oval-fill {
			border-radius: 19px;
			padding: 5px 16px;
		}
		&.oval-outline {
			border-radius: 19px;
			padding: 4px 15px;
		}
	}
	&.oval-fill {
		border: 0;
	}
	&.full {
		width: 100%;
	}
	&:hover {
		cursor: pointer;
	}
}
</style>
