<template>
	<BaseDrawer
		:mask-closable="true"
		:z-index="1002"
		max-height="100vh"
		:align="align"
		:closeable="false"
		@close="$emit('close')"
	>
		<div v-if="showDrawer" class="c-side-drawer">
			<CBox class="c-side-drawer--title-wrapper" :paddings="[16, 16, 16, 16]">
				<CTypography type="headline6" :font-weight="700">
					<slot name="title"> </slot>
				</CTypography>
				<slot name="right-content" />
			</CBox>
			<Box class="c-side-drawer--content-wrapper" :paddings="[0, 0, 0, 0]" background-color="gray100">
				<slot />
			</Box>
		</div>
	</BaseDrawer>
</template>

<script>
import scrollMixin from '@/mixins/scrollMixin';
import CBox from '@/components/components/general/CBox';
import BaseDrawer from '@/components/components/dataDisplay/drawer/BaseDrawer';
import CTypography from '@/components/elements/core/typography/CTypography';

export default {
	name: 'CSideDrawer',
	mixins: [scrollMixin],
	props: {
		/**
		 * 위치(left, right)
		 */
		align: {
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
		CBox,
		BaseDrawer,
		CTypography,
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
