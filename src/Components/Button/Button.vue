<template>
	<button
		class="c-application c-button c-pointer"
		:class="[computedSize, computedColor, computedFull, computedType, computedDisabled]"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<template v-if="loading">
			<div class="loading">
				<Icon :name="computedIconName" :reversed="type === 'fill'" loading :spinner-color="color" />
			</div>
		</template>
		<template v-else>
			<div :style="$slots['left-icon'] ? 'margin-right: 2px;' : ''">
				<slot name="left-icon"> </slot>
			</div>
			<slot />
			<div :style="$slots['right-icon'] ? 'margin-left: 2px;' : ''">
				<slot name="right-icon"></slot>
			</div>
		</template>
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
				return ['primary', 'success', 'gray'].indexOf(value) !== -1;
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
		computedDisabled() {
			if (this.disabled) {
				return 'disabled';
			} else {
				return null;
			}
		},
		computedIconName() {
			const size = this.size.charAt(0).toUpperCase() + this.size.slice(1);
			return `IconSpinner${size}`;
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
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	&.disabled {
		cursor: not-allowed !important;
		pointer-events: none;
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
			padding: 0px 14.5px;
			line-height: 90%;
		}
	}
	&.xlarge {
		height: 60px;
		padding: 0 60px;
		// 디자인 작업중
		min-width: 76px;
		@include headline5;
		font-weight: bold;
	}
	&.full {
		width: 100%;
	}
	&.text {
		background: transparent;
		border: none;
		color: $gray500;
		&.error {
			color: $red400;
		}
		&:hover {
			background-color: $gray100;
		}
	}
}
.primary {
	background-color: $primary;
	&:hover {
		background-color: $green800;
	}
	&.disabled {
		background-color: $green100;
	}
	&.outlined {
		background-color: $white;
		border: 1px solid $primary;
		color: $primary;
		&:hover {
			background-color: $green100;
		}
		&:disabled {
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
	}
}
.gray {
	background-color: $gray600;
	&:hover {
		background-color: $gray800;
	}
	&:disabled {
		background-color: $gray100;
	}
	&.outlined {
		background-color: $white;
		border: 1px solid $gray400;
		color: $gray500;
		&:hover {
			background-color: $gray000;
		}
		&:disabled {
			background-color: $white;
		}
	}
}
</style>
