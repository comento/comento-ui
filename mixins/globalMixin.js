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
	},
};

export default globalMixin;

if (!Vue.__global_mixin__) {
	Vue.__global_mixin__ = true;
	Vue.mixin(globalMixin);
}
