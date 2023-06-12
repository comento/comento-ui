<template>
	<CDropdown
		v-click-outside="close"
		max-width="240px"
		:max-height="maxHeight"
		:label="label"
		:vertical="vertical"
		:full="full"
		class="c-select"
		:class="classes"
	>
		<!-- select 영역 -->
		<template #item>
			<div class="c-select--box" :class="[computedLined, computedActive, computedError]" @click="handleOpen">
				<div class="c-select--item">
					<!-- 라벨 보여주기 -->
					<input
						v-if="selectOption.value"
						type="text"
						:value="handleOptions(selectOption.value, 'label')"
						readonly
						class="c-select--input"
						@input="handleEmitInputEvent($event.target.value)"
					/>
					<input
						v-else
						type="text"
						:value="value"
						:placeholder="placeholder"
						readonly
						class="c-select--input"
						@input="handleEmitInputEvent($event.target.value)"
					/>
				</div>
				<div class="c-select--icon">
					<CEtcIcon :name="computedIconName" :color="computedIconColor" :rotate="computedIconRotate" />
				</div>
			</div>
			<CHint v-if="error" color="error">
				{{ hintMessage }}
			</CHint>
		</template>

		<!-- list 영역 -->
		<template v-if="open.value" #list>
			<CList spacing>
				<template v-for="(option, index) in options" :key="`c-select--list-${index}`">
					<CListItem size="large" class="c-select--list-item" @click="handleEmitInputEvent(option)">
						<CTypography :type="computedListItemTypography" color="gray800">
							{{ handleOptions(option, 'label') }}
						</CTypography>
						<CIcon
							v-if="option.icon"
							:name="option.icon"
							:color="option.iconColor || 'black'"
							class="c-pointer"
						/>
					</CListItem>
					<CDivider class="my-6" />
				</template>
			</CList>
		</template>
	</CDropdown>
</template>

<script>
import CList from '@/components/components/dataDisplay/list/list/CList.vue';
import CListItem from '@/components/components/dataDisplay/list/list/CListItem.vue';
import CDivider from '@/components/elements/utility/CDivider.vue';
import CDropdown from '@/components/components/dataEntry/CDropdown.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import clickOutside from '@/directives/click-outside';
import customValidator from '@/utils/custom-validator';
import { colorKeys } from '@/utils/constants/color';
import CEtcIcon from '@/components/elements/core/icon/EtcIcon.vue';
import CHint from '@/components/components/dataDisplay/CHint.vue';
import { defineComponent, ref, computed, toRefs, watch } from 'vue';

export const selectSizes = ['small', 'medium'];
export const selectTypes = ['basic', 'underline', 'transparent'];

export default defineComponent({
	name: 'CSelect',
	inheritAttrs: false,
	props: {
		/**
		 * 타입(basic, underline)
		 */
		type: {
			type: String,
			default: 'basic',
			validator(value) {
				return selectTypes.includes(value);
			},
		},
		value: {
			type: [String, Number],
			default: '',
			validator: value => ['string', 'number'].includes(typeof value),
		},
		options: {
			type: Array,
			required: true,
			default: () => [],
			validator: prop => prop.every(e => typeof e === 'string' || typeof e === 'number' || typeof e === 'object'),
		},
		placeholder: {
			type: String,
			default: '선택하세요',
			validator(value) {
				return typeof value === 'string';
			},
		},
		label: {
			type: String,
			default: null,
			validator(value) {
				return typeof value === 'string';
			},
		},
		// 라벨 방향
		vertical: {
			type: Boolean,
			default: true,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		maxHeight: {
			type: String,
			default: 'auto',
			validator(value) {
				return typeof value === 'string';
			},
		},
		color: {
			type: String,
			default: null,
			validator(value) {
				const isValid = colorKeys.includes(value);
				return customValidator(value, isValid, 'Select', 'color');
			},
		},
		full: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		/**
		 * 크기(small, medium)
		 */
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return selectSizes.includes(value);
			},
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		error: {
			type: Boolean,
		},
		hintMessage: {
			type: String,
			default: '메시지는 선택사항입니다',
		},
	},
	emits: ['input'],
	setup(props, { emit }) {
		const { size, error, color, disabled, type, options } = toRefs(props);
		const open = ref(false);
		const selectOption = ref(null);

		const computedIconRotate = computed(() => (!open.value ? 0 : 180));

		const computedIconName = computed(() => {
			const defaultIconNames = {
				small: 'IconDropdownSmallFillEtc',
				medium: 'IconDropdownMediumLineEtc',
			};

			return defaultIconNames[size.value];
		});

		const computedIconColor = computed(() => {
			const defaultIconColors = {
				small: 'gray600',
				medium: 'blue600',
			};

			if (error.value) return 'red600';
			return color.value || defaultIconColors[size.value];
		});

		const classes = computed(() => [size.value, { disabled: disabled.value }]);
		const computedListItemTypography = computed(() => {
			const defaultListItemTypography = {
				small: 'body2',
				medium: 'body2',
			};
			return defaultListItemTypography[size.value];
		});

		const computedDisabled = computed(() => ({ disabled: disabled.value }));
		const computedLined = computed(() => `c-select--${type.value}`);
		const computedError = computed(() => (error.value ? `c-select--error` : ''));
		const computedActive = computed(() => ({ active: open.value }));

		const handleOptions = (option, type) => {
			const hasLabel = Object.prototype.hasOwnProperty.call(option, 'label');
			const hasValue = Object.prototype.hasOwnProperty.call(option, 'value');

			if (type === 'label' && hasLabel) {
				return option.label;
			}
			if (type === 'value' && hasValue) {
				return option.value;
			}
			return option;
		};

		const handleEmitInputEvent = option => {
			emit('input', handleOptions(option, 'value'));
		};

		const handleSelect = option => {
			selectOption.value = option;
			close();
		};

		const handleOpen = () => {
			if (!disabled.value) {
				toggleOpen();
			}
		};

		const toggleOpen = () => (open.value = !open.value);
		const close = () => (open.value = false);

		watch(options, newOptions => {
			const option = newOptions.find(option => option.value === selectOption.value);
			handleSelect(option);
		});

		watch(
			selectOption,
			newValue => {
				const option = options.value.find(option => option.value === newValue);
				handleSelect(option);
			},
			{ immediate: true },
		);

		return {
			open,
			selectOption,
			computedIconRotate,
			computedIconName,
			computedIconColor,
			classes,
			computedListItemTypography,
			computedDisabled,
			computedLined,
			computedError,
			computedActive,
			handleEmitInputEvent,
			handleOptions,
			handleOpen,
		};
	},
	components: {
		CHint,
		CEtcIcon,
		CIcon,
		CDivider,
		CDropdown,
		CList,
		CListItem,
		CTypography,
	},
	directives: {
		clickOutside,
	},
});
</script>

<style lang="scss" scoped>
.c-select {
	&.disabled {
		.c-select {
			&--box,
			&--item > div,
			&--item > input,
			&--icon svg {
				opacity: 0.4;
				cursor: not-allowed;
			}
		}
	}

	&--box {
		@include flexbox();
		@include flex-direction(row);
		@include justify-content(space-between);
		cursor: pointer;
		width: 100%;
		&.c-select {
			&--basic {
				padding: 9px 16px;
				@include border-radius(4px);
				border: 1px solid $gray250;
				&.active {
					border: 1px solid $gray400;
				}
			}
			&--underline {
				padding: 7px 8px;
				border-bottom: 1px solid $gray250;
				&.active {
					border-bottom: 1px solid $gray400;
				}
			}
			&--transparent {
				padding: 5px 12px;
				border-bottom: none;
				&:hover {
					border-radius: 6px;
					background-color: $gray100;
					.c-select--input {
						background-color: $gray100;
					}
				}
				&.active {
					border-bottom: none;
				}
				&.c-select--error {
					border: none;
					background-color: $red000;
					border-radius: 6px;
					.c-select--input {
						background-color: $red000;
					}
				}
			}
			&--error {
				border: 1px solid $red600;
				&.active {
					border: 1px solid $red600;
				}
				.c-select--input::placeholder {
					color: $red100;
				}
			}
		}
	}

	&--item {
		width: 100%;
		@include flexbox();

		> div,
		input {
			width: 100%;
			cursor: pointer;
		}
	}

	&--input {
		border: none;
		padding: 0;
		&::placeholder {
			color: $gray300;
		}
	}

	&--icon {
		@include flexbox();
		@include align-items(center);
		svg {
			transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
			cursor: pointer;
		}
	}

	&--list-item {
		@include flexbox();
		@include justify-content(space-between);
	}
	// size
	&.small {
		& .c-select--box {
			& input {
				@include body2();
				color: $gray850;
			}
			&.c-select--basic {
				padding: 6.5px 12px;
			}
		}
	}
	&.medium {
		.c-select--box {
			&.c-select {
				&--basic {
					input {
						@include body2();
						color: $gray850;
					}
				}
				&--underline {
					input {
						@include body1();
						color: $gray850;
					}
				}
			}
		}
	}
}
</style>
