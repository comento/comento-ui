<template>
	<Drawer
		:mask-closable="true"
		:z-index="1002"
		max-height="100vh"
		:direction="direction"
		:closeable="false"
		@close="$emit('close')"
	>
		<div v-if="showDrawer" class="c-side-drawer">
			<Box class="c-side-drawer--title-wrapper" :paddings="[16, 16, 16, 16]">
				<Typography type="headline7" font-weight="semi-bold">
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
import Box from '@/components/box/Box.vue';
import Drawer from '@/components/drawer/Drawer';
import Typography from '@/components/typography/Typography';

/**
 * @displayName c-side-drawer
 */
export default {
	name: 'SideDrawer',
	mixins: [scrollMixin],
	props: {
		/**
		 * 방향(left, right)
		 */
		direction: {
			type: String,
			default: 'right',
			validator(value) {
				return ['left', 'right'].indexOf(value) !== -1;
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
	width: 308px;
	height: 100%;
	@include pc {
		width: 360px;
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
			height: calc(100vh - 56px);
			overflow: auto;
		}
	}
}
</style>
