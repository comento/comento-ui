<template>
	<Dropdown
		v-click-outside="close"
		max-width="240px"
		:max-height="maxHeight"
		:label="label"
		:vertical="vertical"
		:full="full"
		class="c-select"
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
					/>
					<input
						v-else
						type="text"
						:value="value"
						:placeholder="placeholder"
						readonly
						class="c-select--input"
					/>
				</div>
				<div class="c-select--icon">
					<Icon name="IconArrowLargeLine" :color="color" :rotate="computedIconRotate" />
				</div>
			</div>
		</template>

		<!-- list 영역 -->
		<template v-if="open" v-slot:list>
			<List spacing>
				<template v-for="(option, index) in options">
					<ListItem :key="`c-select--option-${index}`" size="small" @click="handleSelect(option)">
						<Typography type="body2">{{ handleOptions(option, 'label') }}</Typography>
					</ListItem>
					<Divider :key="index" />
				</template>
			</List>
		</template>
	</Dropdown>
</template>

<script>
import List from '@/src/Components/DataDisplay/List';
import ListItem from '@/src/Components/DataDisplay/ListItem';
import Divider from '@/src/Elements/Utility/Divider';
import Dropdown from '@/src/Components/DataEntry/Dropdown';
import Typography from '@/src/Elements/Core/Typography/Typography';
import Icon from '@/src/Elements/Core/Icon/Icon';
import clickOutside from '@/directives/click-outside';
import customValidator from '@/utils/custom-validator';

export const selectColors = ['primary', 'secondary', 'success', 'error'];

export default {
	name: 'Select',
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
			default: 'primary',
			validator(value) {
				const isValid = selectColors.indexOf(value) !== -1;
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
	},
	data() {
		return {
			open: false,
			selectOption: null,
		};
	},
	computed: {
		computedIconRotate() {
			return !this.open ? 180 : 0;
		},
		hasObjectOptions() {
			return this.options.every(option => typeof option === 'object');
		},
	},
	created() {
		// 초기 렌더링 시 object option을 가지고 있어도 select를 하기 전 value 그대로 노출되는 이슈 해결
		if (this.hasObjectOptions) {
			const option = this.options.find(option => option.value === this.value);
			this.handleSelect(option);
		}
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
		handleSelect(option) {
			this.selectOption = option;
			this.$emit('input', this.handleOptions(option, 'value'));
			this.close();
		},
		handleOpen() {
			this.open = !this.open;
		},
		close() {
			this.open = false;
		},
	},
	components: {
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
	&--box {
		border: 1px solid $input-border-color;
		padding: 8px 16px;
		cursor: pointer;
		@include flexbox();
		@include flex-direction(row);
		@include justify-content(space-between);
		width: 100%;
	}

	&--item {
		cursor: pointer;
		width: 100%;
		@include body1();
		color: $gray850;

		> div,
		input {
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
		svg {
			transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
		}
	}
}
</style>
