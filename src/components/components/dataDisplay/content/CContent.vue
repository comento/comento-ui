<template>
	<CTypography
		v-linkify:options="{ className: 'linkified' }"
		:type="contentItems[type].type"
		:element="contentItems[type].element"
		:color="computedColor"
		class="c-application c-content"
		:class="`c-content--${type}`"
	>
		<slot />
	</CTypography>
</template>

<script>
import linkify from 'vue-linkify';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import customValidator from '@/utils/custom-validator';
import { colorKeys } from '@/utils/constants/color';
import { defineComponent, computed, toRefs } from 'vue';

export const contentTypes = ['overline', 'title', 'body', 'caption'];

const CONTENT_ITEMS = {
	overline: { type: 'caption1', element: 'p', color: 'gray400' },
	title: { type: 'headline7', element: 'h2', color: 'gray900' },
	body: { type: 'body1', element: 'p', color: 'gray850' },
	caption: { type: 'body2', element: 'p', color: 'gray300' },
};

/**
 * 주로 게시글의 본문에 사용
 */
export default defineComponent({
	name: 'CContent',
	props: {
		/**
		 * overline, title, body, caption
		 */
		type: {
			type: String,
			default: 'body',
			validator(value) {
				const isValid = contentTypes.indexOf(value) !== -1;
				return customValidator(value, isValid, 'Content', 'type');
			},
		},
		color: {
			type: String,
			default: null,
			validator(value) {
				const isValid = colorKeys.indexOf(value) !== -1;
				return customValidator(value, isValid, 'Content', 'color');
			},
		},
	},
	setup(props) {
		const { color, type } = toRefs(props);
		const contentItems = CONTENT_ITEMS;
		const computedColor = computed(() => String(color.value || contentItems[type].color));
		return { contentItems, computedColor };
	},
	components: { CTypography },
	directives: {
		linkify,
	},
});
</script>

<style lang="scss" scoped>
.c-content {
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
