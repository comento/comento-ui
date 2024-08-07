import * as bodyScrollLock from 'body-scroll-lock';

const scrollMixin = {
	data: () => ({
		notScrollClassName: 'not-scroll',
	}),
	methods: {
		$_addNotScroll() {
			bodyScrollLock.disableBodyScroll(document.body, {
				reserveScrollBarGap: true,
			});
		},
		$_removeNotScroll() {
			bodyScrollLock.enableBodyScroll(document.body);
		},
		$_handleNotScroll(value) {
			value ? this.$_addNotScroll() : this.$_removeNotScroll();
		},
	},
};
export default scrollMixin;
