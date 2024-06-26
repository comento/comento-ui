<template>
	<transition :name="computedTransition">
		<div
			class="c-application c-callout--container"
			:class="[computedSize, computedType, computedFull, { 'c-callout--closable': closable }]"
			:style="[computedPadding]"
			v-bind="$attrs"
			v-on="$listeners"
		>
			<div class="c-callout--wrapper">
				<div class="flex align-center w-full">
					<!-- 아이콘 -->
					<slot v-if="$slots['icon']" name="icon" />
					<Icon v-else :name="iconName" :color="computedIconColor" />

					<!-- 문구 -->
					<Typography class="c-callout--message" color="gray700" :type="computedFontType">
						<slot />
					</Typography>
					<!-- 닫기 -->
					<Icon
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
import Icon from '@/components/icon/Icon.vue';
import Typography from '@/components/typography/Typography.vue';
import paddingMixin from '@/mixins/paddingMixin.js';

export const CalloutTypes = ['information', 'error', 'success', 'notice'];
export const CalloutSizes = ['xsmall', 'small', 'medium'];

/**
 * @displayName c-callout
 */
export default {
	name: 'Callout',
	mixins: [paddingMixin],
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
	computed: {
		computedFull() {
			return this.full && 'full';
		},
		computedIconColor() {
			return {
				information: 'gray600',
				error: 'red600',
				success: 'green600',
				notice: 'blue600',
			}[this.type];
		},
		computedSize() {
			return this.size;
		},
		computedType() {
			return this.type;
		},
		computedFontType() {
			return {
				medium: 'body2',
				small: 'caption1',
				xsmall: 'caption2',
			}[this.size];
		},
		computedCloseIconName() {
			const iconSize = this.size === 'xsmall' ? 'XSmall' : 'Small';
			return `IconClose${iconSize}Line`;
		},
		computedTransition() {
			return this.closable ? 'callout-fade' : null;
		},
		computedPadding() {
			return this.paddings ? { ...this.$_setPadding(this.paddings) } : null;
		},
		iconName() {
			const name = {
				information: 'Information',
				error: 'Exclamation',
				notice: 'Megaphone',
				success: 'CheckRound',
			}[this.type];
			const size = {
				xsmall: 'XSmall',
				small: 'Small',
				medium: 'Small',
			}[this.size];
			return `Icon${name + size}Line`;
		},
	},
	methods: {
		handleClose() {
			this.$emit('closeCallout');
		},
	},
	components: {
		Typography,
		Icon,
	},
};
</script>

<style lang="scss" scoped>
@mixin callout-icon-margin-right($margin-right) {
	::v-deep svg:first-child {
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
		&::v-deep strong {
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
