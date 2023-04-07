<template>
	<keep-alive>
		<component :is="element" class="c-application c-logo">
			<a :href="url">
				<component :is="name" :width="width" :height="height" :style="computedColor" />
			</a>
		</component>
	</keep-alive>
</template>

<script>
import LogoComentoTypoType from '@/assets/images/logo/logo-comento-typo-type.svg?inline';
import { colors } from '@/utils/constants/color';

/**
 * @displayName c-logo
 */

export const LogoElements = ['h1', 'h2', 'div', 'span'];

export default {
	name: 'Logo',
	props: {
		name: {
			type: String,
			default: 'LogoComentoTypoType',
		},
		url: {
			type: String,
			default: 'https://comento.kr',
		},
		width: {
			type: String,
			default: '105',
		},
		height: {
			type: String,
			default: '18',
		},
		color: {
			type: String,
			default: 'primary',
		},
		/**
		 * 사용 가능 태그 : h1, h2, div, span
		 */
		element: {
			type: String,
			default: 'div',
			validator(value) {
				const isValid = LogoElements.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the typography element type`);
				}
				return isValid;
			},
		},
	},
	computed: {
		computedColor() {
			if (!this.color) {
				return null;
			}
			return { fill: colors[this.color] ?? this.color };
		},
	},
	components: {
		LogoComentoTypoType,
	},
};
</script>

<style lang="scss" scoped>
.c-logo {
	> a {
		display: flex;
	}
}
</style>
