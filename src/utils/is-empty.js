export default function isEmpty(value) {
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
}
