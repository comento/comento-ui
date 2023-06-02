<template>
	<div id="app">
		<CButton @click="toggle"> Open </CButton>
		<CBottomDrawer
			:mask-closable="true"
			:z-index="1002"
			:closeable="false"
			:show-drawer="open"
			scroll
			show-action-button
			@close="toggle"
		>
			<template #title> test </template>
			<div>
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
			</div>
		</CBottomDrawer>
	</div>
</template>

<script>
import CBottomDrawer from '@/components/components/dataDisplay/drawer/CBottomDrawer.vue';
import CButton from '@/components/components/general/button/CButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
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
		CButton,
		CBottomDrawer,
	},
});
</script>

<style lang="scss" scoped>
#app {
	.demo-container {
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
