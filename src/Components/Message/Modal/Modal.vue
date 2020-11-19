<template>
	<div v-if="show" class="c-application c-modal--mask" @click="handleCloseModal">
		<div class="c-modal--container" :style="[computedStyle]" @click.stop>
			<div v-if="showCloseButton" class="c-modal--close-button" @click="close">
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
			default: true,
		},
		maxWidth: {
			type: String,
		},
		persistent: {
			type: Boolean,
			default: false,
		},
		maxHeight: {
			type: String,
		},
	},
	computed: {
		computedStyle() {
			return {
				'max-width': !this.isMobile && this.maxWidth,
				'max-height': this.maxHeight,
			};
		},
	},
	mounted() {
		document.addEventListener('keydown', e => this.handleCloseKeycode(e));
	},
	beforeDestroy() {
		document.removeEventListener('keydown', e => this.handleCloseKeycode(e));
	},
	methods: {
		handleCloseKeycode(e) {
			if (this.show && e.keyCode === 27) {
				this.close();
			}
		},
		handleCloseModal() {
			if (!this.persistent) {
				this.close();
			}
		},
		close() {
			this.$emit('close');
		},
	},
	components: { Icon },
};
</script>

<style lang="scss" scoped>
.c-modal {
	&--mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		transition: opacity 0.3s ease;
	}
	&--container {
		max-width: 90%;
		width: 100%;
		margin: 0 auto;
		padding: 40px 32px;
		background-color: $white;
		border-radius: 4px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-sizing: border-box;

		@include pc {
			max-width: 420px;
		}
	}
	&--close-button {
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
