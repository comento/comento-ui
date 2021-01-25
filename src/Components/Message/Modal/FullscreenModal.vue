<template>
	<Modal
		ref="fullscreen"
		class="c-fullscreen-modal"
		:show="show"
		:show-close-button="showCloseButton"
		:class="[computedAlign]"
		@close="close"
	>
		<div v-if="$slots['title']" class="c-fullscreen-modal--header">
			<div class="c-fullscreen-modal--header-container">
				<Icon
					name="IconCloseLargeLine"
					:rotate="-90"
					color="gray800"
					class="c-fullscreen-modal--header-close"
					@click="close()"
				/>
				<div class="c-fullscreen-modal--header-title">
					<slot name="title" />
				</div>
				<div class="c-fullscreen-modal--header-right">
					<slot name="action" />
				</div>
			</div>
			<Divider />
		</div>
		<div class="c-fullscreen-modal--content">
			<slot name="content" />
		</div>
	</Modal>
</template>

<script>
import Modal from '@/src/Components/Message/Modal/Modal';
import Icon from '@/src/Elements/Core/Icon/Icon';
import Divider from '@/src/Elements/Utility/Divider';

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
	components: { Modal, Icon, Divider },
};
</script>

<style lang="scss" scoped>
.c-fullscreen-modal {
	@include transition(0.3s ease-in);
	position: fixed;
	overflow: hidden;
	z-index: 9998;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	&.top {
		@include transform(translateY(-100%));
		&.active {
			@include transform(translateY(0));
		}
	}
	&.bottom {
		@include transform(translateY(100%));
		&.active {
			@include transform(translateY(0));
		}
	}
	&.left {
		@include transform(translateX(100%));
		&.active {
			@include transform(translateX(0));
		}
	}
	&.right {
		@include transform(translateX(-100%));
		&.active {
			@include transform(translateX(0));
		}
	}
	&--header {
		position: fixed;
		top: 0;
		z-index: 1;
		width: 100%;

		&-container {
			padding: 0 16px;
			position: relative;
			line-height: 48px;
			height: 48px;
		}
		&-close {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 16px;
			margin: auto;
			z-index: 1;
		}
		&-title {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			text-align: center;
			z-index: 0;
		}
		&-right {
			position: absolute;
			top: 50%;
			right: 16px;
			@include transform(translateY(-50%));
			z-index: 1;
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
