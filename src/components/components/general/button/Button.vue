<template>
	<button
		class="c-application c-button"
		:class="[
			computedSize,
			computedColor,
			computedFull,
			computedType,
			computedGhostTypeClass,
			computedLoading,
			computedFixed,
			computedAbsolute,
			computedShadow,
			{ 'c-button--fab': isFabType },
		]"
		v-bind="$attrs"
		:disabled="disabled"
		v-on="$listeners"
		@click="$event.target.blur()"
	>
		<template v-if="loading">
			<div class="c-button--loading">
				<Loader :size="computedLoaderSize" :reversed="isFillType" :color="color" />
			</div>
		</template>
		<div class="c-button--icon" :class="setIconSpacing('left')">
			<slot name="left-icon" />
		</div>
		<Icon v-if="showIcon" :name="fabIconName" color="white" class="c-button--fab-icon" />
		<slot v-else />
		<div class="c-button--icon" :class="setIconSpacing('right')">
			<slot name="right-icon" />
		</div>
	</button>
</template>

<script>
import Loader from '@/components/components/other/Loader';
import Icon from '@/components/elements/core/icon/Icon';

export const buttonSizes = ['small', 'medium', 'large', 'xlarge'];
export const buttonColors = ['primary', 'light-primary', 'success', 'error', 'secondary', 'info'];
export const ghostTypeButtonColors = ['primary', 'info', 'white'];
export const buttonTypes = ['fill', 'outline', 'ghost', 'text', 'fab'];

/**
 * @displayName c-button
 */
export default {
	name: 'Button',
	inheritAttrs: false,
	props: {
		/**
		 * 크기(small, medium, large, xlarge)
		 */
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return buttonSizes.includes(value);
			},
		},
		/**
		 * 색상(primary, light-primary, success, error, secondary, info)
		 */
		color: {
			type: String,
			default: 'primary',
			validator(value) {
				const isValid = [...buttonColors, ...ghostTypeButtonColors].includes(value);
				if (!isValid) {
					console.error(`${value} is not a valid value of Button color`);
				}
				return isValid;
			},
		},
		/**
		 * 타입(fill, outline, text)
		 */
		type: {
			type: String,
			default: 'fill',
			validator(value) {
				return buttonTypes.includes(value);
			},
		},
		full: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
		fixed: {
			type: Boolean,
			default: false,
		},
		absolute: {
			type: Boolean,
			default: false,
		},
		shadow: {
			type: Boolean,
			default: false,
		},
		fabIconName: {
			type: String,
			default: 'IconWriting2XLargeLine',
		},
	},
	computed: {
		isFabType() {
			return this.type === 'fab';
		},
		computedSize() {
			if (this.isFabType) return;
			return this.size;
		},
		computedColor() {
			return this.color;
		},
		computedType() {
			return this.type;
		},
		computedGhostTypeClass() {
			return this.type === 'ghost' ? 'outline' : '';
		},
		computedFull() {
			return { full: this.full };
		},
		computedLoading() {
			return { loading: this.loading };
		},
		computedShadow() {
			return { shadow: this.shadow };
		},
		computedFixed() {
			return { 'p-fixed': this.fixed };
		},
		computedAbsolute() {
			return { 'p-absolute': this.absolute };
		},
		computedLoaderSize() {
			return this.size === 'xlarge' ? 'large' : this.size;
		},
		computedIconMargin() {
			const isXLarge = this.size.indexOf('xlarge') !== -1;
			return isXLarge ? 4 : 2;
		},
		isFillType() {
			return this.type === 'fill';
		},
		showIcon() {
			return this.isFabType;
		},
	},
	methods: {
		setIconSpacing(position) {
			const oppositePosition = position === 'left' ? 'r' : 'l';
			return this.$slots[`${position}-icon`] && `m${oppositePosition}-${this.computedIconMargin}`;
		},
	},
	components: { Icon, Loader },
};
</script>

<style lang="scss" scoped>
$primary-background-color: $primary;
$primary-hover-background-color: $blue800;
$primary-disabled-background-color: $blue100;
$primary-text-color: $primary;

$success-background-color: $success;
$success-hover-background-color: $green800;
$success-disabled-background-color: $green100;
$success-text-color: $success;

$error-background-color: $error;
$error-hover-background-color: $red800;
$error-disabled-background-color: $red100;
$error-text-color: $error;

$secondary-background-color: $secondary;
$secondary-hover-background-color: $orange800;
$secondary-disabled-background-color: $orange100;
$secondary-text-color: $secondary;

$info-default-background-color: $gray100;
$info-disabled-color: $gray200;
$info-text-color: $info;

@mixin ghost-style() {
	&.ghost {
		&:disabled {
			background: none !important;
		}
		@content;
	}
}

@mixin loading-style() {
	.c-button--loading {
		@content;
	}
}

.c-button {
	color: $white;
	background-color: $primary;
	border: none;
	@include border-radius(4px);
	@include flexbox();
	@include align-items(center);
	@include justify-content(center);
	position: relative;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed !important;
		&:active {
			pointer-events: none;
		}
		.c-button--icon::v-deep .c-icon {
			@include disabled();
		}
	}
	&--loading {
		position: absolute;
		width: 100%;
		height: 100%;
		@include border-radius(4px);
		@include flexbox();
		@include align-items(center);
		@include justify-content(center);
	}
	&--icon {
		@include flexbox();
	}

	&.small {
		height: 24px;
		padding: 0 8px;
		min-width: 36px;
		@include caption2;
		.loading {
			padding: 0 9.5px;
			line-height: 90%;
		}
	}
	&.medium {
		height: 36px;
		padding: 0 12px;
		min-width: 50px;
		@include body2;
		font-weight: bold;
		.loading {
			padding: 0 28.5px;
			line-height: 90%;
		}
	}
	&.large {
		height: 48px;
		padding: 0 14px;
		min-width: 76px;
		@include body1;
		font-weight: bold;
		.loading {
			padding: 0 14.5px;
			line-height: 90%;
		}
	}
	&.xlarge {
		height: 60px;
		padding: 0 26px;
		min-width: 130px;
		@include headline6;
		font-weight: bold;
		.loading {
			padding: 0 9.5px;
			line-height: 90%;
		}
	}
	&.full {
		width: 100%;
	}
	&.text {
		font-weight: normal;
		background: transparent;
		border: none;
		color: $gray500;

		.c-button--loading {
			background-color: $white;
		}
	}
	&--fab {
		cursor: pointer;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		// 아이콘 커서는 부모를 따름
		&-icon {
			cursor: inherit;
		}
	}
}

.primary {
	background-color: $primary-background-color;
	@include state-style {
		background-color: $primary-hover-background-color;
	}
	&:disabled {
		background-color: $primary-disabled-background-color;
		.c-button--icon::v-deep .c-icon {
			fill: $white !important;
		}
		.c-button--loading {
			background-color: $primary-disabled-background-color;
		}
	}
	.c-button--loading {
		background-color: $primary-background-color;
	}

	&.text {
		color: $primary-text-color;
		@include state-style {
			background-color: $primary-disabled-background-color;
		}
		&:disabled {
			.c-button--icon::v-deep .c-icon {
				fill: $primary-disabled-background-color !important;
			}
			color: $primary-disabled-background-color;
			background: none;
		}
	}
	&.outline {
		background-color: transparent;
		border: 1px solid $primary-text-color;
		color: $primary-text-color;
		@include state-style {
			background-color: $primary-disabled-background-color;
		}
		&:disabled {
			color: $primary-disabled-background-color;
			border: 1px solid $primary-disabled-background-color;
			background-color: $white;
			.c-button--icon::v-deep .c-icon {
				fill: $primary-disabled-background-color !important;
			}
		}
		@include loading-style {
			background-color: $white;
		}
		// type ghost
		@include ghost-style {
			background-color: transparent;
			@include state-style {
				background: rgba(42, 125, 225, 0.2);
			}
			&:disabled {
				color: $blue600;
				border-color: $blue600;
				opacity: 0.2;
			}
			@include loading-style {
				background-color: transparent;
			}
		}
	}
}

.light-primary {
	background-color: $blue100;
	color: $blue600;
	@include state-style {
		background-color: $blue400;
	}
	&:disabled {
		color: $blue100;
		background-color: $blue000;
		.c-button--icon::v-deep .c-icon {
			fill: $blue600 !important;
		}
		.c-button--loading {
			background-color: $blue000;
		}
	}
	.c-button--loading {
		background-color: $blue100;
	}
}

.success {
	background-color: $success-background-color;
	@include state-style {
		background-color: $success-hover-background-color;
	}
	&:disabled {
		background-color: $success-disabled-background-color;
		.c-button--icon::v-deep .c-icon {
			fill: $white !important;
		}
		.c-button--loading {
			background-color: $success-disabled-background-color;
		}
	}
	.c-button--loading {
		background-color: $success-background-color;
	}

	&.text {
		color: $success-text-color;
		@include state-style {
			background-color: $success-disabled-background-color;
		}
		&:disabled {
			color: $success-disabled-background-color;
			background: none;
			.c-button--icon::v-deep .c-icon {
				fill: $success-disabled-background-color !important;
			}
		}
	}
	&.outline {
		background-color: transparent;
		border: 1px solid $success-text-color;
		color: $success-text-color;
		@include state-style {
			background-color: $success-disabled-background-color;
		}
		&:disabled {
			color: $success-disabled-background-color;
			border: 1px solid $success-disabled-background-color;
			background-color: $white;
			.c-button--icon::v-deep .c-icon {
				fill: $success-disabled-background-color !important;
			}
		}
		.c-button--loading {
			background-color: $white;
		}
	}
}

.info {
	background-color: $info-default-background-color;
	color: $info-text-color;
	@include state-style {
		background-color: $gray250;
	}
	&:disabled {
		background-color: $gray000;
		color: $info-disabled-color;
		.c-button--icon::v-deep .c-icon {
			fill: $info-disabled-color !important;
		}
		.c-button--loading {
			background-color: $gray000;
		}
	}
	.c-button--loading {
		background-color: $info-default-background-color;
	}
	&.text {
		color: $info-text-color;
		@include state-style {
			background-color: $info-default-background-color;
		}
		&:disabled {
			color: $info-disabled-color;
			background: none;
			.c-button--icon::v-deep .c-icon {
				fill: $info-disabled-color !important;
			}
		}
	}
	&.outline {
		background-color: transparent;
		border: 1px solid $gray500;
		color: $info-text-color;
		@include state-style {
			background-color: $gray100;
		}
		&:disabled {
			color: $info-disabled-color;
			border: 1px solid $info-disabled-color;
			background: none;
			.c-button--icon::v-deep .c-icon {
				fill: $info-disabled-color !important;
			}
		}
		@include loading-style {
			background-color: $white;
		}
		@include ghost-style {
			color: $gray850;
			border-color: $gray850;
			@include state-style {
				background: rgba(32, 35, 37, 0.2);
			}
			&:disabled {
				opacity: 0.2;
			}
			@include loading-style {
				background-color: transparent;
			}
		}
	}
}

.error {
	background-color: $error-background-color;
	@include state-style {
		background-color: $error-hover-background-color;
	}
	&:disabled {
		background-color: $error-disabled-background-color;
		.c-button--icon::v-deep .c-icon {
			fill: $white !important;
		}
		.c-button--loading {
			background-color: $error-disabled-background-color;
		}
	}
	.c-button--loading {
		background-color: $error-background-color;
	}
	&.text {
		color: $error-text-color;
		@include state-style {
			background-color: $red000;
		}
		&:disabled {
			color: $error-disabled-background-color;
			background: none;
			.c-button--icon::v-deep .c-icon {
				fill: $error-disabled-background-color !important;
			}
		}
	}
	&.outline {
		background-color: transparent;
		border: 1px solid $error-text-color;
		color: $error-text-color;
		@include state-style {
			background-color: $error-disabled-background-color;
		}
		&:disabled {
			color: $error-disabled-background-color;
			border: 1px solid $error-disabled-background-color;
			background-color: $white;
			.c-button--icon::v-deep .c-icon {
				fill: $error-disabled-background-color !important;
			}
		}
		.c-button--loading {
			background-color: $white;
		}
	}
}

.secondary {
	background-color: $secondary-background-color;
	@include state-style {
		background-color: $secondary-hover-background-color;
	}
	&:disabled {
		background-color: $secondary-disabled-background-color;
		.c-button--icon::v-deep .c-icon {
			fill: $white !important;
		}
		.c-button--loading {
			background-color: $secondary-disabled-background-color;
		}
	}
	.c-button--loading {
		background-color: $secondary-background-color;
	}
	&.text {
		color: $secondary-text-color;
		@include state-style {
			background-color: $orange000;
		}
		&:disabled {
			color: $secondary-disabled-background-color;
			background: none;
			.c-button--icon::v-deep .c-icon {
				fill: $secondary-disabled-background-color !important;
			}
		}
	}
	&.outline {
		background-color: transparent;
		border: 1px solid $secondary-background-color;
		color: $secondary-background-color;
		@include state-style {
			background-color: $secondary-disabled-background-color;
		}
		&:disabled {
			color: $secondary-disabled-background-color;
			border: 1px solid $secondary-disabled-background-color;
			background-color: $white;
			.c-button--icon::v-deep .c-icon {
				fill: $secondary-disabled-background-color !important;
			}
		}
		.c-button--loading {
			background-color: $white;
		}
	}
}

.white {
	&.outline {
		background-color: transparent;
		border: 1px solid $white;
		color: $white;
		@include state-style {
			background: rgba(255, 255, 255, 0.2);
		}
		&:disabled {
			opacity: 0.2;
		}
		@include ghost-style();
	}
}

.loading {
	@include disabled();
}

.shadow {
	@include shadow4();
}
</style>
