<template>
	<CModal
		:show="show"
		:show-close-button="true"
		max-width="343px"
		width="100%"
		:persistent="persistent"
		@close="close"
	>
		<div class="c-modal--wrapper">
			<img :src="imageSrc" :alt="imageAlt" class="c-modal--image" />
			<!-- title 영역 -->
			<div class="c-modal--title-wrapper">
				<CTypography type="headline5" :align="align" color="gray900">
					<slot name="title" />
				</CTypography>
			</div>

			<!-- content 영역 -->
			<div class="c-modal--content-wrapper">
				<CTypography type="body2" :align="align" color="gray800">
					<slot name="content" />
				</CTypography>
			</div>

			<!-- button 영역 -->
			<div v-if="showActionButton" class="c-modal--action-button-wrapper">
				<CButton size="large" :loading="loading" :color="buttonColor" full @click="successCallback">
					{{ successMessage }}
				</CButton>
			</div>
		</div>
	</CModal>
</template>

<script>
import CModal from '@/components/components/message/modal/CModal.vue';
import { aligns } from '@/components/components/message/modal/CBasicModal.vue';
import CButton, { buttonColors } from '@/components/components/general/button/CButton.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CImageModal',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		/**
		 * 정렬(left, center, right)
		 */
		align: {
			type: String,
			default: 'center',
			validator(value) {
				return aligns.includes(value);
			},
		},
		persistent: {
			type: Boolean,
			default: false,
		},
		showActionButton: {
			type: Boolean,
			default: true,
		},
		// 버튼 로딩
		loading: {
			type: Boolean,
			default: false,
		},
		buttonColor: {
			type: String,
			default: 'primary',
			validator(value) {
				return buttonColors.includes(value);
			},
		},
		successCallback: {
			type: Function,
			default: () => {},
		},
		successMessage: {
			type: String,
			default: '확인',
		},
		imageSrc: {
			type: String,
		},
		imageAlt: {
			type: String,
		},
	},
	emits: ['update:show', 'close'],
	setup(props, { emit }) {
		const close = () => {
			emit('update:show', false);
			emit('close');
		};

		return { close };
	},
	components: {
		CModal,
		CButton,
		CTypography,
	},
});
</script>

<style lang="scss" scoped>
.c-modal {
	&--wrapper {
		padding: 32px 0;
		&.scroll {
			.c-modal--content-wrapper {
				padding-bottom: 4px;
				&:after {
					content: '';
					position: absolute;
					width: 100%;
					height: 30px;
					left: 0;
					bottom: calc(40px - 16px);
					background: linear-gradient(
						180deg,
						rgba(255, 255, 255, 0) 0%,
						rgba(255, 255, 255, 0.6) 40%,
						rgba(255, 255, 255, 1) 90%
					);
				}
			}

			&.with-button {
				.c-modal--content-wrapper {
					max-height: calc(640px - 336px);
					@include pc {
						max-height: calc(640px - 207px);
					}
					&:after {
						bottom: calc(40px + 48px + 24px - 16px);
					}
				}
			}
		}
	}

	&--title-wrapper {
		padding: 8px 32px 16px 32px;
	}

	&--content-wrapper {
		padding-left: 32px;
		padding-right: 32px;

		&:deep(* + *:not(br)) {
			margin-top: 8px;
		}
		max-height: calc(640px - 265px);
		overflow-y: auto;
		@include pc {
			max-height: calc(640px - 129px);
		}
	}
	&--action-button-wrapper {
		padding: 24px 32px 0 32px;
	}
	&--image {
		padding: 0 32px;
	}
}
</style>
