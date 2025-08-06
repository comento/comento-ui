<template>
	<transition name="slide-fade">
		<aside
			v-if="sync_show"
			class="c-application c-toast"
			:class="[computedColor, computedPosition, hasButton]"
			v-on="$listeners"
		>
			<div v-if="$slots['icon']" class="c-toast--icon">
				<slot name="icon" />
			</div>
			<Icon v-else-if="icon" class="c-toast--icon" :name="icon" :color="toastItemColor" />
			<Typography class="c-toast--message" element="p" type="body2" :color="toastItemColor" :font-weight="500">
				{{ message }}
			</Typography>
			<div v-if="$slots['button']" class="c-toast--button">
				<slot name="button" />
			</div>
		</aside>
	</transition>
</template>

<script>
import Typography from '@/components/typography/Typography.vue';
import Icon, { IconNames } from '@/components/icon/Icon.vue';
import customValidator from '@/utils/custom-validator.js';

export const toastColors = ['info', 'accent', 'success', 'primary'];
export const toastPositions = ['top', 'bottom'];

/**
 * @displayName c-toast
 */
export default {
	name: 'Toast',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		message: {
			type: String,
			default: '',
			required: true,
		},
		color: {
			/**
			 * 색상(info, accent, success, primary)
			 */
			type: String,
			default: 'info',
			validator(value) {
				return customValidator(value, toastColors.includes(value), 'Toast', 'color');
			},
		},
		timeout: {
			type: Number,
			default: 3000,
		},
		/**
		 * 위치(top, bottom)
		 */
		position: {
			type: String,
			default: 'bottom',
			validator(value) {
				const isValid = toastPositions.indexOf(value) !== -1;
				return customValidator(value, isValid, 'Toast', 'position');
			},
		},
		icon: {
			type: String,
			default: null,
			validator(value) {
				const isValid = IconNames.indexOf(value) !== -1;
				return customValidator(value, isValid, 'Toast', 'icon');
			},
		},
	},
	data() {
		return {
			toastItemColor: 'white',
		};
	},
	computed: {
		sync_show: {
			get() {
				return this.show;
			},
		},
		computedColor() {
			return this.color;
		},
		computedPosition() {
			return `position-${this.position}`;
		},
		hasButton() {
			return this.$slots['button'] ? 'has-button' : '';
		},
	},
	watch: {
		show() {
			this.show && this.handleShow();
		},
	},
	methods: {
		handleShow() {
			this.$nextTick(() => {
				setTimeout(() => {
					this.$emit('update:show', false);
				}, this.timeout);
			});
		},
	},
	components: {
		Icon,
		Typography,
	},
};
</script>

<style lang="scss" scoped>
.c-toast {
	position: fixed;
	bottom: 108px;
	left: 50%;
	color: $white;
	@include transform(translate(-50%));
	padding: 14px 16px;
	text-align: center;
	z-index: 9999;
	@include border-radius(8px);
	@include shadow4();
	display: table; // width: fit-content 대체
	@include mobile {
		width: 100%;
	}
	max-width: 90%;
	@include flexbox();
	@include flex-direction(row);
	@include align-items(center);

	&--message {
		margin: 0;
		width: max-content;
		@include flexbox();
		@include align-items(center);
	}

	&--icon {
		@include flexbox();
		margin-right: 4px;
	}

	&--button {
		@include flexbox();
		&::v-deep > button {
			@include border-radius(6px);
			padding: 6px 10px;
			color: white;
			@include body2();
			font-weight: 600;
		}
	}

	&.info {
		background: $gray850;

		.c-toast--button {
			&::v-deep > button {
				background: rgba(255, 255, 255, 0.38);
				@include state-style {
					background: rgba(255, 255, 255, 0.58);
				}
			}
		}
	}
	&.accent {
		background: $accent;
	}
	&.success {
		background: $success;
	}
	&.primary {
		background: $primary;
	}

	&.has-button {
		padding: 10px 16px;
		cursor: pointer;
		@include pc {
			width: 343px;
		}
		.c-toast--button {
			margin-left: auto;
		}
	}

	@include pc {
		bottom: 50px;
	}

	&.position-top {
		top: $topbar-height + 16px;
		bottom: auto;

		@include pc {
			top: 100px;
		}
	}
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	@include transition(all 0.3s ease-in-out);
	position: fixed;
}

.slide-fade-enter,
.slide-fade-leave-to {
	opacity: 0;
	@include transform(translate(-50%, 10px));
	&.position-top {
		@include transform(translate(-50%, -20px));
	}
}
</style>
