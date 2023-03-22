import Vue from 'vue';

const windowMixin = {
	data: () => ({
		isMobile: false,
	}),
	methods: {
		$_windowMixin_handle_resize() {
			this.isMobile = window.innerWidth <= 768;
		},
	},
	mounted() {
		window.addEventListener('resize', this.$_windowMixin_handle_resize);
		this.$_windowMixin_handle_resize();
	},
	beforeDestroy() {
		if (typeof window === 'undefined') {
			return;
		}
		window.removeEventListener('resize', this.$_windowMixin_handle_resize);
	},
};
export default windowMixin;

if (!Vue.__window_mixin__) {
	Vue.__window_mixin__ = true;
	Vue.mixin(windowMixin);
}
