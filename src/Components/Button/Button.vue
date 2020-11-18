<template>
	<button
		class="c-application c-button c-pointer"
		:class="[computedSize, computedColor, computedFull, computedType, { loading: loading }]"
		v-bind="$attrs"
		:disabled="disabled"
		v-on="$listeners"
	>
		<template v-if="loading">
			<div class="c-button--loading">
				<Icon :name="computedIconName" :reversed="type === 'fill'" loading :spinner-color="color" />
			</div>
		</template>
		<div class="c-button--icon" :style="$slots['left-icon'] && `margin-right: ${computedIconMargin}`">
			<slot name="left-icon" />
		</div>
		<slot />
		<div class="c-button--icon" :style="$slots['right-icon'] && `margin-left: ${computedIconMargin}`">
			<slot name="right-icon" />
		</div>
	</button>
</template>

<script>
import Icon from '@/src/Elements/Core/Icon/Icon';
export default {
	name: 'Button',
	inheritAttrs: false,
	props: {
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return ['small', 'medium', 'large', 'xlarge'].indexOf(value) !== -1;
			},
		},
		color: {
			type: String,
			default: 'primary',
			validator(value) {
				return ['primary', 'success', 'gray', 'error'].indexOf(value) !== -1;
			},
		},
		type: {
			type: String,
			default: 'fill',
			validator(value) {
				return ['fill', 'outlined', 'text'].indexOf(value) !== -1;
			},
		},
		full: {
			type: Boolean,
			default: false,
		},
		// disabled
		disabled: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		computedSize() {
			return this.size;
		},
		computedColor() {
			return this.color;
		},
		computedType() {
			return this.type;
		},
		computedFull() {
			return this.full ? 'full' : '';
		},
		computedIconName() {
			let size = this.size.charAt(0).toUpperCase() + this.size.slice(1);
			if (size === 'Xlarge') size = 'Large';

			return `IconSpinner${size}`;
		},
		computedIconMargin() {
			const isMoreThanLarge = this.size.indexOf('large') !== -1;
			return isMoreThanLarge ? '4px' : '2px';
		},
	},
	components: { Icon },
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

.c-button {
	color: $white;
	background-color: $primary;
	border: none;
	@include border-radius(4px);
	@include flexbox();
	@include align-items(center);
	@include justify-content(center);
	position: relative;
	&:disabled,
	.loading {
		cursor: not-allowed !important;
		pointer-events: none;
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
		min-width: 60px;
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
		background: transparent;
		border: none;
		color: $gray500;

		.c-button--loading {
			background-color: $white;
		}
	}
}
.primary {
	background-color: $primary;
	&:hover {
		background-color: $green800;
	}
	&:disabled {
		background-color: $green100;
		.c-button--loading {
			background-color: $green100;
		}
	}
	.c-button--loading {
		background-color: $primary;
	}

	&.text {
		color: $primary;
		&:hover {
			background-color: $green100;
		}
	}
	&.outlined {
		background-color: $white;
		border: 1px solid $primary;
		color: $primary;
		&:hover {
			background-color: $green100;
		}
		&:disabled {
			color: $green100;
			border: 1px solid $green100;
			background-color: $white;
		}
		.c-button--loading {
			background-color: $white;
		}
	}
}
.success {
	background-color: $success;
	&:hover {
		background-color: $blue800;
	}
	&:disabled {
		background-color: $blue100;
		.c-button--loading {
			background-color: $blue100;
		}
	}
	.c-button--loading {
		background-color: $success;
	}
	&.text {
		color: $blue600;
		&:hover {
			background-color: $blue100;
		}
	}
	&.outlined {
		background-color: $white;
		border: 1px solid $blue600;
		color: $blue600;
		&:hover {
			background-color: $blue100;
		}
		&:disabled {
			color: $blue100;
			border: 1px solid $blue100;
			background-color: $white;
		}
		.c-button--loading {
			background-color: $white;
		}
	}
}
.gray {
	background-color: $gray600;
	&:hover {
		background-color: $gray800;
	}
	&:disabled {
		background-color: $gray100;
		.c-button--loading {
			background-color: $gray100;
		}
	}
	.c-button--loading {
		background-color: $gray600;
	}
	&.text {
		color: $gray500;
		&:hover {
			background-color: $gray100;
		}
	}
	&.outlined {
		background-color: $white;
		border: 1px solid $gray400;
		color: $gray500;
		&:hover {
			background-color: $gray100;
		}
		&:disabled {
			background-color: $white;
		}
		.c-button--loading {
			background-color: $white;
		}
	}
}
.error {
	background-color: $red600;
	&:hover {
		background-color: $red800;
	}
	&:disabled {
		background-color: $red100;
		.c-button--loading {
			background-color: $red100;
		}
	}
	.c-button--loading {
		background-color: $red600;
	}
	&.text {
		color: $red600;
		&:hover {
			background-color: $red100;
		}
	}
	&.outlined {
		background-color: $white;
		border: 1px solid $red600;
		color: $red600;
		&:hover {
			background-color: $red100;
		}
		&:disabled {
			color: $red100;
			border: 1px solid $red100;
			background-color: $white;
		}
		.c-button--loading {
			background-color: $white;
		}
	}
}
.loading {
	@include disabled();
}
</style>
