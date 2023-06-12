<template>
	<div class="c-application c-link-button" :class="buttonColor">
		<!-- external link -->
		<a v-if="external" v-bind="$attrs" :href="to" :target="target">
			<CTypography :type="type" :color="buttonColor">
				<slot />
			</CTypography>
		</a>
		<!-- internal link -->
		<template v-else>
			<nuxt-link v-if="nuxt" :to="to" v-bind="$attrs">
				<CTypography :type="type" :color="buttonColor">
					<slot />
				</CTypography>
			</nuxt-link>
			<router-link v-else :to="to" tag="a" v-bind="$attrs">
				<CTypography :type="type" :color="buttonColor">
					<slot />
				</CTypography>
			</router-link>
		</template>
	</div>
</template>

<script>
import CTypography, { TypographyTypes } from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent, computed } from 'vue';

export const linkButtonTargets = ['_blank', '_self', '_parent', '_top'];

export default defineComponent({
	name: 'CLinkButton',
	inheritAttrs: false,
	props: {
		/**
		 * 타입(display1, headline1~6, body1~2, caption1~2)
		 */
		type: {
			type: String,
			default: 'body1',
			validator(value) {
				return TypographyTypes.indexOf(value) !== -1;
			},
		},
		to: {
			type: [String, Object],
			default: 'javascript:void(0);',
			validator(value) {
				const isString = typeof value === 'string';
				const isObject = typeof value === 'object' && value.constructor === Object;

				return isString || isObject;
			},
		},
		external: {
			type: Boolean,
			default: true,
		},
		nuxt: {
			type: Boolean,
			default: false,
		},
		/**
		 * 열리는 위치(_blank, _self, _parent, _top)
		 * external일 때만 적용됨
		 */
		target: {
			type: String,
			default: '_self',
			validator(value) {
				return linkButtonTargets.indexOf(value) !== -1;
			},
		},
	},
	setup() {
		const buttonColor = computed(() => 'link');

		return {
			buttonColor,
		};
	},
	components: { CTypography },
});
</script>

<style lang="scss" scoped>
$button-color: $link;
.c-link-button {
	a {
		text-decoration: none;
		cursor: pointer;
		@include state-style {
			text-decoration: underline;
		}
	}
}
</style>
