<template>
	<Modal :show="show" :show-close-button="false" max-width="343px" :persistent="persistent" @close="close">
		<div class="c-modal--content-container">
			<!-- title 영역 -->
			<Typography class="mb-8" type="body1" align="center" color="gray900" fontWeight="bold">
				<slot name="title" />
			</Typography>

			<!-- content 영역 -->
			<Typography type="body2" align="center" color="gray800">
				<div class="c-modal--content-wrapper">
					<slot name="content" />
				</div>
			</Typography>
		</div>

		<!-- button 영역 -->
		<div class="c-modal--button-group">
			<!-- 취소 버튼 -->
			<div class="c-modal--cancel-button c-pointer" @click="close">
				<Typography type="body1" :color="cancelButtonColor" align="center">취소</Typography>
			</div>
			<!-- 확인 버튼 -->
			<div class="c-modal--confirm-button c-pointer" @click="successCallback">
				<Typography type="body1" :color="confirmButtonColor" align="center">
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
		cancelButtonColor: {
			type: String,
			default: 'gray500',
		},
		confirmButtonColor: {
			type: String,
			default: 'gray500',
		},
		successCallback: {
			type: Function,
			default: () => {},
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
	&--content-container {
		padding: 24px 32px;
	}

	&--button-group {
		display: flex;
		border-top: 1px solid $gray200;
		height: 46px;
	}

	&--cancel-button,
	&--confirm-button {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&--cancel-button {
		border-right: 1px solid $gray200;
	}
}
</style>
