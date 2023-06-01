<template>
	<Modal
		ref="fullscreenModal"
		class="c-fullscreen-modal"
		:show="showFullscreenModal"
		:show-close-button="false"
		:class="classes"
		width="100%"
		@close="close"
	>
		<div
			v-if="$slots['title'] || $slots['close'] || $slots['action']"
			ref="header"
			class="c-fullscreen-modal--header"
		>
			<div class="c-fullscreen-modal--header-container">
				<Icon name="IconCloseLargeLine" color="gray800" class="mr-4" @click="close()" />
				<Typography type="body1" :font-weight="500" align="center" class="c-fullscreen-modal--header-title">
					<slot name="title" />
				</Typography>
				<div class="c-fullscreen-modal--header-action">
					<slot name="action" />
				</div>
			</div>
			<Divider />
		</div>
		<div ref="content" class="c-fullscreen-modal--content">
			<slot name="content" />
		</div>
		<div v-if="showActionButton" ref="actionButton" class="c-fullscreen-modal--action-button">
			<Button
				size="xlarge"
				:disabled="disabled"
				:loading="loading"
				:color="buttonColor"
				full
				@click="successCallback"
			>
				{{ successMessage }}
			</Button>
		</div>
	</Modal>
</template>

<script>
import Modal from '@/components/components/message/modal/Modal';
import Icon from '@/components/elements/core/icon/Icon';
import Divider from '@/components/elements/utility/Divider';
import Typography from '@/components/elements/core/typography/Typography';
import Button, { buttonColors } from '@/components/components/general/button/Button';
import { defineComponent } from 'vue';

export const fullscreenDirection = ['left', 'right', 'top', 'bottom', 'none'];

/**
 * @displayName c-fullscreen-modal
 */
export default defineComponent({
	name: 'FullscreenModal',
	props: {
		/**
		 * 방향(left, right, top, bottom, none)
		 */
		direction: {
			type: String,
			default: 'left',
			validator(value) {
				return fullscreenDirection.indexOf(value) !== -1;
			},
		},
		show: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		showActionButton: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
		successCallback: {
			type: Function,
			default: () => {},
		},
		successMessage: {
			type: String,
			default: '확인',
		},
		buttonColor: {
			type: String,
			default: 'primary',
			validator(value) {
				return buttonColors.includes(value);
			},
		},
	},
	data() {
		return {
			scroll: false,
			showFullscreenModal: false,
		};
	},
	computed: {
		computedDirection() {
			return this.direction;
		},
		computedWithActionButton() {
			return { 'with-action-button': this.showActionButton };
		},
		computedScroll() {
			return { scroll: this.scroll };
		},
		classes() {
			return [this.computedDirection, this.computedWithActionButton, this.computedScroll];
		},
	},
	watch: {
		show(show) {
			if (show) {
				this.showFullscreenModal = true;
				this.setScroll();
				setTimeout(() => {
					this.$refs.fullscreenModal.$el.classList.add('active');
				});
			} else {
				this.close();
			}
		},
	},
	methods: {
		close() {
			this.$refs.fullscreenModal.$el.classList.remove('active');
			setTimeout(() => {
				this.showFullscreenModal = false;
				this.$emit('update:show', false);
				this.$emit('close');
			}, 300);
		},
		setScroll() {
			this.$nextTick(() => {
				if (this.$slots['content']) {
					const contentHeight = this.$refs.content.firstChild.clientHeight;
					const fullscreenModalHeight = this.$refs.fullscreenModal.$el.clientHeight;
					const headerHeight = this.$refs.header?.clientHeight;
					const actionButtonHeight = this.$refs.actionButton?.clientHeight;

					if (contentHeight > fullscreenModalHeight - (headerHeight + actionButtonHeight)) {
						this.scroll = true;
					}
				}
			});
		},
	},
	components: {
		Modal,
		Icon,
		Divider,
		Typography,
		Button,
	},
});
</script>

<style lang="scss" scoped>
$header-height: 49px;
$action-button-height: 104px;

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
			@include flexbox();
			@include flex-direction(row);
			@include align-items(center);
			@include justify-content(space-between);
			padding: 0 16px;
			position: relative;
			line-height: 48px;
			height: 48px;
		}

		&-title {
			position: absolute;
			left: 50%;
			@include transform(translateX(-50%));
		}

		&-action {
			z-index: 1;
		}
		+ .c-fullscreen-modal--content {
			margin-top: $header-height;
			overflow-y: auto;
			height: calc(100vh - #{$header-height});
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

	&--action-button {
		padding: 20px 16px 24px 16px;
	}

	&.scroll {
		.c-fullscreen-modal--content {
			overflow-y: scroll;
			padding-bottom: 4px;

			&:after {
				content: '';
				position: absolute;
				width: 100%;
				height: 30px;
				left: 0;
				bottom: calc(40px - 16px);
				background: linear-gradient(
					180deg,
					rgba(255, 255, 255, 0) 0%,
					rgba(255, 255, 255, 0.6) 40%,
					rgba(255, 255, 255, 1) 90%
				);
			}
		}
	}

	&.with-action-button {
		.c-fullscreen-modal--content {
			max-height: calc(100vh - (#{$header-height} + #{$action-button-height}));
			&:after {
				bottom: calc(#{$action-button-height} - 1px);
			}
		}
	}
}
</style>
