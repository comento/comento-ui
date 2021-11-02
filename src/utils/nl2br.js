function nl2br(value) {
	if (!value) return '';

	value = value.toString();
	value = value.replace(/\n/g, '<br>');
	value = value.replace(/\\/gi, '');
	return value;
}

export default nl2br;
