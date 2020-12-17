export default function (value, assert, description) {
	const isValid = assert(value);
	if (!isValid) {
		console.error(`${value} is not a valid value of the ${description}`);
	}
	return isValid;
}
