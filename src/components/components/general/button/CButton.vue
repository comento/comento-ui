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
		@click="$event.target.blur()"
	>
		<template v-if="loading">
			<div class="c-button--loading">
				<CLoader :size="computedLoaderSize" :reversed="isFillType" :color="color" />
			</div>
		</template>
		<CIcon v-if="showIcon" :name="fabIconName" color="white" class="c-button--fab-icon" />
		<template v-else>
			<div class="c-button--icon" :class="setIconSpacing('left')">
				<slot name="left-icon" />
			</div>
			<slot />
			<div class="c-button--icon" :class="setIconSpacing('right')">
				<slot name="right-icon" />
			</div>
		</template>
	</button>
</template>

<script>
import CLoader from '@/components/components/other/CLoader.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import { defineComponent, computed, toRefs, ref } from 'vue';

export const buttonSizes = ['small', 'medium', 'large', 'xlarge'];
export const buttonColors = ['primary', 'light-primary', 'success', 'error', 'secondary', 'info'];
export const ghostTypeButtonColors = ['primary', 'info', 'white'];
export const buttonTypes = ['fill', 'outline', 'ghost', 'text', 'fab'];

export default defineComponent({
	name: 'CButton',
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
	emits: ['update:value', 'input', 'submit'],
	setup(props, { emit }) {
		const { value, type, error, maxHeight, minHeight } = toRefs(props);
		const sync_value = computed({
			get: () => value,
			set: val => emit('update:value', val),
		});

		const classes = computed(() => [`${type.value}`, error.value ? 'c-textarea--error' : null]);

		const computedStyles = computed(() => ({
			'max-height': maxHeight,
			'min-height': minHeight.value ? minHeight : type.value === 'reply' ? '38px' : '110px',
			'overflow-y': maxHeight.value === 'auto' ? 'hidden' : 'auto',
		}));

		const replyIconColor = computed(() => (sync_value.value ? 'blue600' : 'gray200'));

		const isShowHint = computed(() => type.value === 'outline' && error);

		const textareaRef = ref(null);

		const onInput = () => {
			textareaRef.value.style.height = '1px';
			textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
			emit('input', textareaRef.value.value);
		};

		const onSubmitReply = () => {
			if (sync_value.value) {
				emit('submit');
			}
		};

		return {
			sync_value,
			classes,
			computedStyles,
			replyIconColor,
			isShowHint,
			textareaRef,
			onInput,
			onSubmitReply,
		};
	},
	components: { CIcon, CLoader },
});
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
	@include border-radius(6px);
	@include flexbox();
	@include align-items(center);
	@include justify-content(center);
	position: relative;
	cursor: pointer;
	overflow: hidden;

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
		@include border-radius(6px);
		.loading {
			padding: 0 9.5px;
			line-height: 90%;
		}
	}
	&.medium {
		height: 36px;
		padding: 0 12px;
		min-width: 49px;
		@include body2;
		@include border-radius(6px);
		font-weight: 600;
		.loading {
			padding: 0 28.5px;
			line-height: 90%;
		}
	}
	&.large {
		height: 48px;
		padding: 0 14px;
		min-width: 56px;
		@include border-radius(8px);
		@include body1;
		font-weight: 600;
		.loading {
			padding: 0 14.5px;
			line-height: 90%;
		}
	}
	&.xlarge {
		height: 60px;
		padding: 0 26px;
		min-width: 84px;
		@include border-radius(8px);
		@include headline7;
		font-weight: 400;
		.loading {
			padding: 0 9.5px;
			line-height: 90%;
		}
	}
	&.full {
		width: 100%;
	}
	&.text {
		font-weight: $regular;
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
		@include border-radius(50%);
		// 아이콘 커서는 부모를 따름
		&-icon {
			cursor: inherit;
		}
		.c-button--loading {
			@include border-radius(50%);
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
			background-color: $red100;
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
			background-color: $orange100;
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
