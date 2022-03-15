<template>
	<div class="c-application c-checkbox" :class="computedClasses">
		<input
			:id="computedId"
			v-model="sync_value"
			type="checkbox"
			:disabled="disabled"
			v-bind="$attrs"
			v-on="$listeners"
		/>
		<label :class="{ disabled }" :for="computedId">
			<Typography :color="computedColor" :type="computedTypographyType">
				<slot />
			</Typography>
		</label>
	</div>
</template>

<script>
import { colorKeys } from '@/utils/constants/color';
import Typography from '@/components/elements/core/typography/Typography';
import uniqueId from '@/utils/unique-id';
export const checkboxSizes = ['xsmall', 'small', 'medium'];

/**
 * @displayName c-checkbox
 */
export default {
	name: 'Checkbox',
	inheritAttrs: false,
	props: {
		value: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		disabled: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		id: {
			type: String,
			default: '',
			validator(value) {
				return typeof value === 'string';
			},
		},
		color: {
			type: String,
			default: 'gray500',
			validator(value) {
				const isValid = colorKeys.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the typography color`);
				}
				return isValid;
			},
		},
		/**
		 * 크기(xsmall, small, medium)
		 */
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				const isValid = checkboxSizes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid value of the Checkbox size`);
				}
				return isValid;
			},
		},
	},
	data() {
		return {
			uid: uniqueId(),
		};
	},
	computed: {
		sync_value: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('update:value', val);
			},
		},
		computedId() {
			return this.id || `c-checkbox-${this.uid}`;
		},
		computedColor() {
			return this.disabled ? 'gray300' : this.color;
		},
		computedClasses() {
			return [this.size];
		},
		computedTypographyType() {
			const sizeForTypeList = {
				xsmall: 'caption1',
				small: 'body2',
				medium: 'body1',
			};
			return sizeForTypeList[this.size];
		},
	},
	components: { Typography },
};
</script>

<style lang="scss" scoped>
.c-checkbox {
	@include flexbox();

	input[type='checkbox'] {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		padding: 0;
		border: 0;
		height: 1px;
		width: 1px;
		overflow: hidden;

		&:hover:not(:disabled),
		&:focus:not(:disabled) {
			& + label:before {
				background-color: $blue100;
				border-color: $primary;
			}
		}

		&:disabled,
		&:disabled + label {
			cursor: not-allowed !important;
			&:active {
				pointer-events: none;
			}
		}
		&:disabled {
			& + label:before {
				background-color: $gray100;
			}
			&:checked + label:before {
				background-color: $gray100;
				border-color: $input-border-color;
				content: '';
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='%23cfd4d7'%3E%3Cpath d='M13.8536 4.14645C14.0488 4.34171 14.0488 4.65829 13.8536 4.85355L6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645C2.34171 6.95118 2.65829 6.95118 2.85355 7.14645L6.5 10.7929L13.1464 4.14645C13.3417 3.95118 13.6583 3.95118 13.8536 4.14645Z'/%3E%3C/svg%3E");
			}
		}

		&:checked:not(:disabled) {
			& + label:before {
				background-color: #fff;
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='%232a7de1'%3E%3Cpath d='M13.8536 4.14645C14.0488 4.34171 14.0488 4.65829 13.8536 4.85355L6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645C2.34171 6.95118 2.65829 6.95118 2.85355 7.14645L6.5 10.7929L13.1464 4.14645C13.3417 3.95118 13.6583 3.95118 13.8536 4.14645Z'/%3E%3C/svg%3E");
				border-color: $primary;
			}
		}

		& + label {
			display: inline-flex;
			flex-direction: row;
			align-items: flex-start;
			cursor: pointer;
			> div {
				display: inline-block;
			}
			&:before {
				width: 20px;
				height: 20px;
				content: '';
				background-color: $gray000;
				background-position: center center;
				background-repeat: no-repeat;
				border: 1px solid $input-border-color;
				@include border-radius(4px);
				display: inline-block;
				margin-right: 8px;
				box-sizing: border-box;
				margin-top: 2px;
				&:hover {
					border-color: $primary;
					background-color: $blue100;
				}
			}
		}
	}

	&.small {
		input[type='checkbox'] {
			& + label:before {
				width: 18px;
				height: 18px;
				margin-top: 1px;
				margin-right: 6px;
				background-size: 12px;
			}
			&:disabled {
				&:checked + label:before {
					background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='%23cfd4d7'%3E%3Cpath d='M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L5.35355 8.85355C5.15829 9.04882 4.84171 9.04882 4.64645 8.85355L1.64645 5.85355C1.45118 5.65829 1.45118 5.34171 1.64645 5.14645C1.84171 4.95118 2.15829 4.95118 2.35355 5.14645L5 7.79289L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z'/%3E%3C/svg%3E");
				}
			}
			&:checked:not(:disabled) {
				& + label:before {
					background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='%232a7de1'%3E%3Cpath d='M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L5.35355 8.85355C5.15829 9.04882 4.84171 9.04882 4.64645 8.85355L1.64645 5.85355C1.45118 5.65829 1.45118 5.34171 1.64645 5.14645C1.84171 4.95118 2.15829 4.95118 2.35355 5.14645L5 7.79289L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z'/%3E%3C/svg%3E");
				}
			}
		}
	}

	&.xsmall {
		input[type='checkbox'] {
			& + label {
				&:before {
					margin-top: 0;
					margin-right: 4px;
					width: 16px;
					height: 16px;
					background-size: 12px;
				}
			}
			&:disabled {
				&:checked + label:before {
					background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='%23cfd4d7'%3E%3Cpath d='M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L5.35355 8.85355C5.15829 9.04882 4.84171 9.04882 4.64645 8.85355L1.64645 5.85355C1.45118 5.65829 1.45118 5.34171 1.64645 5.14645C1.84171 4.95118 2.15829 4.95118 2.35355 5.14645L5 7.79289L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z'/%3E%3C/svg%3E");
				}
			}
			&:checked:not(:disabled) {
				& + label:before {
					background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='%232a7de1'%3E%3Cpath d=' M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L5.35355 8.85355C5.15829 9.04882 4.84171 9.04882 4.64645 8.85355L1.64645 5.85355C1.45118 5.65829 1.45118 5.34171 1.64645 5.14645C1.84171 4.95118 2.15829 4.95118 2.35355 5.14645L5 7.79289L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z'/%3E%3C/svg%3E");
				}
			}
		}
	}
}
</style>
