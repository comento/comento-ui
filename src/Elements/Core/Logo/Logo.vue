<template>
	<h1 class="c-application c-logo">
		<a :href="url">
			<component :is="name" :width="width" :height="height" />
		</a>
	</h1>
</template>

<script>
import LogoComentoHorizontal from '@/assets/images/logo/logo-comento-horizontal.svg?inline';

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
