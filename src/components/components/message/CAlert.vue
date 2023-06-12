<template>
	<transition :name="computedTransition">
		<div class="c-application c-alert" :style="styles" :class="classes">
			<CNewGrid :fluid="isMobile">
				<CNewRow class="c-alert--row">
					<CNewCol :col-lg="12" class="c-alert--col">
						<div class="c-alert--wrapper">
							<div class="c-alert--content">
								<div v-if="type !== 'image'" class="c-alert--icon">
									<slot v-if="hasIconSlot" name="icon" />
									<CIcon v-else :name="iconTypeMap[type].icon" :color="iconTypeMap[type].color" />
								</div>
								<CTypography
									class="c-alert--message"
									color="gray700"
									:type="isMobile ? 'body2' : 'body1'"
									:font-weight="500"
								>
									<slot />
								</CTypography>
							</div>

							<!-- 닫기 -->
							<CIconButton
								v-if="closable"
								class="c-alert--close-button"
								:size="iconSize.toLowerCase()"
								:icon-name="closeIconName"
								:color="closeButtonColor"
								@click.stop.capture="handleClose"
							/>
						</div>
					</CNewCol>
				</CNewRow>
			</CNewGrid>
		</div>
	</transition>
</template>

<script>
import CNewGrid from '@/components/layout/CNewGrid.vue';
import CNewRow from '@/components/layout/CNewRow.vue';
import CNewCol from '@/components/layout/CNewCol.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { colors } from '@/utils/constants/color';
import CIconButton from '@/components/components/general/button/CIconButton.vue';
import { defineComponent, computed, toRefs } from 'vue';
import useWindowResize from '@/services/useWindowResize';

export const AlertTypes = ['information', 'notice', 'success', 'error', 'image'];

export default defineComponent({
	name: 'CAlert',
	props: {
		/**
		 * 타입(information, notice, success, error, image)
		 */
		type: {
			type: String,
			default: 'information',
			validator(value) {
				return AlertTypes.includes(value);
			},
		},
		/**
		 * image 타입일 때 배경 이미지 url
		 */
		backgroundImage: {
			type: String,
			default: 'https://cdn.comento.kr/images/banner/webinar-home.jpg',
		},
		/**
		 * 닫기 버튼 보여주기
		 */
		closable: {
			type: Boolean,
			default: false,
		},
		/**
		 * 닫기 버튼 색상
		 */
		closeButtonColor: {
			type: String,
			default: 'gray400',
		},
	},
	emits: ['close'],
	setup(props, { emit, slots }) {
		const { closable, type, backgroundImage } = toRefs(props);
		const { isMobile } = useWindowResize();

		const computedTransition = computed(() => {
			return closable.value ? 'c-alert--fade' : null;
		});

		const classes = computed(() => {
			return { closable: closable.value };
		});

		const backgroundForType = computed(() => {
			if (type.value === 'image') {
				return {
					background: `url(${backgroundImage.value}) no-repeat`,
					backgroundSize: '100% 100%',
				};
			}
			return { backgroundColor: colors[iconTypeMap.value[type.value].backgroundColor] };
		});

		const styles = computed(() => {
			return {
				...backgroundForType.value,
			};
		});

		const iconSize = computed(() => {
			return isMobile ? 'Small' : 'Large';
		});

		const closeIconName = computed(() => {
			return isMobile ? 'IconCloseSmallLine' : 'IconCloseLargeLine';
		});

		const iconTypeMap = computed(() => {
			return {
				information: {
					backgroundColor: 'gray000',
					color: 'gray600',
					icon: `IconInformation${iconSize.value}Line`,
				},
				notice: { backgroundColor: 'blue000', color: 'primary', icon: `IconMegaphone${iconSize.value}Line` },
				success: { backgroundColor: 'green000', color: 'success', icon: `IconCheckRound${iconSize.value}Line` },
				error: { backgroundColor: 'red000', color: 'error', icon: `IconExclamation${iconSize.value}Line` },
			};
		});

		const handleClose = () => {
			emit('close');
		};

		const hasIconSlot = computed(() => slots.icon);

		return {
			computedTransition,
			classes,
			styles,
			iconSize,
			closeIconName,
			iconTypeMap,
			handleClose,
			isMobile,
			hasIconSlot,
		};
	},
	components: { CIconButton, CNewGrid, CNewRow, CNewCol, CIcon, CTypography },
});
</script>

<style lang="scss" scoped>
.c-alert {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	display: flex;
	align-items: center;
	width: 100%;
	height: $alert-height-mobile;
	padding: 12px 16px;

	@include pc {
		height: $alert-height;
		white-space: nowrap;
		padding: 16px 0;
	}

	&.closable {
		.c-alert--content {
			@include mobile {
				width: calc(100% - 62px);
			}
		}
	}

	&::v-deep a {
		text-decoration: underline !important;
	}

	&--row {
		@include flexbox();
		@include justify-content(space-between);
	}

	&--col {
		@include flexbox();
		@include flex-direction(row);
		@include justify-content(space-between);
	}

	&--wrapper {
		@include flexbox();
		@include flex-direction(row);
		@include justify-content(space-between);
		@include align-items(center);
		width: 100%;
	}

	&--content {
		@include flexbox();
		@include flex-direction(row);
		@include align-items(center);
		@include mobile {
			@include align-items(flex-start);
		}
	}

	&--icon {
		@include flexbox();
		@include align-items(center);
		margin-right: 6px;
		@include mobile {
			@include align-items(flex-start);
			margin-top: 2px;
		}
		@include pc {
			margin-right: 4px;
		}
	}

	&--message {
		width: 100%;
		word-break: break-all;
		@include ellipsis(2);

		@include pc {
			width: 100%;
			word-break: keep-all;
			@include ellipsis(1);
		}

		&::v-deep strong {
			@include f-regular();
		}
	}

	&--close-button {
		margin-left: 4px;
		cursor: pointer;
	}

	&--fade-leave-active {
		transition: all 0.3s;
	}
	&--fade-enter,
	&--fade-leave-to {
		transform: translateY(-100%);
		opacity: 0;
	}
}
</style>
