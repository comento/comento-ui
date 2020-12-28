<template>
	<Drawer
		:mask-closable="true"
		:z-index="1002"
		max-height="100vh"
		:align="align"
		:closeable="false"
		@close="$emit('close')"
	>
		<div v-if="showDrawer" class="c-side-drawer">
			<Box class="c-side-drawer--title-wrapper" :paddings="[16, 16, 16, 16]">
				<Typography type="headline6" :font-weight="700">
					<slot name="title"> </slot>
				</Typography>
				<slot name="right-content" />
			</Box>
			<Box class="c-side-drawer--content-wrapper" :paddings="[0, 0, 0, 0]" background-color="gray100">
				<slot />
			</Box>
		</div>
	</Drawer>
</template>

<script>
import scrollMixin from '@/mixins/scrollMixin';
import Box from '@/src/Components/DataDisplay/Box';
import Drawer from '@/src/Components/DataDisplay/Drawer/Drawer';
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'SideDrawer',
	mixins: [scrollMixin],
	props: {
		align: {
			type: String,
			default: 'right',
			validator(value) {
				return ['left', 'up', 'right', 'down'].indexOf(value) !== -1;
			},
		},
		showDrawer: {
			type: Boolean,
			default: false,
		},
	},
	watch: {
		showDrawer() {
			this.$_handleNotScroll(this.showDrawer);
		},
	},
	methods: {
		toggle() {
			this.showDrawer = !this.showDrawer;
		},
	},
	components: {
		Box,
		Drawer,
		Typography,
	},
};
</script>

<style lang="scss" scoped>
::v-deep .c-drawer {
	width: 315px;
	height: 100%;
	@include pc {
		width: 374px;
	}
}
.c-side-drawer {
	&--title {
		&-wrapper {
			display: flex;
			justify-content: space-between;
		}
	}
	&--content {
		&-wrapper {
			width: 100%;
			height: 100vh;
			overflow: auto;
		}
	}
}
</style>
