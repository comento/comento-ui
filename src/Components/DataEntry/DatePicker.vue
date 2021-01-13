<template>
	<div class="c-application c-date-picker">
		<date-picker
			v-model="sync_value"
			prefix-class="c"
			type="date"
			:placeholder="placeholder"
			:format="format"
			:value-type="valueType"
			:disabled-date="disabledDate"
			:disabled="disabled"
			:class="computedClasses"
		/>
		<Hint :color="color" :value="hint" />
	</div>
</template>

<script>
// https://github.com/mengxiong10/vue2-datepicker#props
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ko';
import customValidator from '@/utils/custom-validator.js';
import Hint from '../DataDisplay/Hint';

export const valueTypes = ['format', 'date', 'timestamp'];
export const colors = ['primary', 'success', 'secondary', 'error'];

export default {
	name: 'DatePicker',
	props: {
		value: {
			type: String,
		},
		placeholder: {
			type: String,
			default: '날짜를 선택해주세요',
		},
		format: {
			type: String,
			default: 'YYYY.MM.DD',
		},
		valueType: {
			type: String,
			default: 'format',
			validator(value) {
				return customValidator(value, valueTypes.indexOf(value) !== -1, 'DatePicker', 'valueType');
			},
		},
		disabledDate: {
			type: Function,
		},
		full: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: 'secondary',
			validator(value) {
				return customValidator(value, colors.indexOf(value) !== -1, 'DatePicker', 'color');
			},
		},
		hint: {
			type: String,
			default: null,
		},
	},
	computed: {
		sync_value: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit('update:value', value);
			},
		},
		computedClasses() {
			return { full: this.full };
		},
	},
	components: {
		Hint,
		'date-picker': DatePicker,
	},
};
</script>

<style lang="scss" scoped>
.c-date-picker {
	.full {
		width: 100%;
	}
}
</style>
