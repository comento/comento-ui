<template>
	<transition name="slide-fade">
		<aside v-if="sync_show" class="c-application c-toast" :class="[computedType, computedPosition]">
			<Typography class="c-toast--message" element="p" type="body2">
				<div class="c-toast--icon" :style="$slots['left-icon'] && 'margin-right: 4px'">
					<slot name="left-icon" />
				</div>
				<slot />
				<div class="c-toast--icon" :style="$slots['right-icon'] && 'margin-left: 4px'">
					<slot name="right-icon" />
				</div>
			</Typography>
		</aside>
	</transition>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'Toast',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		type: {
			type: String,
			default: 'basic',
			validator(value) {
				return ['basic', 'error', 'success'].indexOf(value) !== -1;
			},
		},
		time: {
			type: Number,
			default: 3000,
		},
		position: {
			type: String,
			default: 'bottom',
			validator(value) {
				return ['top', 'bottom'].indexOf(value) !== -1;
			},
		},
	},
	data() {
		return {
			motionStyle: null,
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
				}, this.time);
			});
		},
	},
	components: {
		Typography,
	},
};
</script>

<style lang="scss" scoped>
.c-toast {
	position: fixed;
	bottom: 16px;
	left: 50%;
	@include transform(translate(-50%));
	padding: 14px 16px;
	text-align: center;
	z-index: 9999;
	@include border-radius(4px);
	@include shadow4();
	display: table; // width: fit-content 대체
	max-width: 90%;

	&--message {
		margin: 0;
		@include flexbox();
		@include align-items(center);
	}

	&--icon {
		@include flexbox();
	}

	&.basic {
		background: $gray850;
		color: $white;
	}
	&.error {
		background: $red600;
		color: $white;
	}
	&.success {
		background: $blue600;
		color: $white;
	}

	@include pc {
		bottom: 32px;
	}

	&.position-top {
		top: 32px;
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
