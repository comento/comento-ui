<template>
	<div>
		<div
			v-for="color in Object.keys(colors)"
			:key="color"
			class="c-application c-color"
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
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

.c-color {
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 10px;
	color: white;
	width: 100%;
	height: 20vh;
	text-align: right;
}
</style>
