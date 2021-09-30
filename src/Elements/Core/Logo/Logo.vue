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
import { colors } from '@/src/Elements/Core/Colors';

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
