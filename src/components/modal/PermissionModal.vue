<template>
	<Modal
		:show="show"
		:show-close-button="false"
		max-width="343px"
		width="100%"
		:persistent="persistent"
		@close="close"
	>
		<div class="c-modal--content-container">
			<!-- title 영역 -->
			<Typography type="body1" align="center" color="gray900" font-weight="semi-bold">
				<slot name="title" />
			</Typography>

			<!-- content 영역 -->
			<Typography v-if="$slots['content']" type="body2" align="center" color="gray800" class="mt-8">
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
import Modal from '@/components/modal/Modal.vue';
import Typography from '@/components/typography/Typography.vue';

/**
 * @displayName c-permission-modal
 */
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
			this.$emit('close');
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
		@include flexbox();
		@include flex-direction(column);
		@include justify-content(center);
		@include align-items(center);
		padding: 24px 32px;
		min-height: 101px;
		max-height: 150px;
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
