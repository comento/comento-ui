<template>
	<div id="app">
		<button @click="toggle">Open/Close</button>
		<BottomDrawer
			:mask-closable="true"
			:zIndex="1002"
			:closeable="false"
			:show-drawer="open"
			style="height: 30%"
			@close="toggle"
		>
			<template v-slot:title>test</template>
		</BottomDrawer>
	</div>
</template>

<script>
import BottomDrawer from './BottomDrawer';
import Icon from '@/src/Elements/Core/Icon/Icon';

export default {
	name: 'app',
	data() {
		return {
			open: false,
			innerOpen: false,
		};
	},
	methods: {
		toggle() {
			this.open = !this.open;
		},
		clickContent() {
			this.innerOpen = true;
		},
	},
	components: {
		BottomDrawer,
		Icon,
	},
};
</script>

<style lang="scss" scoped>
#app {
	.demo-container {
		margin-top: 60px;
		text-align: center;
		display: flex;
		margin: 0 auto;
		justify-content: space-around;
		width: 60%;
		align-content: center;
		align-items: center;
	}
}
</style>
