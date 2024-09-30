import * as bodyScrollLock from 'body-scroll-lock';

const scrollMixin = {
	methods: {
		$_addNotScroll() {
			bodyScrollLock.disableBodyScroll(document.body, {
				reserveScrollBarGap: true,
				// iOS에서 이슈가 있어서 사용
				// https://github.com/willmcpo/body-scroll-lock#allowtouchmove
				// el이 텍스트 노드나 주석 노드 등 일 경우에 dataset 속성이 없을 수 있음
				allowTouchMove: el => {
					while (el && el !== document.body) {
						if (el instanceof HTMLElement && el.dataset && el.dataset.bodyScrollLockIgnore === 'true') {
							return true;
						}
						// parentElement를 사용해 항상 텍스트 노드나 주석 노드 등을 건너뜀
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
