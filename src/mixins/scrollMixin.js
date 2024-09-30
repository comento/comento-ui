import * as bodyScrollLock from 'body-scroll-lock';

const scrollMixin = {
	methods: {
		$_addNotScroll() {
			bodyScrollLock.disableBodyScroll(document.body, {
				reserveScrollBarGap: true,
				// iOS에서 이슈가 있어서 사용
				// https://github.com/willmcpo/body-scroll-lock#allowtouchmove
				allowTouchMove: el => {
					while (el && el !== document.body) {
						if (el instanceof HTMLElement && el.dataset && el.dataset.bodyScrollLockIgnore === 'true') {
							return true;
						}

						el = el.parentElement;
					}
					return false;
				},
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
