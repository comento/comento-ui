<template>
	<Drawer
		:mask-closable="true"
		:zIndex="1002"
		align="down"
		:closeable="true"
		:show-close-button="true"
		@close="$emit('close')"
	>
		<div v-if="showDrawer" class="c-application c-bottom-drawer">
			<div class="c-bottom-drawer--title-wrapper">
				<Typography type="headline6" :font-weight="700">
					<slot name="title"> </slot>
				</Typography>
			</div>

			<div class="c-bottom-drawer--content-wrapper" :style="heightMax">
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
				lacinia malesuada. Nam varius tortor quis lacus ultrices fermentum. Cras at lobortis arcu.
			</div>
		</div>
	</Drawer>
</template>

<script>
import Drawer from '@/src/DataDisplay/Drawer';
import Typography from '../Elements/Core/Typography/Typography';
export default {
	name: 'BottomDrawer',
	props: {
		showDrawer: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		heightMax() {
			const windowH = window.innerHeight;
			return { maxHeight: windowH * 0.76 + 'px' };
		},
	},
	components: {
		Drawer,
		Typography,
	},
};
</script>

<style scoped lang="scss">
::v-deep .c-drawer {
	@include border-radius(16px 16px 0 0);
	@include shadow1();
}
.c-bottom-drawer {
	padding: 20px;

	&--title {
		&-wrapper {
			display: flex;
			justify-content: space-between;
			padding-bottom: 24px;
		}
	}
	&--content {
		&-wrapper {
			height: auto;
			min-height: 266px;
			overflow: auto;
		}
	}
}
</style>
