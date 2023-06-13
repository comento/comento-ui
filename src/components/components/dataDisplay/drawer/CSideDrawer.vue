<template>
	<BaseDrawer
		:mask-closable="true"
		:z-index="1002"
		max-height="100vh"
		:direction="direction"
		:closeable="false"
		@close="$emit('close')"
	>
		<div v-if="showDrawer" class="c-side-drawer">
			<CBox class="c-side-drawer--title-wrapper" :paddings="[16, 16, 16, 16]">
				<CTypography type="headline7" font-weight="semi-bold">
					<slot name="title" />
				</CTypography>
				<slot name="right-content" />
			</CBox>
			<CBox class="c-side-drawer--content-wrapper" :paddings="[0, 0, 0, 0]" background-color="gray100">
				<slot />
			</CBox>
		</div>
	</BaseDrawer>
</template>

<script>
import { toggleNotScroll } from '@/utils/not-scroll';
import CBox from '@/components/components/general/CBox.vue';
import BaseDrawer from '@/components/components/dataDisplay/drawer/BaseDrawer.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent, toRefs, watch } from 'vue';

export default defineComponent({
	name: 'CSideDrawer',
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
	emits: ['close'],
	setup(props) {
		const { showDrawer } = toRefs(props);
		watch(showDrawer, () => toggleNotScroll(showDrawer));
	},
	components: {
		CBox,
		BaseDrawer,
		CTypography,
	},
});
</script>

<style lang="scss" scoped>
:deep(.c-drawer) {
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
