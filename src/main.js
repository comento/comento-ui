import * as components from './components';
import './plugins';
import './directives';
import './assets/style/base/global.scss';
import './assets/style/quill/quill.scss';

const ComponentLibrary = {
	// eslint-disable-next-line no-unused-vars
	install(Vue, options = {}) {
		// components
		for (const componentName in components) {
			const component = components[componentName];

			Vue.component(component.name, component);
		}
	},
};

export default ComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(ComponentLibrary);
}
