<template>
	<BaseModal
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
				<CButton size="large" :disabled="disabled" :loading="loading" full @click="successCallback">
					{{ successMessage }}
				</CButton>
			</div>
		</div>
	</BaseModal>
</template>

<script>
import BaseModal from '@/components/components/message/modal/BaseModal';
import CTypography from '@/components/elements/core/typography/CTypography';
import CButton from '@/components/components/general/button/CButton';

export const aligns = ['left', 'center', 'right'];

export default {
	name: 'CWithFormModal',
	props: {
		show: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		/**
		 * 정렬(left, center, right)
		 */
		align: {
			type: String,
			default: 'center',
			validator(value) {
				return aligns.indexOf(value) !== -1;
			},
		},
		showActionButton: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		disabled: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		loading: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		successCallback: {
			type: Function,
			default: () => {},
			validator(value) {
				return typeof value === 'function';
			},
		},
		successMessage: {
			type: String,
			default: '확인',
			validator(value) {
				return typeof value === 'string';
			},
		},
		showCloseButton: {
			type: Boolean,
			default: true,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		persistent: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		full: {
			type: Boolean,
			default: false,
		},
		scroll: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
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
		BaseModal,
		CTypography,
		CButton,
	},
};
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
