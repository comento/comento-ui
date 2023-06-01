import { colors } from '@/utils/constants/color';

export function checkIsValidColor(color) {
	if (Object.keys(colors).indexOf(color) !== -1) return true;
	console.error('color does not belong to design system color list');
}
export function setTextColor(color) {
	if (checkIsValidColor(color)) {
		return { color: checkIsValidColor(color) ? colors[color] : 'inherit' };
	}
	console.error('Text Color is not valid');
}

export function setBackgroundColor(color) {
	return checkIsValidColor(color) ? { backgroundColor: colors[color] } : { backgroundColor: color };
}

export function setBorderColor(color) {
	if (checkIsValidColor(color)) return { borderColor: colors[color] };
	console.error('Border Color is not valid');
}
