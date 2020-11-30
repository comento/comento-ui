import * as components from './Components';
import * as elements from './Elements';
import '@/plugins';
import '@/mixins';
import '../assets/style/base/global.scss';

const ComponentLibrary = {
	// eslint-disable-next-line no-unused-vars
	install(Vue, options = {}) {
		// components
		for (const componentName in components) {
			const component = components[componentName];

			Vue.component(`C${component.name}`, component);
		}

		// elements
		for (const componentName in elements) {
			const component = elements[componentName];

			Vue.component(`C${component.name}`, component);
		}
	},
};

export default ComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(ComponentLibrary);
}
