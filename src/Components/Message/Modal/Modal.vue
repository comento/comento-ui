<template>
	<div v-show="sync_showModal" class="c-application c-modal_mask" @click="handleCloseModal">
		<div class="c-modal_container" @click.stop>
			<div v-if="showCloseButton" class="c-modal_close_button" @click="closeModal">
				<Icon name="IconCloseXLargeLine" color="gray400" />
			</div>
			<slot />
		</div>
	</div>
</template>

<script>
import Icon from '@/src/Elements/Core/Icon/Icon';

export default {
	name: 'Modal',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		showCloseButton: {
			type: Boolean,
			default: false,
		},
		maxWidth: {
			type: String,
		},
		persistent: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		sync_showModal: {
			get() {
				return this.show;
			},
		},
	},
	mounted() {
		document.addEventListener('keydown', e => {
			if (this.show && e.keyCode === 27) {
				this.closeModal();
			}
		});
	},
	methods: {
		handleCloseModal() {
			if (!this.persistent) {
				this.closeModal();
			}
		},
		closeModal() {
			this.$emit('update:show', false);
		},
	},
	components: { Icon },
};
</script>

<style scoped lang="scss">
.c-modal {
	&_mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		transition: opacity 0.3s ease;
	}
	&_container {
		max-width: 90%;
		width: 100%;
		margin: 0 auto;
		padding: 40px 32px;
		background-color: $white;
		border-radius: 4px;
		/*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);*/
		/*transition: all 0.3s ease;*/
		/*font-family: Helvetica, Arial, sans-serif;*/
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-sizing: border-box;

		@include pc {
			max-width: 420px;
		}
	}
	&_close_button {
		position: absolute;
		top: 12px;
		right: 12px;

		@include pc {
			position: fixed;
			top: 0;
			right: -38px;
		}
	}
}
</style>
