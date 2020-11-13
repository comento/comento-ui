<template>
	<button class="c-narrow-button" :style="[computedColor]" v-bind="$attrs" type="button" v-on="$listeners">
		<slot></slot>
	</button>
</template>

<script>
import { colors } from '@/src/Elements/Core/Colors';

export default {
	name: 'NarrowButton',
	inheritAttrs: false,
	props: {
		color: {
			type: String,
			default: 'gray600',
			validator(value) {
				return ['gray400', 'gray600'].indexOf(value) !== -1;
			},
		},
	},
	computed: {
		mappedColor() {
			return this.color ? colors[this.color] : 'inherit';
		},
		computedColor() {
			return { color: this.mappedColor };
		},
	},
};
</script>

<style lang="scss" scoped>
.c-narrow-button {
	cursor: pointer;
	border: 0;
	border-radius: 4px;
	padding: 2px;
	background: transparent;
	&:hover {
		background-color: $gray100;
	}

	height: 18px;
	min-width: 36px;
	@include caption1();
}
</style>
