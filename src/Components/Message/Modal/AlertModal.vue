<template>
	<Modal
		:show="show"
		:show-close-button="false"
		:max-width="computedMaxWidth"
		:persistent="persistent"
		@close="close"
	>
		<!-- content 영역 -->
		<Typography type="body2" :align="align" color="gray800">
			<div class="c-modal--content-wrapper">
				<slot name="content" />
			</div>
		</Typography>
		<!-- 확인 버튼 -->
		<div class="c-modal--confirm-button c-pointer" @click="close">
			<Typography type="body1" :color="buttonColor" align="center">
				{{ successMessage }}
			</Typography>
		</div>
	</Modal>
</template>

<script>
import Modal from '@/src/Components/Message/Modal/Modal';
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'AlertModal',
	props: {
		show: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		align: {
			type: String,
			default: 'center',
		},
		buttonColor: {
			type: String,
			default: 'gray500',
		},
		successMessage: {
			type: String,
			default: '확인',
		},
		persistent: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		maxWidth: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
	},
	computed: {
		computedMaxWidth() {
			if (this.maxWidth) {
				return '420px';
			} else {
				return '343px';
			}
		},
	},
	methods: {
		close() {
			this.$emit('update:show', false);
		},
	},
	components: {
		Modal,
		Typography,
	},
};
</script>

<style lang="scss" scoped>
.c-modal {
	&--mask::v-deep {
		z-index: 9999;
	}
	&--content-wrapper {
		padding: 24px 32px;
	}

	&--confirm-button {
		width: 100%;
		height: 46px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top: 1px solid $gray200;
	}
	&--cancel-button {
		border-right: 1px solid $gray200;
	}
}
</style>
