const paddingMixin = {
	methods: {
		$_setPadding(paddings) {
			if (Array.isArray(paddings) && paddings.length === 4) {
				return {
					padding: `${paddings[0]}px ${paddings[1]}px ${paddings[2]}px ${paddings[3]}px`,
				};
			} else {
				console.error('paddings must be Array and has length 4');
			}
		},
	},
};
export default paddingMixin;
