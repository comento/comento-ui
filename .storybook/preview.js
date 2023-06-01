import '@/plugins/v-tooltip'
import '@/assets/style/base/global.scss';
import { addParameters } from '@storybook/vue';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({ docs: { page: null } });

const customViewports = {
    'iphone X': {
        name: 'iphone X',
        styles: {
            width: '375px',
            height: '812px',
        },
        type: 'mobile'
    },
};

export const parameters = {
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            ...customViewports
        }
    },
};
