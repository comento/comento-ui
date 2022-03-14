<template>
	<span
		class="c-application c-chip"
		:class="[
			computedType,
			computedColor,
			computedSize,
			computedFull,
			computedTransparent,
			computedClickable,
			{ 'c-chip--with-close-button': withCloseButton },
		]"
		:style="[computedPadding]"
		v-on="$listeners"
	>
		<slot />
		<Icon
			v-if="withCloseButton"
			:name="computedCloseButtonIconName"
			:color="computedCloseButtonColor"
			class="ml-4 c-pointer"
			@click.stop="handleClickCloseButton"
		/>
	</span>
</template>

<script>
import paddingMixin from '@/mixins/paddingMixin';
import Icon from '@/components/elements/core/icon/Icon';

export const ChipColors = ['primary', 'info', 'success'];
export const ChipSizes = ['small', 'medium', 'large', 'xlarge'];
export const ChipTypes = ['fill', 'outline', 'clickable-fill', 'clickable-outline'];
export const ChipSizesWithCloseButton = ['large', 'xlarge'];

/**
 * 작은 정보를 전달하기 위해 사용
 * @displayName c-chip
 */
export default {
	name: 'Chip',
	mixins: [paddingMixin],
	props: {
		/**
		 * 타입(fill, outline, clickable-fill, clickable-outline)
		 */
		type: {
			type: String,
			default: 'fill',
			validator(value) {
				return ChipTypes.includes(value);
			},
		},
		/**
		 * 색상(info, primary, success)
		 */
		color: {
			type: String,
			default: 'info',
			validator(value) {
				return ChipColors.includes(value);
			},
		},
		/**
		 * 크기(small, medium, large, xlarge)
		 */
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return ChipSizes.includes(value);
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
		clickable: {
			type: Boolean,
			default: false,
		},
		withCloseButton: {
			type: Boolean,
		},
	},
	computed: {
		computedType() {
			return `${this.type} ${this.type.includes('clickable') ? 'clickable' : ''}`;
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
		computedClickable() {
			return {
				clickable: this.clickable,
			};
		},
		computedCloseButtonIconName() {
			if (!ChipSizesWithCloseButton.includes(this.size)) return;
			const closeButtonIconSize = {
				xlarge: 'medium',
				large: 'small',
			}[this.size];
			return `IconClose${closeButtonIconSize[0].toUpperCase() + closeButtonIconSize.slice(1)}Line`;
		},
		computedCloseButtonColor() {
			if (this.color === 'success') return 'white';
			return this.color;
		},
	},
	methods: {
		handleClickCloseButton() {
			this.$emit('clickCloseButton');
		},
	},
	components: { Icon },
};
</script>

<style lang="scss" scoped>
.c-chip {
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	text-align: center;
	&.info {
		color: $gray700;
		border: 1px solid $gray100;
		background-color: $gray100;

		&.clickable:hover {
			background-color: $gray200;
		}

		&.outline {
			color: $gray700;
			border: 1px solid $gray400;
			background-color: $white;

			&.clickable:hover {
				background-color: $gray100;
			}

			&.transparent {
				background-color: transparent;
			}
		}
		&.clickable-outline {
			color: $gray700;
			border: 1px solid $gray400;
			background-color: $white;

			&.clickable:hover {
				background-color: $gray100;
			}

			&.transparent {
				background-color: transparent;
			}
		}
	}
	&.primary {
		color: $primary;
		border: 1px solid $light-primary;
		background-color: $light-primary;

		&.clickable:hover {
			background-color: $blue400;
		}

		&.outline {
			color: $primary;
			border: 1px solid $primary;
			background-color: $white;

			&.clickable:hover {
				background-color: $gray100;
			}

			&.transparent {
				background-color: transparent;
			}
		}
		&.clickable-outline {
			color: $primary;
			border: 1px solid $primary;
			background-color: $white;

			&.clickable:hover {
				background-color: $gray100;
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

		&.clickable:hover {
			background-color: $green800;
		}

		&.outline {
			color: $success;
			border: 1px solid $success;
			background-color: $white;

			&.transparent {
				background-color: transparent;
			}
		}
		&.clickable-outline {
			color: $success;
			border: 1px solid $success;
			background-color: $white;

			&.clickable:hover {
				background-color: $green100;
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
		padding: 1.5px 4px;
		font-weight: $regular;
		.clickable {
			border-radius: 10px;
			padding: 1.5px 6px;
		}
	}
	&.medium {
		@include caption1();
		height: 24px;
		padding: 4.5px 8px;
		font-weight: $regular;
		@include border-radius(6px);
		&.clickable {
			border-radius: 12px;
			padding: 4.5px 10px;
		}
	}
	&.large {
		@include body2();
		height: 30px;
		padding: 5px 10px;
		font-weight: $regular;
		@include border-radius(8px);
		.clickable {
			border-radius: 15px;
			padding: 5px 12px;
		}
		&.c-chip--with-close-button {
			padding-right: 6px !important;
		}
	}
	&.xlarge {
		@include body1();
		padding: 4.5px 12px;
		font-weight: $regular;
		@include border-radius(10px);
		.clickable {
			border-radius: 19px;
			padding: 4.5px 14px;
		}
		&.c-chip--with-close-button {
			padding-right: 8px !important;
		}
	}
	&.clickable-fill {
		border: 0;
	}
	&.full {
		width: 100%;
	}
	&.clickable:hover {
		cursor: pointer;
	}
}
</style>
