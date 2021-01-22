<template>
	<Modal
		ref="fullscreen"
		class="c-fullscreen-modal"
		:show="show"
		:show-close-button="showCloseButton"
		:class="[computedAlign]"
		@close="close"
	>
		<slot />
	</Modal>
</template>

<script>
import Modal from '@/src/Components/Message/Modal/Modal';
export const fullScreenAlign = ['left', 'right', 'top', 'bottom'];

export default {
	name: 'FullscreenModal',
	props: {
		align: {
			type: String,
			default: 'top',
			validator(value) {
				return fullScreenAlign.indexOf(value) !== -1;
			},
		},
		show: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		showCloseButton: {
			type: Boolean,
			default: true,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
	},
	computed: {
		computedAlign() {
			return this.align;
		},
	},
	updated() {
		if (this.show) {
			setTimeout(() => {
				this.$refs.fullscreen.$el.classList.add('active');
			});
		}
	},
	methods: {
		close() {
			this.$refs.fullscreen.$el.classList.remove('active');
			setTimeout(() => {
				this.$emit('update:show', false);
			}, 300);
		},
	},
	components: { Modal },
};
</script>

<style lang="scss" scoped>
.c-fullscreen-modal {
	@include transition(0.3s ease-in);
	position: fixed;
	overflow: hidden;
	z-index: 9998;
	&.top {
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 0;
		&.active {
			height: 100%;
		}
	}
	&.bottom {
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 0;
		&.active {
			height: 100%;
		}
	}
	&.left {
		left: 0;
		top: 0;
		bottom: 0;
		width: 0;
		height: 100%;
		&.active {
			width: 100%;
		}
	}
	&.right {
		right: 0;
		top: 0;
		bottom: 0;
		width: 0;
		height: 100%;
		&.active {
			width: 100%;
		}
	}
	&--header {
		position: fixed;
		top: 0;
		z-index: 1;
		width: 100%;
		&-container {
			@include flexbox();
			@include flex-direction(row);
			@include align-items(center);
			@include justify-content(space-between);
			padding: 10px 16px;
		}
		+ .c-fullscreen-modal--content {
			margin-top: 49px;
		}
	}

	::v-deep .c-overlay {
		position: relative;
		.c-modal {
			max-width: 100%;
			width: 100%;
			height: 100%;
			border-radius: 0;
			@include pc {
				&--close-button {
					top: 12px;
					right: 12px;
				}
			}
		}
	}
}
</style>
