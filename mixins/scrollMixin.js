const scrollMixin = {
	data: () => ({
		notScrollClassName: 'not-scroll',
	}),
	methods: {
		$_addNotScroll() {
			document.querySelector('html').classList.add(this.notScrollClassName);
			document.querySelector('body').classList.add(this.notScrollClassName);
		},
		$_removeNotScroll() {
			document.querySelector('html').classList.remove(this.notScrollClassName);
			document.querySelector('body').classList.remove(this.notScrollClassName);
		},
		$_handleNotScroll(value) {
			console.log(value);
			value ? this.$_addNotScroll() : this.$_removeNotScroll();
		},
	},
};
export default scrollMixin;
