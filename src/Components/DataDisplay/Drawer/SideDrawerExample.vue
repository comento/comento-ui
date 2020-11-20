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
			:z-index="1002"
			:align="align"
			:closeable="false"
			:show-drawer="open"
			@close="toggle"
		>
			<template v-slot:title>test</template>
			<template v-slot:right-content>
				<Button color="gray" type="outlined" size="small">모두 읽음 표시</Button>
			</template>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sollicitudin lacus. Morbi lacinia
				tortor id purus varius, sit amet sodales erat consequat. Integer ultrices mauris vehicula eros lacinia,
				at vulputate nibh euismod. Fusce at convallis nisl. Curabitur dui quam, rutrum quis semper vitae,
				dapibus nec lorem. Sed maximus imperdiet urna. Suspendisse porta commodo nisl, at viverra sapien.
				Praesent in felis enim. Sed mollis enim vel velit dapibus, eget consequat dolor convallis. Vivamus sit
				amet ornare ex. Morbi porttitor blandit eros sit amet tincidunt. Vivamus imperdiet molestie lectus ac
				tristique. Phasellus commodo commodo ligula, sollicitudin auctor erat rhoncus ac. Quisque lectus neque,
				iaculis nec mauris sed, congue rutrum sem. Fusce cursus, tortor ut placerat auctor, risus arcu porttitor
				tellus, ac pharetra lacus lectus eu dolor. Sed metus nibh, tincidunt pharetra pulvinar a, venenatis et
				eros. Cras et libero mauris. Quisque bibendum odio ut ornare interdum. Nunc eu nulla sollicitudin,
				facilisis dolor vel, placerat nibh. Donec eu ex iaculis, tincidunt turpis et, rhoncus neque. Mauris
				feugiat urna urna. Donec ac dapibus leo, sit amet porttitor nisi. Mauris felis leo, scelerisque
				scelerisque lobortis id, egestas tincidunt dui. Vivamus facilisis felis lectus, id tincidunt nisl
				interdum et. Praesent accumsan congue mauris, non pellentesque enim feugiat vel. Praesent in ullamcorper
				erat. Etiam mollis sed tellus a mattis. Ut placerat euismod egestas. Mauris blandit nunc eu justo
				semper, sit amet interdum eros mollis. Quisque vitae massa purus. Phasellus at orci arcu. Aliquam erat
				volutpat. Mauris bibendum orci nec ex semper, ac aliquam sapien placerat. Mauris cursus egestas justo id
				elementum. Suspendisse quis cursus massa. Cras fermentum, risus non efficitur condimentum, orci arcu
				sollicitudin diam, pharetra malesuada libero odio quis risus. Pellentesque in dui sodales, dapibus risus
				ullamcorper, bibendum diam. Praesent sagittis nibh velit, quis tincidunt lorem viverra nec. Phasellus
				eget placerat ante. Nulla ac nulla sed erat venenatis commodo. Aliquam id iaculis odio. Maecenas a
				maximus orci. In hac habitasse platea dictumst. Quisque quis diam tellus. In ac euismod libero. Aliquam
				semper, massa non dictum porttitor, nisi nulla aliquam risus, ornare iaculis tellus ligula sed nulla. Ut
				aliquet ligula ac finibus fringilla. Pellentesque pulvinar eros vulputate, bibendum tortor a, imperdiet
				metus. Ut rhoncus arcu est, nec elementum neque ultrices sit amet. Pellentesque dignissim ligula felis,
				nec scelerisque elit condimentum vitae. In porta magna eget augue egestas pulvinar. Suspendisse
				malesuada tellus sed massa pulvinar, sed maximus lorem elementum. Vivamus facilisis libero sit amet
				lacinia malesuada. Nam varius tortor quis lacus ultrices fermentum.
			</p>
		</SideDrawer>
	</div>
</template>

<script>
import Button from '@/src/Components/Button/Button';
import SideDrawer from './SideDrawer';

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
