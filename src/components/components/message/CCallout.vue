<template>
	<transition :name="computedTransition">
		<div
			class="c-application c-callout--container"
			:class="[computedSize, computedType, computedFull, { 'c-callout--closable': closable }]"
			:style="[computedPadding]"
			v-bind="$attrs"
		>
			<div class="c-callout--wrapper">
				<div class="flex align-center w-full">
					<!-- 아이콘 -->
					<slot v-if="hasIconSlot" name="icon" />
					<CIcon v-else :name="iconName" :color="computedIconColor" />

					<!-- 문구 -->
					<CTypography class="c-callout--message" color="gray700" :type="computedFontType">
						<slot />
					</CTypography>
					<!-- 닫기 -->
					<CIcon
						v-if="closable"
						class="c-callout--close-button c-pointer"
						color="gray300"
						:name="computedCloseIconName"
						@click.stop.capture="handleClose"
					/>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import getPadding from '@/utils/get-padding';
import { defineComponent, computed, toRefs } from 'vue';

export const CalloutTypes = ['information', 'error', 'success', 'notice'];
export const CalloutSizes = ['xsmall', 'small', 'medium'];

export default defineComponent({
	name: 'CCallout',
	props: {
		/**
		 * 타입(information, error, success, notice)
		 */
		type: {
			type: String,
			default: 'information',
			validator(value) {
				const isValid = CalloutTypes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid value of Callout type`);
				}
				return isValid;
			},
		},
		/**
		 * 크기(xsmall, small, medium)
		 */
		size: {
			type: String,
			default: 'small',
			validator(value) {
				const isValid = CalloutSizes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid value of Callout size`);
				}
				return isValid;
			},
		},
		full: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		closable: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		paddings: {
			type: Array,
			default() {
				return null;
			},
		},
	},
	emits: ['closeCallout'],
	setup(props, { emit, slots }) {
		const { full, type, size, closable, paddings } = toRefs(props);

		const computedFull = computed(() => {
			return full.value && 'full';
		});

		const computedIconColor = computed(() => {
			return {
				information: 'gray600',
				error: 'red600',
				success: 'green600',
				notice: 'blue600',
			}[type.value];
		});

		const computedSize = computed(() => {
			return size.value;
		});

		const computedType = computed(() => {
			return type.value;
		});

		const computedFontType = computed(() => {
			return {
				medium: 'body2',
				small: 'caption1',
				xsmall: 'caption2',
			}[size.value];
		});

		const computedCloseIconName = computed(() => {
			const iconSize = size.value === 'xsmall' ? 'XSmall' : 'Small';
			return `IconClose${iconSize}Line`;
		});

		const computedTransition = computed(() => {
			return closable.value ? 'callout-fade' : null;
		});

		const computedPadding = computed(() => {
			return paddings.value ? { ...getPadding(paddings.value) } : null;
		});

		const iconName = computed(() => {
			const name = {
				information: 'Information',
				error: 'Exclamation',
				notice: 'Megaphone',
				success: 'CheckRound',
			}[type.value];
			const sizeMap = {
				xsmall: 'XSmall',
				small: 'Small',
				medium: 'Small',
			}[size.value];
			return `Icon${name + sizeMap}Line`;
		});

		const handleClose = () => {
			emit('closeCallout');
		};

		const hasIconSlot = computed(() => Boolean(slots.icon));

		return {
			computedFull,
			computedIconColor,
			computedSize,
			computedType,
			computedFontType,
			computedCloseIconName,
			computedTransition,
			computedPadding,
			iconName,
			handleClose,
			hasIconSlot,
		};
	},
	components: {
		CTypography,
		CIcon,
	},
});
</script>

<style lang="scss" scoped>
@mixin callout-icon-margin-right($margin-right) {
	:deep(svg:first-child) {
		overflow: inherit; //overflow: hidden 때문에 margin을 주면 아이콘이 짤려서 추가함
		margin-right: $margin-right;
		cursor: auto;
	}
}

.c-callout {
	&--container {
		display: inline-flex;
		align-items: center;
		// full을 다음과 같은 방식으로 구현
		&.full {
			width: 100%;
			> .c-callout--wrapper {
				@include justify-content(space-between);
			}
		}
		svg:first-child {
			flex-shrink: 0;
		}

		&.xsmall {
			padding: 4px 8px;
			@include border-radius(6px);
			@include callout-icon-margin-right(4px);
		}
		&.small {
			padding: 8px;
			@include border-radius(6px);
			@include callout-icon-margin-right(6px);
		}
		&.medium {
			padding: 12px;
			@include border-radius(8px);
			@include callout-icon-margin-right(6px);
		}

		// type
		&.information {
			background-color: $gray000;
		}
		&.error {
			background-color: $red000;
		}
		&.success {
			background-color: $green000;
		}
		&.notice {
			background-color: $blue000;
		}
	}
	&--wrapper {
		display: inline-flex;
		width: 100%;
		position: relative;
		align-items: center;
	}
	&--message {
		word-break: keep-all;
		white-space: normal;
		&:deep(strong) {
			@include f-regular();
		}

		@include pc {
		}
	}
	&--close-button {
		margin-left: auto;
		flex-shrink: 0;
	}
}

.callout-fade-leave-active {
	transition: all 0.2s;
}
.callout-fade-enter, .callout-fade-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(-100%);
	opacity: 0;
}
</style>
