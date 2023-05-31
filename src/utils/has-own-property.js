export default function hasOwnProperty(object, propertyName) {
	return !!(
		object &&
		(typeof object == 'object' || typeof object == 'function') &&
		Object.prototype.hasOwnProperty.call(object, propertyName)
	);
}
