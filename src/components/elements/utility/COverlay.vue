<template>
	<aside
		v-if="show"
		class="c-application c-overlay"
		:class="[computedType]"
		:style="[computedZIndex]"
		@click="handleCloseModal"
	>
		<slot />
	</aside>
</template>

<script>
import scrollMixin from '@/mixins/scrollMixin';
export const OverlayTypes = ['dimmer'];

export default {
	name: 'COverlay',
	mixins: [scrollMixin],
	props: {
		show: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		/**
		 * 타입(dimmer)
		 */
		type: {
			type: String,
			default: 'dimmer',
			validator(value) {
				return OverlayTypes.indexOf(value) !== -1;
			},
		},
		zIndex: {
			type: Number,
			default: 9999,
			validator(value) {
				return typeof value === 'number';
			},
		},
		persistent: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
	},
	computed: {
		computedType() {
			return `c-overlay--type-${this.type}`;
		},
		computedZIndex() {
			return { zIndex: this.zIndex };
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
			const isEsc = e.keyCode === 27;
			if (this.show && isEsc) {
				this.handleCloseModal();
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
};
</script>

<style lang="scss" scoped>
.c-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	&--type-dimmer {
		background: rgba(0, 0, 0, 0.6);
	}
}
</style>
