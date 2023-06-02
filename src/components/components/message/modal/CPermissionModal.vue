<template>
	<CModal
		:show="show"
		:show-close-button="false"
		max-width="343px"
		width="100%"
		:persistent="persistent"
		@close="close"
	>
		<div class="c-modal--content-container">
			<!-- title 영역 -->
			<CTypography type="body1" align="center" color="gray900" font-weight="semi-bold">
				<slot name="title" />
			</CTypography>

			<!-- content 영역 -->
			<CTypography v-if="$slots['content']" type="body2" align="center" color="gray800" class="mt-8">
				<div class="c-modal--content-wrapper">
					<slot name="content" />
				</div>
			</CTypography>
		</div>

		<!-- button 영역 -->
		<div class="c-modal--button-group">
			<!-- 취소 버튼 -->
			<div class="c-modal--cancel-button c-pointer" @click="close">
				<CTypography type="body1" :color="cancelButtonColor" align="center"> 취소 </CTypography>
			</div>
			<!-- 확인 버튼 -->
			<div class="c-modal--confirm-button c-pointer" @click="successCallback">
				<CTypography type="body1" :color="confirmButtonColor" align="center">
					{{ successMessage }}
				</CTypography>
			</div>
		</div>
	</CModal>
</template>

<script>
import CModal from '@/components/components/message/modal/CModal.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CPermissionModal',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		cancelButtonColor: {
			type: String,
			default: 'gray500',
		},
		confirmButtonColor: {
			type: String,
			default: 'gray500',
		},
		successCallback: {
			type: Function,
			default: () => {},
		},
		successMessage: {
			type: String,
			default: '확인',
		},
		persistent: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		close() {
			this.$emit('update:show', false);
			this.$emit('close');
		},
	},
	components: {
		CModal,
		CTypography,
	},
});
</script>

<style lang="scss" scoped>
::v-deep .c-overlay {
	z-index: 9999 !important;
}

.c-modal {
	&--content-container {
		@include flexbox();
		@include flex-direction(column);
		@include justify-content(center);
		@include align-items(center);
		padding: 24px 32px;
		min-height: 101px;
		max-height: 150px;
	}

	&--button-group {
		display: flex;
		border-top: 1px solid $gray200;
		height: 46px;
	}

	&--cancel-button,
	&--confirm-button {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&--cancel-button {
		border-right: 1px solid $gray200;
	}
}
</style>
