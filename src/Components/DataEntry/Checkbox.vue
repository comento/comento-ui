<template>
	<div class="c-checkbox">
		<input
			:id="computedId"
			v-model="sync_value"
			type="checkbox"
			:disabled="disabled"
			v-bind="$attrs"
			v-on="$listeners"
		/>
		<label :class="{ disabled }" :for="computedId">
			<Typography :color="disabled ? 'gray300' : 'gray500'">
				<slot />
			</Typography>
		</label>
	</div>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'Checkbox',
	inheritAttrs: false,
	props: {
		value: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		id: {
			type: String,
			default: '',
		},
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
			return this.id || `input-${this._uid}`;
		},
	},
	components: { Typography },
};
</script>

<style lang="scss" scoped>
.c-checkbox {
	@include flexbox();

	input[type='checkbox'] {
		display: none;

		&:hover:not(:disabled) {
			& + label:before {
				background-color: $green000;
				border-color: $green600;
			}
		}

		&:disabled,
		&:disabled + label:before {
			cursor: not-allowed !important;
			pointer-events: none;
		}
		&:disabled {
			& + label:before {
				background-color: $gray100;
			}
			&:checked + label:before {
				background-color: $gray100;
				border-color: $gray200;
				content: '';
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' width='18' height='18' fill='%2300c854'%3E%3Cpath d='M3.75 9.15753L7.5 12.9075L14.25 6.15753L13.1925 5.09253L7.5 10.785L4.8075 8.10003L3.75 9.15753Z'/%3E%3C/svg%3E");
			}
		}

		&:checked:not(:disabled) {
			& + label:before {
				background-color: #fff;
				background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' width='18' height='18' fill='rgba(0, 200, 84)'><path d='M3.75 9.15753L7.5 12.9075L14.25 6.15753L13.1925 5.09253L7.5 10.785L4.8075 8.10003L3.75 9.15753Z'/></svg>");
				border-color: $green600;
			}
		}

		& + label {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			> div {
				display: inline-block;
			}
			&:before {
				width: 20px;
				height: 20px;
				content: '';
				background-color: $gray000;
				border: 1px solid $gray200;
				border-radius: 2px;
				display: inline-block;
				margin-right: 8px;
				box-sizing: border-box;
				cursor: pointer;
			}
		}
	}
}
</style>
