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
			computedWithIcon,
			{ 'c-chip--with-close-button': withCloseButton },
		]"
		:style="[computedPadding]"
		v-on="$listeners"
		@mouseover="handleMouseOver"
		@mouseleave="handleMouseLeave"
	>
		<Icon v-if="leftIcon" :name="leftIcon" :color="computedIconColor" class="mr-2" />
		<slot />
		<Icon v-if="rightIcon" :name="rightIcon" :color="computedIconColor" class="ml-2" />
		<Icon
			v-if="withCloseButton"
			:name="computedCloseButtonIconName"
			:color="computedIconColor"
			class="ml-4 c-pointer"
			@click.stop="handleClickCloseButton"
		/>
	</span>
</template>

<script>
import paddingMixin from '@/mixins/paddingMixin.js';
import Icon from '@/components/icon/Icon.vue';

export const ChipColors = ['primary', 'info', 'success', 'secondary', 'error'];
export const ChipSizes = ['small', 'medium', 'large', 'xlarge'];
export const ChipTypes = ['fill', 'outline', 'clickable-fill', 'clickable-outline'];
export const ChipSizesWithCloseButton = ['medium', 'large', 'xlarge'];

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
		leftIcon: {
			type: String,
			default: '',
		},
		rightIcon: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			isHovered: false,
		};
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
				medium: 'XSmall',
				large: 'XSmall',
				xlarge: 'Small',
			}[this.size];
			return `IconClose${closeButtonIconSize[0] + closeButtonIconSize.slice(1)}Line`;
		},
		computedIconColor() {
			const whiteFillConfig = {
				colors: ['success', 'secondary'],
				types: ['fill', 'clickable-fill'],
			};
			const darkFillConfig = {
				colors: ['primary', 'error'],
				types: ['clickable-fill'],
			};

			const isDarkTheme = darkFillConfig.types.includes(this.type) && this.isHovered;
			const isWhiteFill =
				whiteFillConfig.types.includes(this.type) && whiteFillConfig.colors.includes(this.color);
			const isExceptionDarkThemeCase =
				this.color === 'error' && this.type === 'fill' && this.computedHasIcon && this.isHovered;

			if (isDarkTheme) {
				return this.color === 'primary' ? 'blue800' : 'red800';
			}

			if (isExceptionDarkThemeCase) {
				return 'red800';
			}

			if (isWhiteFill) {
				return 'white';
			}

			return this.color;
		},
		computedWithIcon() {
			if (this.leftIcon && this.rightIcon) {
				return 'with-icon with-icon-both';
			} else if (this.leftIcon) {
				return 'with-icon with-icon-left';
			} else if (this.rightIcon) {
				return 'with-icon with-icon-right';
			} else {
				return '';
			}
		},
		computedHasIcon() {
			return this.leftIcon || this.rightIcon;
		},
	},
	methods: {
		handleMouseOver() {
			this.isHovered = true;
		},
		handleMouseLeave() {
			this.isHovered = false;
		},
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
	@include border-radius(4px);
	text-align: center;
	box-sizing: border-box;
	&.info {
		color: $gray700;
		border: 1px solid $gray100;
		background-color: $gray100;

		&.clickable,
		&.with-icon {
			@include state-style {
				background-color: $gray200;
			}
		}

		&.outline,
		&.clickable-outline {
			color: $gray700;
			border: 1px solid $gray400;
			background-color: $white;

			&.clickable {
				@include state-style {
					background-color: $gray100;
				}
			}
		}
	}
	&.primary {
		color: $primary;
		border: 1px solid $blue050;
		background-color: $blue050;

		&.clickable,
		&.with-icon {
			@include state-style {
				background-color: $blue400;
			}
		}
		&.clickable {
			@include state-style {
				color: $blue800;
			}
		}

		&.outline,
		&.clickable-outline {
			color: $primary;
			border: 1px solid $primary;
			background-color: $white;

			&.clickable,
			&.with-icon {
				@include state-style {
					background-color: $blue050;
					color: $primary;
				}
			}
		}
	}
	&.success {
		color: $white;
		border: 1px solid $success;
		background-color: $success;

		&.clickable,
		&.with-icon {
			@include state-style {
				background-color: $green800;
			}
		}

		&.outline,
		&.clickable-outline {
			color: $success;
			border: 1px solid $success;
			background-color: $white;

			&.clickable,
			&.with-icon {
				@include state-style {
					background-color: $green100;
				}
			}
		}
	}
	&.secondary {
		color: $white;
		border: 1px solid $secondary;
		background-color: $secondary;

		&.clickable,
		&.with-icon {
			@include state-style {
				background-color: $orange800;
			}
		}

		&.outline,
		&.clickable-outline {
			color: $secondary;
			border: 1px solid $secondary;
			background-color: $white;

			&.clickable,
			&.with-icon {
				@include state-style {
					background-color: $orange100;
				}
			}
		}
	}
	&.error {
		color: $error;
		border: 1px solid $red050;
		background-color: $red050;

		&.clickable,
		&.with-icon {
			@include state-style {
				color: $red800;
				background-color: $red400;
			}
		}

		&.outline,
		&.clickable-outline {
			color: $error;
			border: 1px solid $error;
			background-color: $white;

			&.clickable,
			&.with-icon {
				@include state-style {
					color: $error;
					background-color: $red050;
				}
			}
		}
	}
	&.transparent {
		background-color: transparent !important;
	}
	/*사이즈*/
	&.small {
		@include caption2();
		height: 18px;
		padding: 2.5px 4px;
		font-weight: $regular;
		line-height: 18px;

		&.clickable {
			@include border-radius(12px);
			padding: 2.5px 6px;
		}
	}
	&.medium {
		@include caption1();
		height: 26px;
		padding: 5.5px 8px;
		font-weight: $regular;
		@include border-radius(6px);

		&.clickable {
			@include border-radius(12px);
			padding: 5.5px 10px;
			&.with-icon {
				&-both {
					padding-left: 8px;
					padding-right: 8px;
				}
				&-left {
					padding-left: 8px;
				}
				&-right {
					padding-right: 8px;
				}
			}
		}
		&.with-icon {
			&-both {
				padding-left: 6px;
				padding-right: 6px;
			}
			&-left {
				padding-left: 6px;
			}
			&-right {
				padding-right: 6px;
			}
		}
		&.c-chip--with-close-button {
			padding-right: 6px !important;
		}
	}
	&.large {
		@include body2();
		height: 32px;
		padding: 6px 10px;
		font-weight: $regular;
		@include border-radius(6px);

		&.clickable {
			@include border-radius(15px);
			padding: 6px 12px;
			&.with-icon {
				&-both {
					padding-left: 10px;
					padding-right: 10px;
				}
				&-left {
					padding-left: 10px;
				}
				&-right {
					padding-right: 10px;
				}
			}
		}
		&.with-icon {
			&-both {
				padding-left: 6px;
				padding-right: 6px;
			}
			&-left {
				padding-left: 6px;
			}
			&-right {
				padding-right: 6px;
			}
		}
		&.c-chip--with-close-button {
			padding-right: 8px !important;
		}
	}
	&.xlarge {
		@include body1();
		height: 36px;
		padding: 5.5px 12px;
		font-weight: $regular;
		@include border-radius(8px);

		&.clickable {
			@include border-radius(19px);
			padding: 5.5px 14px;
			&.with-icon {
				&-both {
					padding-left: 12px;
					padding-right: 12px;
				}
				&-left {
					padding-left: 12px;
				}
				&-right {
					padding-right: 12px;
				}
			}
		}
		&.with-icon {
			&-both {
				padding-left: 8px;
				padding-right: 8px;
			}
			&-left {
				padding-left: 8px;
			}
			&-right {
				padding-right: 8px;
			}
		}
		&.c-chip--with-close-button {
			padding-right: 10px !important;
		}
	}
	&.with-icon {
		cursor: pointer;
		&.fill,
		&.clickable-fill {
			border-color: transparent !important;
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
