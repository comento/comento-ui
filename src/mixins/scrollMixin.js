import * as bodyScrollLock from 'body-scroll-lock';

const scrollMixin = {
	methods: {
		$_addNotScroll() {
			bodyScrollLock.disableBodyScroll(document.body, {
				reserveScrollBarGap: true,
				allowTouchMove: el => {
					// iOS에서 이슈가 있어서 사용
					// https://github.com/willmcpo/body-scroll-lock#allowtouchmove
					while (el && el !== document.body) {
						if (el.dataset.bodyScrollLockIgnore === 'true') {
							return true;
						}
						el = el.parentNode;
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
