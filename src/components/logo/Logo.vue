<template>
	<keep-alive>
		<div class="c-application c-logo">
			<a :href="url">
				<component :is="name" :width="width" :height="height" :style="computedColor" />
			</a>
		</div>
	</keep-alive>
</template>

<script>
import LogoComentoTypoType from '@/assets/images/logo/logo-comento-typo-type.svg?inline';
import { colors } from '@/utils/constants/color.js';

/**
 * @displayName c-logo
 */

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
