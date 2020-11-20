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

			<div class="c-bottom-drawer--content-wrapper" :style="heightMax" :class="computedClass">
				<slot />
			</div>

			<!-- button 영역 -->
			<div v-if="showActionButton" class="c-bottom-drawer--action-button-wrapper">
				<Button size="large" :loading="loading" full @click="successCallback">
					{{ successMessage }}
				</Button>
			</div>
		</div>
	</Drawer>
</template>

<script>
import Drawer from '@/src/Components/DataDisplay/Drawer/Drawer';
import Typography from '@/src/Elements/Core/Typography/Typography';
import Button from '@/src/Components/Button/Button';

export default {
	name: 'BottomDrawer',
	props: {
		showDrawer: {
			type: Boolean,
			default: false,
		},
		scroll: {
			type: Boolean,
			default: false,
		},
		showActionButton: {
			type: Boolean,
			default: false,
		},
		// 버튼 로딩
		loading: {
			type: Boolean,
			default: false,
		},
		successCallback: {
			type: Function,
			default: () => {},
		},
		successMessage: {
			type: String,
			default: '확인',
		},
	},
	computed: {
		heightMax() {
			const windowH = window.innerHeight;
			return { maxHeight: windowH * 0.68 + 'px' };
		},
		computedClass() {
			return [this.scroll && 'scroll', this.showActionButton && 'with-button'];
		},
	},
	components: {
		Drawer,
		Typography,
		Button,
	},
};
</script>

<style lang="scss" scoped>
::v-deep .c-drawer {
	@include border-radius(16px 16px 0 0);
	@include shadow1();
}
.c-bottom-drawer {
	padding-bottom: 20px;
	&--title-wrapper {
		display: flex;
		justify-content: space-between;
		padding: 20px 20px 24px 20px;
	}

	&--content-wrapper {
		height: auto;
		min-height: 266px;
		overflow: auto;
		padding: 0 20px;

		&.scroll {
			&:after {
				content: '';
				position: absolute;
				width: 100%;
				height: 30px;
				left: 0;
				bottom: 20px;
				background: linear-gradient(
					180deg,
					rgba(255, 255, 255, 0) 0%,
					rgba(255, 255, 255, 0.7) 58.33%,
					rgba(255, 255, 255, 0.958333) 100%
				);
			}
			&.with-button {
				&:after {
					bottom: 92px;
				}
			}
		}
	}

	&--action-button-wrapper {
		padding: 24px 20px 0 20px;
	}
}
</style>
