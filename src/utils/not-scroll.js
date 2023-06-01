const NOT_SCROLL_CLASS_NAME = 'not-scroll';

export function addNotScroll() {
	document.querySelector('html').classList.add(NOT_SCROLL_CLASS_NAME);
	document.querySelector('body').classList.add(NOT_SCROLL_CLASS_NAME);
}

export function removeNotScroll() {
	document.querySelector('html').classList.remove(NOT_SCROLL_CLASS_NAME);
	document.querySelector('body').classList.remove(NOT_SCROLL_CLASS_NAME);
}

export function toggleNotScroll(value) {
	value ? addNotScroll() : removeNotScroll();
}
