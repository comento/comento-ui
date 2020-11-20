<template>
	<Drawer
		:mask-closable="true"
		:z-index="1002"
		align="down"
		:closeable="true"
		:show-close-button="true"
		@close="$emit('close')"
	>
		<div v-if="showDrawer" class="c-application c-bottom-drawer">
			<div class="c-bottom-drawer--title-wrapper">
				<Typography type="headline6" :font-weight="700">
					<slot name="title" />
				</Typography>
			</div>

			<div class="c-bottom-drawer--content-wrapper" :style="heightMax">
				<slot />
			</div>
		</div>
	</Drawer>
</template>

<script>
import Drawer from '@/src/Components/DataDisplay/Drawer/Drawer';
import Typography from '@/src/Elements/Core/Typography/Typography';

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
			return { maxHeight: windowH * 0.68 + 'px' };
		},
	},
	components: {
		Drawer,
		Typography,
	},
};
</script>

<style lang="scss" scoped>
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
