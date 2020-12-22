<template>
	<aside
		v-if="show"
		class="c-application c-overlay"
		:class="[computedType]"
		:style="[computedZindex]"
		@click="handleCloseModal"
	>
		<slot />
	</aside>
</template>

<script>
import scrollMixin from '@/mixins/scrollMixin';
export const OverlayTypes = ['dimmer'];

export default {
	name: 'Overlay',
	mixins: [scrollMixin],
	props: {
		show: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
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
		computedZindex() {
			return { zIndex: this.zIndex };
		},
	},
	watch: {
		show() {
			this.$_handleNotScroll(this.show);
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
