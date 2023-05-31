<template>
	<div class="c-application c-button-group" :class="[size, computedVertical]">
		<slot />
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export const buttonGroupSizes = ['small', 'medium', 'large'];

/**
 * @displayName c-button-group
 */
export default defineComponent({
	name: 'ButtonGroup',
	props: {
		/**
		 * 크기(small, medium, large)
		 */
		size: {
			type: String,
			default: 'small',
			validator(value) {
				return buttonGroupSizes.indexOf(value) !== -1;
			},
		},
		vertical: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
	},
	computed: {
		computedVertical() {
			return this.vertical ? 'vertical' : 'horizontal';
		},
	},
});
</script>

<style lang="scss" scoped>
.c-button-group {
	@include flexbox();

	// 방향
	&.horizontal {
		@include flex-direction(row);
		@include align-items(center);

		> a,
		button {
			&:last-child {
				margin-right: 0 !important;
			}
		}
	}
	&.vertical {
		@include flex-direction(column);
		@include align-items(baseline);

		> a,
		button {
			&:last-child {
				margin-bottom: 0 !important;
			}
		}
	}

	// 사이즈
	&.small {
		&.horizontal {
			> a,
			button {
				margin-right: 4px;
			}
		}
		&.vertical {
			> a,
			button {
				margin-bottom: 4px;
			}
		}
	}
	&.medium {
		&.horizontal {
			> a,
			button {
				margin-right: 8px;
			}
		}
		&.vertical {
			> a,
			button {
				margin-bottom: 8px;
			}
		}
	}
	&.large {
		&.horizontal {
			> a,
			button {
				margin-right: 12px;
			}
		}
		&.vertical {
			> a,
			button {
				margin-bottom: 12px;
			}
		}
	}
}
</style>
