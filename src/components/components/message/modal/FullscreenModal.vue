<template>
	<Modal
		ref="fullscreen"
		class="c-fullscreen-modal"
		:show="show"
		:show-close-button="false"
		:class="[computedAlign]"
		width="100%"
		@close="close"
	>
		<div v-if="$slots['title'] || $slots['close'] || $slots['action']" class="c-fullscreen-modal--header">
			<div class="c-fullscreen-modal--header-container">
				<div v-if="closeType !== 'none'" class="c-fullscreen-modal--header-close" @click="close()">
					<Icon
						v-if="closeType === 'icon'"
						name="IconCloseLargeLine"
						:rotate="-90"
						color="gray800"
						class="c-pointer"
					/>
					<NarrowButton v-else size="medium">
						<slot name="close" />
					</NarrowButton>
				</div>
				<div class="c-fullscreen-modal--header-title">
					<slot name="title" />
				</div>
				<div class="c-fullscreen-modal--header-action">
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
import Modal from '@/components/components/message/modal/Modal';
import NarrowButton from '@/components/components/general/button/NarrowButton';
import Icon from '@/components/elements/core/icon/Icon';
import Divider from '@/components/elements/utility/Divider';

export const fullScreenAlign = ['left', 'right', 'top', 'bottom', 'none'];
export const fullScreenCloseType = ['icon', 'button', 'none'];

/**
 * @displayName c-fullscreen-modal
 */
export default {
	name: 'FullscreenModal',
	props: {
		/**
		 * 정렬(left, right, top, bottom, none)
		 */
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
		/**
		 *  닫기버튼영역 타입(icon, button, none)
		 */
		closeType: {
			type: String,
			default: 'icon',
			validator(value) {
				return fullScreenCloseType.indexOf(value) !== -1;
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
				this.$emit('close');
			}, 300);
		},
	},
	components: { Modal, Icon, Divider, NarrowButton },
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
	&.none {
		@include transition(none);
	}
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
			&::v-deep .c-icon {
				position: absolute;
				top: 0;
				bottom: 0;
				margin: auto;
			}
			&::v-deep .c-narrow-button {
				display: inline-block;
				vertical-align: baseline;
			}
		}
		&-title {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			text-align: center;
			z-index: 0;
		}
		&-action {
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
