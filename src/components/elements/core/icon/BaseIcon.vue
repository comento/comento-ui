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
			v-on="$listeners"
		/>
	</keep-alive>
</template>

<script>
import { colorKeys, colors } from '@/utils/constants/color';
import customValidator from '@/utils/custom-validator';
import { defineComponent } from 'vue';

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
	computed: {
		computedRotate() {
			return this.rotate !== 0 ? { transform: `rotate(${this.rotate}deg)` } : null;
		},
		computedFill() {
			if (this.color) {
				return { fill: colors[this.color] };
			} else {
				return null;
			}
		},
		hasEventListener() {
			return Boolean(this.$listeners && this.$listeners.click);
		},
		classes() {
			return [this.hasEventListener && 'c-icon--link'];
		},
		styles() {
			return {
				...this.computedFill,
				...this.computedRotate,
			};
		},
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
