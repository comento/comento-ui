<template>
	<!--컴포넌트 전환시 캐싱 가능 keep-alive-->
	<keep-alive>
		<component
			:is="name"
			ref="icon"
			class="c-application c-icon"
			:class="classes"
			:style="styles"
			v-bind="$attrs"
		/>
	</keep-alive>
</template>

<script>
import { colorKeys, colors } from '@/utils/constants/color';
import customValidator from '@/utils/custom-validator';
import { defineComponent, toRefs, computed } from 'vue';

export default defineComponent({
	name: 'BaseIcon',
	props: {
		name: {
			type: String,
			required: true,
		},
		rotate: {
			type: Number,
			default: 0,
			validator(value) {
				return typeof value === 'number';
			},
		},
		color: {
			type: String,
			default: null,
			validator(value) {
				const isValid = colorKeys.indexOf(value) !== -1;
				return customValidator(value, isValid, 'BaseIcon', 'color');
			},
		},
	},
	setup(props, { attrs }) {
		const { rotate, color } = toRefs(props);
		const computedRotate = computed(() =>
			rotate.value !== 0 ? { transform: `rotate(${rotate.value}deg)` } : null,
		);
		const computedFill = computed(() => {
			if (this.color) {
				return { fill: colors[color.value] };
			} else {
				return null;
			}
		});
		const hasEventListener = computed(() => Boolean(attrs && attrs.onClick));
		const classes = computed(() => [hasEventListener.value && 'c-icon--link']);

		return {
			computedRotate,
			computedFill,
			styles: { ...computedRotate, ...computedFill },
			hasEventListener,
			classes,
		};
	},
});
</script>

<style lang="scss" scoped>
.c-icon {
	cursor: auto;
	background: transparent !important;
	&--link {
		cursor: pointer;
	}
}
</style>
