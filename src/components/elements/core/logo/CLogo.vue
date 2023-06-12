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
import { colors } from '@/utils/constants/color';
import { defineComponent, toRefs, computed } from 'vue';

export default defineComponent({
	name: 'CLogo',
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
	setup(props) {
		const { color } = toRefs(props);

		const computedColor = computed(() => {
			if (!color.value) {
				return null;
			}
			return { fill: colors[color.value] ?? color.value };
		});

		return {
			computedColor,
		};
	},
	components: {
		LogoComentoTypoType,
	},
});
</script>

<style lang="scss" scoped>
.c-logo {
	> a {
		display: flex;
	}
}
</style>
