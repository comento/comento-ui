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
			computedWithICon,
			{ 'c-chip--with-close-button': withCloseButton },
		]"
		:style="[computedPadding]"
		v-on="$listeners"
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
			if (whiteFillConfig.types.includes(this.type) && whiteFillConfig.colors.includes(this.color)) {
				return 'white';
			}
			return this.color;
		},
		computedWithICon() {
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
	@include border-radius(4px);
	text-align: center;
	box-sizing: border-box;
	&.info {
		color: $gray700;
		border: 1px solid $gray100;
		background-color: $gray100;

		&.clickable {
			@include state-style {
				background-color: $gray200;
			}
		}

		&.outline {
			color: $gray700;
			border: 1px solid $gray400;
			background-color: $white;

			&.clickable {
				@include state-style {
					background-color: $gray100;
				}
			}
		}
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
		border: 1px solid $light-primary;
		background-color: $light-primary;

		&.clickable {
			@include state-style {
				background-color: $blue400;
			}
		}

		&.outline {
			color: $primary;
			border: 1px solid $primary;
			background-color: $white;

			&.clickable {
				@include state-style {
					background-color: $blue100;
				}
			}
		}
		&.clickable-outline {
			color: $primary;
			border: 1px solid $primary;
			background-color: $white;

			&.clickable {
				@include state-style {
					background-color: $blue100;
				}
			}
		}
	}
	&.success {
		color: $white;
		border: 1px solid $success;
		background-color: $success;

		&.clickable {
			@include state-style {
				background-color: $green800;
			}
		}

		&.outline {
			color: $success;
			border: 1px solid $success;
			background-color: $white;
		}
		&.clickable-outline {
			color: $success;
			border: 1px solid $success;
			background-color: $white;

			&.clickable {
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

		&.clickable {
			@include state-style {
				background-color: $orange800;
			}
		}

		&.outline {
			color: $secondary;
			border: 1px solid $secondary;
			background-color: $white;
		}

		&.clickable-outline {
			color: $secondary;
			border: 1px solid $secondary;
			background-color: $white;

			&.clickable {
				@include state-style {
					background-color: $orange100;
				}
			}
		}
	}
	&.error {
		color: $error;
		border: 1px solid $red100;
		background-color: $red100;

		&.clickable {
			@include state-style {
				color: $red800;
				background-color: $red400;
			}
		}
		&.clickable-outline {
			@include state-style {
				color: $red600;
				background-color: $red100;
			}
		}

		&.outline {
			color: $error;
			border: 1px solid $error;
			background-color: $white;
		}

		&.clickable-outline {
			color: $error;
			border: 1px solid $error;
			background-color: $white;

			&.clickable {
				@include state-style {
					background-color: $red100;
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
		height: 16px;
		padding: 1.5px 4px;
		font-weight: $regular;
		line-height: 16px;
		&.with-icon {
			&-both {
				padding: 1.5px 6px;
			}
			&-right {
				padding-right: 6px;
			}
			&-left {
				padding-left: 6px;
			}
		}
		&.clickable {
			@include border-radius(12px);
			padding: 1.5px 6px;
			&.with-icon {
				&-both {
					padding: 1.5px 6px;
				}
				&-right {
					padding-right: 6px;
				}
				&-left {
					padding-left: 6px;
				}
			}
		}
	}
	&.medium {
		@include caption1();
		height: 24px;
		padding: 4.5px 8px;
		font-weight: $regular;
		@include border-radius(6px);
		&.with-icon {
			&-both {
				padding: 4.5px 6px;
			}
			&-right {
				padding-right: 6px;
			}
			&-left {
				padding-left: 6px;
			}
		}
		&.clickable {
			@include border-radius(12px);
			padding: 4.5px 10px;
			&.with-icon {
				height: 26px;
				&-both {
					padding: 4.5px 8px;
				}
				&-right {
					padding-right: 8px;
				}
				&-left {
					padding-left: 8px;
				}
			}
		}
		&.c-chip--with-close-button {
			padding-right: 6px !important;
		}
	}
	&.large {
		@include body2();
		height: 30px;
		padding: 5px 10px;
		font-weight: $regular;
		@include border-radius(6px);
		&.with-icon {
			&-both {
				padding: 5px 8px;
			}
			&-right {
				padding-right: 8px;
			}
			&-left {
				padding-left: 8px;
			}
		}
		&.clickable {
			@include border-radius(15px);
			padding: 5px 12px;
			&.with-icon {
				height: 32px;
				&-both {
					padding: 5px 12px;
				}
				&-right {
					padding-right: 12px;
				}
				&-left {
					padding-left: 12px;
				}
			}
		}
		&.c-chip--with-close-button {
			padding-right: 8px !important;
		}
	}
	&.xlarge {
		@include body1();
		height: 34px;
		padding: 4.5px 12px;
		font-weight: $regular;
		@include border-radius(8px);
		&.with-icon {
			&-both {
				padding: 4.5px 10px;
			}
			&-right {
				padding-right: 10px;
			}
			&-left {
				padding-left: 10px;
			}
		}
		&.clickable {
			@include border-radius(19px);
			padding: 4.5px 14px;
			&.with-icon {
				height: 36px;
				&-both {
					padding: 4.5px 14px;
				}
				&-right {
					padding-right: 14px;
				}
				&-left {
					padding-left: 14px;
				}
			}
		}
		&.c-chip--with-close-button {
			padding-right: 10px !important;
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
