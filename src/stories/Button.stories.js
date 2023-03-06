import Icon from '@/components/elements/core/icon/Icon.vue';
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
	title: 'Example/Icon',
	component: Icon,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
	},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Icon },
	template: '<Icon name="IconWriting2XLargeLine" v-bind="$props">Icon</Icon>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
	primary: true,
	label: 'Icon',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Icon',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Icon',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Icon',
};
