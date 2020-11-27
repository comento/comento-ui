<template>
	<div>
		<div
			v-for="color in Object.keys(colors)"
			:key="color"
			class="c-color"
			:class="mapTextColor(color)"
			:style="`background-color: ${colors[color]}`"
		>
			<span>{{ color }}</span>
			<span>{{ colors[color] }}</span>
		</div>
	</div>
</template>

<script>
import { colors } from './index.js';

export default {
	name: 'Color',
	data() {
		return {
			colors,
		};
	},
	methods: {
		mapTextColor(color) {
			const textBlack = [
				'gray300',
				'gray200',
				'gray100',
				'gray000',
				'white',
				'green100',
				'green000',
				'red100',
				'red000',
				'blue100',
				'blue000',
				'yellow100',
			];
			return textBlack.includes(color) ? 'text-black' : 'text-white';
		},
	},
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

.c-color {
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 10px;
	width: 100%;
	height: 20vh;
	text-align: right;
}
.text-white {
	color: white;
}
.text-black {
	color: black;
}
</style>
