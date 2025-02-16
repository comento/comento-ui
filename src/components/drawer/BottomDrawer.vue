<template>
	<Drawer
		:mask-closable="true"
		:z-index="1002"
		direction="down"
		:closeable="showCloseButton"
		:max-height="computedMaxHeight"
		@close="$emit('close')"
	>
		<div v-if="showDrawer" class="c-bottom-drawer" :class="computedClass">
			<div class="c-bottom-drawer--title-wrapper">
				<Typography type="headline7" font-weight="semi-bold">
					<slot name="title" />
				</Typography>
			</div>

			<div class="c-bottom-drawer--content-wrapper">
				<slot />
			</div>

			<!-- button 영역 -->
			<div v-if="showActionButton" class="c-bottom-drawer--action-button-wrapper">
				<Button size="large" :disabled="disabled" :loading="loading" full @click="successCallback">
					{{ successMessage }}
				</Button>
			</div>
		</div>
	</Drawer>
</template>

<script>
import scrollMixin from '@/mixins/scrollMixin.js';
import Drawer from '@/components/drawer/Drawer.vue';
import Typography from '@/components/typography/Typography.vue';
import Button from '@/components/button/Button.vue';

/**
 * @displayName c-bottom-drawer
 */
export default {
	name: 'BottomDrawer',
	mixins: [scrollMixin],
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
		showCloseButton: {
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
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		computedClass() {
			return [this.scroll && 'scroll', this.showActionButton && 'with-button'];
		},
		computedMaxHeight() {
			return '68vh';
		},
	},
	watch: {
		showDrawer() {
			this.$_handleNotScroll(this.showDrawer);
		},
	},
	beforeDestroy() {
		this.$_handleNotScroll(false);
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
	min-height: fit-content;
}
.c-bottom-drawer {
	padding-bottom: 20px;

	&.scroll {
		.c-bottom-drawer--content-wrapper {
			padding-bottom: 6px;
			max-height: calc(68vh - 68px - 20px);

			&:after {
				content: '';
				position: absolute;
				width: 100%;
				height: 30px;
				left: 0;
				bottom: calc(20px - 16px);
				background: linear-gradient(
					180deg,
					rgba(255, 255, 255, 0) 0%,
					rgba(255, 255, 255, 0.6) 40%,
					rgba(255, 255, 255, 1) 90%
				);
			}
		}

		&.with-button {
			.c-bottom-drawer--content-wrapper {
				max-height: calc(68vh - 68px - 20px - 72px);
				&:after {
					bottom: calc(74px + 20px - 16px);
				}
			}
		}
	}

	&--title-wrapper {
		display: flex;
		justify-content: space-between;
		padding: 20px 20px 24px 20px;
	}

	&--content-wrapper {
		height: auto;
		overflow: auto;
		padding: 0 20px;
		max-height: calc(68vh - 68px - 20px);
	}

	&--action-button-wrapper {
		padding: 24px 20px 0 20px;
	}
}
</style>
