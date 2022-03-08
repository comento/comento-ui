<template>
	<button class="c-application c-fab" :disabled="disabled" v-bind="$attrs" :class="classes" v-on="$listeners">
		<Icon :name="iconName" color="white" class="c-fab-icon" />
	</button>
</template>

<script>
import Icon from '@/components/elements/core/icon/Icon';

export const FABColors = ['primary', 'secondary'];

export default {
	name: 'FAB',
	props: {
		iconName: {
			type: String,
			default: 'IconWriting2XLargeLine',
		},
		color: {
			type: String,
			default: 'primary',
			validator(value) {
				return FABColors.includes(value);
			},
		},
		disabled: {
			type: Boolean,
		},
	},
	computed: {
		computedColor() {
			return this.color;
		},
		classes() {
			return [this.computedColor];
		},
	},
	components: { Icon },
};
</script>

<style lang="scss" scoped>
.c-fab {
	cursor: pointer;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: none;
	@include flexbox();
	@include align-items(center);
	@include justify-content(center);
	// 아이콘 커서는 부모를 따름
	&-icon {
		cursor: inherit;
	}

	&:disabled {
		cursor: not-allowed;
		&:active {
			pointer-events: none;
		}
	}

	&.primary {
		background-color: $primary;
		@include state-style {
			background-color: $blue800;
		}
		&:disabled {
			background-color: $blue100;
		}
	}

	&.secondary {
		background-color: $secondary;
		@include state-style {
			background-color: $orange800;
		}
		&:disabled {
			background-color: $orange100;
		}
	}
}
</style>
