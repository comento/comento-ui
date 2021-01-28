<template>
	<Modal
		:show="show"
		:show-close-button="false"
		max-width="343px"
		width="100%"
		:persistent="persistent"
		@close="close"
	>
		<!-- content 영역 -->
		<Typography type="body2" align="center" color="gray800">
			<div class="c-modal--content-wrapper">
				<slot name="content" />
			</div>
		</Typography>
		<!-- 확인 버튼 -->
		<div class="c-modal--confirm-button" @click="close">
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
::v-deep .c-overlay {
	z-index: 9999 !important;
}

.c-modal {
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
		cursor: pointer;
	}
}
</style>
