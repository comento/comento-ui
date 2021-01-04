import Vue from 'vue';

const globalMixin = {
	methods: {
		$_hasOwnProperty(object, propertyName) {
			return !!(
				object &&
				(typeof object == 'object' || typeof object == 'function') &&
				Object.prototype.hasOwnProperty.call(object, propertyName)
			);
		},
		$_isEmpty(value) {
			return (
				value === null ||
				typeof value === 'undefined' ||
				(typeof value === 'string' && value === '') ||
				(Array.isArray(value) && value.length < 1) ||
				(typeof value === 'object' &&
					value.constructor.name === 'Object' &&
					Object.keys(value).length < 1 &&
					Object.getOwnPropertyNames(value) < 1) ||
				(typeof value === 'object' && value.constructor.name === 'String' && Object.keys(value).length < 1)
			);
		},
	},
};

export default globalMixin;

if (!Vue.__global_mixin__) {
	Vue.__global_mixin__ = true;
	Vue.mixin(globalMixin);
}
