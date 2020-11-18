<template>
	<div id="app">
		<div class="demo-container">
			<div>
				<input id="left" v-model="align" type="radio" value="left" />
				<label for="left">left</label>
			</div>

			<div>
				<input id="right" v-model="align" type="radio" value="right" />
				<label for="right">right</label>
			</div>

			<div>
				<input id="up" v-model="align" type="radio" value="up" />
				<label for="up">up</label>
			</div>

			<div>
				<input id="down" v-model="align" type="radio" value="down" />
				<label for="down">down</label>
			</div>
		</div>

		<button @click="toggle">Open/Close</button>
		<SideDrawer
			:mask-closable="true"
			:zIndex="1002"
			:align="align"
			:closeable="false"
			:show-drawer="open"
			@close="toggle"
		>
			<template v-slot:title>test</template>
			<template v-slot:right-content>
				<Button color="gray" type="outlined" size="small">모두 읽음 표시</Button>
			</template>
		</SideDrawer>
	</div>
</template>

<script>
import Button from '../Components/Button/Button';
// import Drawer from './Drawer';
import SideDrawer from './SideDrawer';
// import Typography from '../Elements/Core/Typography/Typography';
export default {
	name: 'app',
	data() {
		return {
			open: false,
			innerOpen: false,
			align: 'left',
		};
	},
	watch: {
		align() {
			this.open = false;
		},
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
		Button,
		SideDrawer,
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
