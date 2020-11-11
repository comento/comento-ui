<template>
	<Modal :show.sync="show" :show-close-button="false" :max-width="maxWidth" :persistent="persistent" @close="close">
		<!-- title 영역 -->
		<Typography class="mb-8" type="body1" :align="align">
			<slot name="title" />
		</Typography>

		<!-- contents 영역 -->
		<Typography class="mb-8" type="body2" :align="align" color="gray700">
			<div class="c-modal_contents_wrapper">
				<slot name="contents" />
			</div>
		</Typography>

		<!-- button 영역 -->
		<div class="c-modal_button_group">
			<!-- 취소 버튼 -->
			<div class="c-modal_cancel_button c-pointer" @click="close">
				<Typography type="body1" :color="leftButtonColor" align="center">취소</Typography>
			</div>
			<!-- 확인 버튼 -->
			<div class="c-modal_confirm_button c-pointer" @click="successCallback">
				<Typography type="body1" :color="rightButtonColor" align="center">
					{{ successMessage }}
				</Typography>
			</div>
		</div>
	</Modal>
</template>

<script>
import Modal from '@/src/Components/Message/Modal/Modal';
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'PermissionModal',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		align: {
			type: String,
			default: 'center',
		},
		leftButtonColor: {
			type: String,
			default: 'gray600',
		},
		rightButtonColor: {
			type: String,
			default: 'gray600',
		},
		successCallback: {
			type: Function,
			default() {
				return () => console.log('success');
			},
		},
		successMessage: {
			type: String,
			default: '확인',
		},
		persistent: {
			type: Boolean,
			default: false,
		},
		maxWidth: {
			type: String,
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
	// parent style
	&_mask {
		&::v-deep .c-modal_container {
			padding: 32px 32px 0 32px;
			width: 343px;
		}
	}

	&_button_group {
		display: flex;
		border-top: 1px solid $gray200;
		margin: 32px -32px 0 -32px;
		height: 46px;
	}

	&_cancel_button,
	&_confirm_button {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&_cancel_button {
		border-right: 1px solid $gray200;
	}
}
</style>
