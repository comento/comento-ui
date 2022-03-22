<template>
	<div class="c-application c-date-picker" :class="computedColor">
		<date-picker
			:ref="`c-date-picker-${uid}`"
			v-model="sync_value"
			prefix-class="c"
			type="date"
			:placeholder="placeholder"
			:format="format"
			:value-type="valueType"
			:disabled-date="disabledDate"
			:disabled="disabled"
			:class="computedClasses"
			:editable="false"
			:clearable="clearable"
			:popup-class="`c-calendar-${uid}`"
			:append-to-body="appendToBody"
			:open.sync="open"
			v-on="$listeners"
			@change="handleChange"
		/>
		<Hint :color="color">{{ hint }}</Hint>
	</div>
</template>

<script>
// https://github.com/mengxiong10/vue2-datepicker#props
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ko';
import customValidator from '@/utils/custom-validator.js';
import uniqueId from '@/utils/unique-id';
import Hint from '@/components/components/dataDisplay/Hint';

export const valueTypes = ['format', 'date', 'timestamp'];
export const colors = ['primary', 'success', 'info', 'error'];

/**
 * @displayName c-date-picker
 */
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
		/**
		 * 값타입(format, date, timestamp)
		 */
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
		/**
		 * 색상(primary, success, info, error)
		 */
		color: {
			type: String,
			default: 'info',
			validator(value) {
				return customValidator(value, colors.indexOf(value) !== -1, 'DatePicker', 'color');
			},
		},
		hint: {
			type: String,
			default: null,
		},
		clearable: {
			type: Boolean,
			default: true,
		},
		appendToBody: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			open: false,
			uid: uniqueId(),
		};
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
		computedColor() {
			return this.color;
		},
	},
	watch: {
		open() {
			if (this.open && !this.disabled) {
				this.handleCalendarSize();
			}
		},
	},
	methods: {
		handleChange() {
			this.open = false;
		},
		handleCalendarSize() {
			const $datePicker = this.$refs[`c-date-picker-${this.uid}`];
			const datePickerWidth = $datePicker.$el.clientWidth;

			this.$nextTick(() => {
				const calendarDefaultWidth = 248;
				const calendarDefaultContentHeight = 224;
				const $calendar = document.querySelector(`.c-calendar-${this.uid} > div > div > div`);
				const $calendarContent = $calendar.lastChild;
				$calendar.style.width = `${datePickerWidth}px`;

				if (datePickerWidth > calendarDefaultWidth) {
					$calendarContent.style.height = `${calendarDefaultContentHeight * 1.2}px`;
				}
			});
		},
	},
	components: {
		Hint,
		'date-picker': DatePicker,
	},
};
</script>

<!-- 스타일은 datePicker.scss -->
<!-- 스타일 커스텀은 datePicker.init.scss -->
<style lang="scss" scoped>
.c-date-picker {
	.full {
		width: 100%;
	}
	&.primary {
		&::v-deep .c-input {
			&:focus {
				border-color: $primary;
			}
		}
	}
	&.error {
		&::v-deep .c-input {
			&:focus {
				border-color: $error;
			}
		}
	}
	&.success {
		&::v-deep .c-input {
			&:focus {
				border-color: $success;
			}
		}
	}
	&.info {
		&::v-deep .c-input {
			&:focus {
				border-color: $info;
			}
		}
	}
}
</style>
