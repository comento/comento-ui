export default function (text) {
	let textarea = document.createElement('textarea');
	textarea.value = text;
	document.body.appendChild(textarea);
	textarea.select();
	textarea.setSelectionRange(0, 9999);
	document.execCommand('copy');
	document.body.removeChild(textarea);
}
