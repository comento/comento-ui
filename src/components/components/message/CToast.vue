<template>
	<transition name="slide-fade">
		<aside v-if="sync_show" class="c-application c-toast" :class="[computedType, computedPosition]" v-bind="$attrs">
			<div v-if="$slots['icon']" class="c-toast--icon">
				<slot name="icon" />
			</div>
			<CIcon v-else-if="icon" class="c-toast--icon" :name="icon" :color="toastItemColor" />
			<CTypography class="c-toast--message" element="p" type="body2" :color="toastItemColor" :font-weight="500">
				{{ message }}
			</CTypography>
			<div v-if="$slots['button']" class="c-toast--button">
				<slot name="button" />
			</div>
		</aside>
	</transition>
</template>

<script>
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import CIcon, { IconNames } from '@/components/elements/core/icon/CIcon.vue';
import customValidator from '@/utils/custom-validator';
import { defineComponent } from 'vue';

export const toastTypes = ['basic', 'error', 'success', 'security'];
export const toastPositions = ['top', 'bottom'];

export default defineComponent({
	name: 'CToast',
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
		type: {
			/**
			 * 타입(basic, error, success, security)
			 */
			type: String,
			default: 'basic',
			validator(value) {
				return customValidator(value, toastTypes.includes(value), 'Toast', 'type');
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
		computedType() {
			return this.type;
		},
		computedPosition() {
			return `position-${this.position}`;
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
		CIcon,
		CTypography,
	},
});
</script>

<style lang="scss" scoped>
.c-toast {
	position: fixed;
	bottom: 16px;
	left: 50%;
	color: $white;
	@include transform(translate(-50%));
	padding: 14px 16px;
	text-align: center;
	z-index: 9999;
	@include border-radius(8px);
	@include shadow4();
	display: table; // width: fit-content 대체
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
	}

	&.basic {
		background: $gray850;
	}
	&.error {
		background: $error;
	}
	&.success {
		background: $success;
	}
	&.security {
		background: $primary;
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
