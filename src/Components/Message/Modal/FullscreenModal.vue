<template>
	<Modal ref="fullscreen" class="c-modal-fullscreen" :show="show" :show-close-button="showCloseButton" @close="close">
		<slot />
	</Modal>
</template>

<script>
import Modal from '@/src/Components/Message/Modal/Modal';

export default {
	name: 'FullscreenModal',
	props: {
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
	updated() {
		if (this.show) {
			setTimeout(() => {
				this.$nextTick(() => {
					console.log(this.$refs.fullscreen);
					this.$refs.fullscreen.$el.style.height = '100%';
				});
			}, 300);
		}
	},
	methods: {
		close() {
			this.$nextTick(() => {
				this.$refs.fullscreen.$el.style.height = '0';
				setTimeout(() => {
					this.$emit('update:show', false);
				}, 300);
			});
		},
	},
	components: { Modal },
};
</script>

<style lang="scss" scoped>
.c-modal-fullscreen {
	@include transition(0.3s ease-in);
	top: 0;
	position: fixed;
	left: 0;
	right: 0;
	width: 100%;
	height: 0;
	overflow: hidden;
	z-index: 9998;
	&.active {
		height: 100%;
		@include transition(0.3s ease-out);
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
