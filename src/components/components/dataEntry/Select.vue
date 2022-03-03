<template>
	<Dropdown
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
		<template v-slot:item>
			<div class="c-select--box" @click="handleOpen">
				<div class="c-select--item">
					<!-- 라벨 보여주기 -->
					<input
						v-if="selectOption"
						type="text"
						:value="handleOptions(selectOption, 'label')"
						readonly
						class="c-select--input"
						@input="value = $event.target.value"
					/>
					<input
						v-else
						type="text"
						:value="value"
						:placeholder="placeholder"
						readonly
						class="c-select--input"
						@input="value = $event.target.value"
					/>
				</div>
				<div class="c-select--icon">
					<EtcIcon :name="computedIconName" :color="computedIconColor" :rotate="computedIconRotate" />
				</div>
			</div>
		</template>

		<!-- list 영역 -->
		<template v-if="open" v-slot:list>
			<List spacing>
				<template v-for="(option, index) in options">
					<ListItem
						:key="`c-select--option-${index}`"
						size="small"
						class="c-select--list-item"
						@click="handleEmitInputEvent(option)"
					>
						<Typography :type="computedListItemTypography" color="gray800">
							{{ handleOptions(option, 'label') }}
						</Typography>
						<Icon
							v-if="option.icon"
							:name="option.icon"
							:color="option.iconColor || 'black'"
							class="c-pointer"
						/>
					</ListItem>
					<Divider :key="index" />
				</template>
			</List>
		</template>
	</Dropdown>
</template>

<script>
import List from '@/components/components/dataDisplay/list/list/List';
import ListItem from '@/components/components/dataDisplay/list/list/ListItem';
import Divider from '@/components/elements/utility/Divider';
import Dropdown from '@/components/components/dataEntry/Dropdown';
import Typography from '@/components/elements/core/typography/Typography';
import Icon from '@/components/elements/core/icon/Icon';
import clickOutside from '@/directives/click-outside';
import customValidator from '@/utils/custom-validator';
import { colorKeys } from '@/utils/constants/color';
import EtcIcon from '@/components/elements/core/icon/EtcIcon';
import globalMixin from '@/mixins/globalMixin';

export const selectSizes = ['small', 'medium'];

/**
 * @displayName c-select
 */
export default {
	name: 'Select',
	mixins: [globalMixin],
	inheritAttrs: false,
	props: {
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
				const isValid = colorKeys.indexOf(value) !== -1;
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
				return selectSizes.indexOf(value) !== -1;
			},
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			open: false,
			selectOption: null,
		};
	},
	computed: {
		computedIconRotate() {
			return !this.open ? 0 : 180;
		},
		computedIconName() {
			const defaultIconNames = {
				small: 'IconDropdownSmallFillEtc',
				medium: 'IconDropdownMediumLineEtc',
			};

			return defaultIconNames[this.size];
		},
		computedIconColor() {
			const defaultIconColors = {
				small: 'gray600',
				medium: 'blue600',
			};

			return this.color || defaultIconColors[this.size];
		},
		hasObjectOptions() {
			return this.options.every(option => typeof option === 'object');
		},
		classes() {
			return [this.size, this.computedDisabled];
		},
		computedListItemTypography() {
			const defaultListItemTypography = {
				small: 'caption1',
				medium: 'body1',
			};
			return defaultListItemTypography[this.size];
		},
		computedDisabled() {
			return { disabled: this.disabled };
		},
	},
	watch: {
		// 이렇게 해야 options가 반응형일 때를 대응할 수 있다.
		options() {
			const option = this.options.find(option => option.value === this.value);
			this.handleSelect(option);
		},
		// 초기 렌더링 시 object option을 가지고 있어도 select를 하기 전 value 그대로 노출되는 이슈 해결
		value: {
			immediate: true,
			handler(newVal) {
				const option = this.options.find(option => option.value === newVal);
				this.handleSelect(option);
			},
		},
	},
	methods: {
		handleOptions(option, type) {
			const hasLabel = this.$_hasOwnProperty(option, 'label');
			const hasValue = this.$_hasOwnProperty(option, 'value');

			if (type === 'label' && hasLabel) {
				return option.label;
			}
			if (type === 'value' && hasValue) {
				return option.value;
			}
			return option;
		},
		handleEmitInputEvent(option) {
			this.$emit('input', this.handleOptions(option, 'value'));
		},
		handleSelect(option) {
			this.selectOption = option;
			this.close();
		},
		handleOpen() {
			if (!this.disabled) {
				this.toggleOpen();
			}
		},
		toggleOpen() {
			this.open = !this.open;
		},
		close() {
			this.open = false;
		},
	},
	components: {
		EtcIcon,
		Icon,
		Divider,
		Dropdown,
		List,
		ListItem,
		Typography,
	},
	directives: {
		clickOutside,
	},
};
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
		border: 1px solid $input-border-color;
		@include border-radius(2px);
		padding: 7px 16px;
		cursor: pointer;
		@include flexbox();
		@include flex-direction(row);
		@include justify-content(space-between);
		width: 100%;
	}

	&--item {
		width: 100%;
		@include flexbox();

		> div,
		input {
			@include body1();
			color: $gray850;
			width: 100%;
			cursor: pointer;
		}
	}

	&--input {
		@include body1();
		color: $gray850;
		border: none;
		padding: 0;
		width: 100%;
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
		.c-select {
			&--box {
				padding: 8px 12px;
			}
			&--item {
				input {
					@include caption1();
					&::placeholder {
						color: $gray500;
					}
				}
			}
		}
	}
}
</style>
