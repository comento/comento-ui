<template>
	<div class="c-application c-date-picker" :class="computedColor">
		<date-picker
			:ref="`c-date-picker-${uid}`"
			v-model="sync_value"
			v-model:open="open"
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
			v-bind="$attrs"
			@change="handleChange"
		/>
		<CHint :color="color">
			{{ hint }}
		</CHint>
	</div>
</template>

<script>
// https://github.com/mengxiong10/vue2-datepicker#props
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ko';
import customValidator from '@/utils/custom-validator.js';
import uniqueId from '@/utils/unique-id';
import CHint from '@/components/components/dataDisplay/CHint.vue';
import { defineComponent, toRefs, ref, computed, nextTick, watch } from 'vue';

export const valueTypes = ['format', 'date', 'timestamp'];
export const colors = ['primary', 'success', 'info', 'error'];

export default defineComponent({
	name: 'CDatePicker',
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
	emits: ['update:value'],
	setup(props, { emit }) {
		const { value, full, color, disabled } = toRefs(props);
		const open = ref(false);
		const uid = ref(uniqueId());

		const sync_value = computed({
			get: () => value.value,
			set: val => emit('update:value', val),
		});

		const computedClasses = computed(() => ({ full: full.value }));
		const computedColor = computed(() => color.value);

		const handleChange = () => {
			open.value = false;
		};

		const handleCalendarSize = () => {
			const $datePicker = this.$refs[`c-date-picker-${uid.value}`];
			const datePickerWidth = $datePicker.$el.clientWidth;

			nextTick(() => {
				const calendarDefaultWidth = 248;
				const calendarDefaultContentHeight = 224;
				const $calendar = document.querySelector(`.c-calendar-${uid.value} > div > div > div`);
				const $calendarContent = $calendar.lastChild;
				$calendar.style.width = `${datePickerWidth}px`;

				if (datePickerWidth > calendarDefaultWidth) {
					$calendarContent.style.height = `${calendarDefaultContentHeight * 1.2}px`;
				}
			});
		};

		watch(open, newOpen => {
			if (newOpen && !disabled.value) {
				handleCalendarSize();
			}
		});

		return {
			open,
			uid,
			sync_value,
			computedClasses,
			computedColor,
			handleChange,
			handleCalendarSize,
		};
	},
	components: {
		CHint,
		'date-picker': DatePicker,
	},
});
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
