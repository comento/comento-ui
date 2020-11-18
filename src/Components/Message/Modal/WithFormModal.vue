<template>
	<Modal
		:show="show"
		:show-close-button="showCloseButton"
		:max-width="maxWidth"
		:persistent="persistent"
		@close="close"
	>
		<!-- title 영역 -->
		<Typography class="mb-20" type="headline5" :align="align">
			<slot name="title" />
		</Typography>

		<!-- contents 영역 -->
		<Typography type="body2" :align="align" color="gray700">
			<div class="c-modal_contents_wrapper">
				<slot name="contents" />
			</div>
		</Typography>

		<!-- button 영역 -->
		<div v-if="showActionButton" class="mt-20">
			<Button size="large" :disabled="disabled" :loading="loading" full @click="successCallback">
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
	name: 'WithFormModal',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		align: {
			type: String,
			default: 'center',
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
		showCloseButton: {
			type: Boolean,
			default: true,
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
		Button,
	},
};
</script>

<style lang="scss" scoped>
.c-modal {
	&_contents_wrapper {
		&::v-deep .c-input--motion-box.outlined ~ button {
			height: 40px;
		}
	}
}
</style>
