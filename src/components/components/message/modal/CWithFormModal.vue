<template>
	<CModal
		:show="show"
		:show-close-button="showCloseButton"
		:persistent="persistent"
		:max-height="computedMaxHeight"
		:width="computedWidth"
		@close="close"
	>
		<div class="c-modal--wrapper" :class="computedClasses">
			<!-- title 영역 -->
			<div class="c-modal--title-wrapper">
				<CTypography type="headline5" :align="align" color="gray900">
					<slot name="title" />
				</CTypography>
			</div>

			<!-- content 영역 -->
			<div class="c-modal--content-wrapper">
				<slot name="content" />
			</div>

			<!-- button 영역 -->
			<div v-if="showActionButton" class="c-modal--action-button-wrapper">
				<CButton
					size="large"
					:disabled="disabled"
					:loading="loading"
					:color="buttonColor"
					full
					@click="successCallback"
				>
					{{ successMessage }}
				</CButton>
			</div>
		</div>
	</CModal>
</template>

<script>
import CModal from '@/components/components/message/modal/CModal.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import CButton, { buttonColors } from '@/components/components/general/button/CButton.vue';
import { defineComponent } from 'vue';

export const aligns = ['left', 'center', 'right'];

export default defineComponent({
	name: 'CWithFormModal',
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
		showActionButton: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
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
		showCloseButton: {
			type: Boolean,
			default: true,
		},
		persistent: {
			type: Boolean,
			default: false,
		},
		full: {
			type: Boolean,
			default: false,
		},
		scroll: {
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
	},
	computed: {
		computedClasses() {
			return [this.computedScroll, this.computedWithButton];
		},
		computedScroll() {
			return { scroll: this.scroll };
		},
		computedWithButton() {
			return { 'with-button': this.showActionButton };
		},
		computedMaxHeight() {
			return this.isMobile ? '86vh' : '640px';
		},
		computedWidth() {
			return this.full || this.isMobile ? '100%' : 'auto';
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
		CButton,
	},
});
</script>

<style lang="scss" scoped>
.c-modal {
	&--wrapper {
		padding: 40px 0;
		&.scroll {
			.c-modal--content-wrapper {
				overflow-y: scroll;
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
		padding: 0 32px 20px 32px;
	}

	&--content-wrapper {
		padding-left: 32px;
		padding-right: 32px;

		max-height: calc(640px - 265px);
		@include pc {
			max-height: calc(640px - 129px);
		}
	}

	&--action-button-wrapper {
		padding: 20px 32px 0 32px;
	}
}
</style>
