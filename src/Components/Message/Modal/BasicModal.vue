<template>
	<Modal
		:show="show"
		:show-close-button="showCloseButton"
		:max-width="maxWidth"
		:persistent="persistent"
		:max-height="isMobile ? '' : '640px'"
		@close="close"
	>
		<!-- title 영역 -->
		<div class="c-modal--title-wrapper">
			<Typography type="headline5" :align="align">
				<slot name="title" />
			</Typography>
		</div>

		<!-- content 영역 -->
		<div class="c-modal--content-wrapper" :class="computedClass">
			<Typography type="body2" :align="align" color="gray700">
				<slot name="content" />
			</Typography>
		</div>

		<!-- button 영역 -->
		<div v-if="showActionButton" class="c-modal--action-button-wrapper">
			<Button size="large" :loading="loading" full @click="successCallback">
				{{ successMessage }}
			</Button>
		</div>
	</Modal>
</template>

<script>
import Modal from '@/src/Components/Message/Modal/Modal';
import Typography from '@/src/Elements/Core/Typography/Typography';
import Button from '@/src/Components/Button/Button';

export default {
	name: 'BasicModal',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		align: {
			type: String,
			default: 'center',
			validator(value) {
				return ['center', 'left', 'right'].indexOf(value) !== -1;
			},
		},
		// 버튼 로딩
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
		showCloseButton: {
			type: Boolean,
			default: true,
		},
		showActionButton: {
			type: Boolean,
			default: false,
		},
		persistent: {
			type: Boolean,
			default: false,
		},
		maxWidth: {
			type: String,
		},
		scroll: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		computedClass() {
			return [this.scroll && 'scroll', this.showActionButton && 'with-button'];
		},
	},
	methods: {
		close() {
			this.$emit('update:show', false);
		},
	},
	components: {
		Typography,
		Modal,
		Button,
	},
};
</script>

<style lang="scss" scoped>
.c-modal {
	&--title-wrapper {
		padding: 40px 32px 16px 32px;
	}

	&--content-wrapper {
		padding: 0 32px 40px 32px;

		&.with-button {
			padding-bottom: 0;
		}

		&::v-deep * + * {
			margin-top: 8px;
		}

		@include pc {
			max-height: calc(640px - 196px);
			overflow-y: auto;

			&.scroll {
				&:after {
					content: '';
					position: absolute;
					width: 100%;
					height: 30px;
					left: 0;
					/*bottom: 40px;*/
					bottom: 0;
					background: linear-gradient(
						180deg,
						rgba(255, 255, 255, 0) 0%,
						rgba(255, 255, 255, 0.7) 58.33%,
						rgba(255, 255, 255, 0.958333) 100%
					);
				}
				&.with-button {
					&:after {
						bottom: 107px;
					}
				}
			}
		}
	}
	&--action-button-wrapper {
		padding: 20px 32px 40px 32px;
	}
}
</style>
