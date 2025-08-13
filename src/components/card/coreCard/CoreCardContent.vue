<template>
	<Typography
		v-linkify:options="{ className: 'linkified' }"
		:type="contentItems[type].type"
		:element="contentItems[type].element"
		:color="computedColor"
		:class="`core-card-content--${type}`"
	>
		<slot />
	</Typography>
</template>

<script>
import linkify from 'vue-linkify';
import Typography from '@/components/typography/Typography.vue';
import customValidator from '@/utils/custom-validator.js';
import { colorKeys } from '@/utils/constants/color.js';

export const contentTypes = ['overline', 'title', 'body', 'caption'];

export default {
	name: 'CoreCardContent',
	props: {
		/**
		 * overline, title, body, caption
		 */
		type: {
			type: String,
			default: 'body',
			validator(value) {
				const isValid = contentTypes.indexOf(value) !== -1;
				return customValidator(value, isValid, 'CoreCardContent', 'type');
			},
		},
		color: {
			type: String,
			default: null,
			validator(value) {
				const isValid = colorKeys.indexOf(value) !== -1;
				return customValidator(value, isValid, 'CoreCardContent', 'color');
			},
		},
	},
	data() {
		return {
			contentItems: {
				overline: { type: 'caption1', element: 'p', color: 'gray400' },
				title: { type: 'headline7', element: 'h2', color: 'gray900' },
				body: { type: 'body1', element: 'p', color: 'gray850' },
				caption: { type: 'body2', element: 'p', color: 'gray300' },
			},
		};
	},
	computed: {
		computedColor() {
			return this.color || this.contentItems[this.type].color;
		},
	},
	components: { Typography },
	directives: {
		linkify,
	},
};
</script>

<style lang="scss" scoped>
.core-card-content {
	position: relative;
	&--overline {
		margin-bottom: 6px;
	}
	&--title {
		margin-bottom: 8px;
	}
	&--body {
		min-height: 72px;
		margin-bottom: 16px;
	}
	&--caption {
		margin-bottom: 8px;
	}
}
</style>
