<template>
	<Modal :show="show" :show-close-button="showCloseButton" @close="close">
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
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		showCloseButton: {
			type: Boolean,
			default: true,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
	},
	methods: {
		close() {
			this.$emit('update:show', false);
		},
	},
	components: { Modal },
};
</script>

<style lang="scss" scoped>
::v-deep .c-overlay {
	.c-modal {
		max-width: 100%;
		width: 100%;
		height: 100%;
		border-radius: 0;
	}
}
</style>
