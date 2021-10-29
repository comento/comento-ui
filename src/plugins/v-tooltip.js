import Vue from 'vue';
import VTooltip from 'v-tooltip';

const options = {
	popover: {
		defaultTrigger: 'hover',
	},
};

Vue.use(VTooltip, options);
