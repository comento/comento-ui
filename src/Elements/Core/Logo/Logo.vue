<template>
	<keep-alive>
		<h1 class="c-application c-logo">
			<a :href="url">
				<component :is="name" :width="width" :height="height" :style="computedColor" />
			</a>
		</h1>
	</keep-alive>
</template>

<script>
import LogoComentoHorizontal from '@/assets/images/logo/logo-comento-horizontal.svg?inline';
import { colors, colorKeys } from '@/src/Elements/Core/Colors';

export default {
	name: 'Logo',
	props: {
		name: {
			type: String,
			default: 'LogoComentoHorizontal',
		},
		url: {
			type: String,
			default: 'https://comento.kr',
		},
		width: {
			type: String,
			default: '140',
		},
		height: {
			type: String,
			default: '24',
		},
		color: {
			type: String,
			default: 'primary',
			validator(value) {
				const isValid = colorKeys.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the icon color`);
				}
				return isValid;
			},
		},
	},
	computed: {
		computedColor() {
			if (this.color) {
				return { fill: colors[this.color] };
			} else {
				return null;
			}
		},
	},
	components: {
		LogoComentoHorizontal,
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
