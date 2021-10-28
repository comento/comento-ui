import Vue from 'vue';
import VTooltip from 'src/plugins/v-tooltip';

const options = {
	popover: {
		defaultTrigger: 'hover',
	},
};

Vue.use(VTooltip, options);
