<template>
	<Modal :show.sync="show" :show-close-button="showCloseButton">
		<slot />
	</Modal>
</template>

<script>
import Modal from '@/src/Components/Message/Modal/Modal';

export default {
	name: 'FullscreenModal',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		showCloseButton: {
			type: Boolean,
			default: false,
		},
	},
	components: { Modal },
};
</script>

<style lang="scss" scoped>
.c-modal {
	// parent style
	&_mask {
		&::v-deep .c-modal_container {
			max-width: 100%;
			width: 100%;
			height: 100%;
			border-radius: 0;
			padding: 0;
		}
	}
}
</style>
