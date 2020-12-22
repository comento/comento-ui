<template>
	<div class="c-application c-textfield" :class="[computedLabelStyle]">
		<input
			:id="computedId"
			:type="type"
			:placeholder="placeholder"
			:name="computedId"
			:label="label"
			:align="align"
			:focus="focus"
			:read-only="readOnly"
			:disabled="disabled"
			:error="error"
			class="c-textfield--input"
			:class="[computedOutline, computedUnderline]"
		/>
		<label v-if="label !== ''" :for="computedId" class="c-textfield--label">{{ label }}</label>
		<p class="c-textfield--error"></p>
	</div>
</template>

<script>
export const textfieldTypes = ['text', 'number', 'password', 'email', 'tel', 'url'];
export const textfieldAligns = ['left', 'center', 'right'];

export default {
	name: 'TextField',
	inheritAttrs: false,
	props: {
		type: {
			type: String,
			default: 'text',
			validator(value) {
				const isValid = textfieldTypes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the textfield type`);
				}
				return isValid;
			},
		},
		placeholder: {
			type: String,
			default: '',
			validator(value) {
				return typeof value === 'string';
			},
		},
		name: {
			type: String,
			default: '',
			validator(value) {
				return typeof value === 'string';
			},
		},
		label: {
			type: String,
			default: '',
			validator(value) {
				return typeof value === 'string';
			},
		},
		outlined: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		underlined: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		align: {
			type: String,
			default: 'left',
			validator(value) {
				const isValid = textfieldAligns.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the textfield align`);
				}
				return isValid;
			},
		},
		focus: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		readOnly: {
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
		error: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
	},
	computed: {
		computedOutline() {
			return this.outlined && 'outlined';
		},
		computedUnderline() {
			return this.underlined && 'underlined';
		},
		computedId() {
			return this.id || `textField-${this._uid}`;
		},
		computedLabelStyle() {
			if (this.label !== '') {
				return 'label';
			}
		},
		computedAlign() {
			return {
				textAlign: this.align,
			};
		},
	},
	methods: {
		typing(e) {
			this.sync_value = e.target.value;
		},
	},
};
</script>

<style lang="scss" scoped>
.c-textfield {
	height: 40px;
	position: relative;
	&--input {
		display: block;
		width: 100%;
		height: 100%;
		border: 0;
		padding: 0 16px;
		color: $gray800;
		@include body1;
		@include transition(all 0.2s ease);
		&::placeholder {
			color: $gray300;
		}
		&.outlined {
			border: 1px solid $gray200;
			@include border-radius(2px);
			&:focus {
				border-color: $gray400;
			}
		}
		&.underlined {
			border-bottom: 1px solid $gray200;
			&:focus {
				border-color: $gray400;
			}
		}
		&:disabled {
			cursor: not-allowed !important;
			&:active {
				pointer-events: none;
			}
		}
	}
	&.label {
		.c-textfield--input {
			&:focus {
				border-color: $green600;
				+ .c-textfield--label {
					opacity: 1;
					color: $green600;
				}
			}
		}
		.c-textfield--label {
			position: absolute;
			top: -6px;
			left: 12px;
			padding: 0 2px;
			background: $white;
			@include caption2;
			opacity: 0;
		}
	}
}
</style>
