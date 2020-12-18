export default function (value, isValid, componentName, propsName) {
	if (!isValid) {
		console.error(`${value} is not a valid value of the ${componentName} ${propsName}`);
	}
	return isValid;
}
