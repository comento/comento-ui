<template>
	<transition :name="computedTransition">
		<div class="c-application c-alert" :style="styles" :class="classes">
			<NewGrid :fluid="isMobile">
				<NewRow class="c-alert--row">
					<NewCol :col-lg="12" class="c-alert--col">
						<div class="c-alert--wrapper">
							<div class="c-alert--content">
								<div v-if="type !== 'image'" class="c-alert--icon">
									<slot v-if="$slots['icon']" name="icon" />
									<Icon v-else :name="iconTypeMap[type].icon" :color="iconTypeMap[type].color" />
								</div>
								<Typography
									class="c-alert--message"
									color="gray700"
									:type="isMobile ? 'body2' : 'body1'"
									:font-weight="500"
								>
									<slot />
								</Typography>
							</div>

							<!-- 닫기 -->
							<IconButton
								v-if="closable"
								class="c-alert--close-button"
								:size="iconSize.toLowerCase()"
								:icon-name="closeIconName"
								:color="closeButtonColor"
								@click.stop.capture="handleClose"
							/>
						</div>
					</NewCol>
				</NewRow>
			</NewGrid>
		</div>
	</transition>
</template>

<script>
import NewGrid from '@/components/layout/NewGrid';
import NewRow from '@/components/layout/NewRow';
import NewCol from '@/components/layout/NewCol';
import Icon from '@/components/elements/core/icon/Icon';
import Typography from '@/components/elements/core/typography/Typography';
import { colors } from '@/utils/constants/color';
import IconButton from '@/components/components/general/button/IconButton';

export const AlertTypes = ['information', 'notice', 'success', 'error', 'image'];

/**
 * @displayName c-alert
 */
export default {
	name: 'Alert',
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
	computed: {
		computedTransition() {
			return this.closable ? 'c-alert--fade' : null;
		},
		classes() {
			return { closable: this.closable };
		},
		styles() {
			return {
				...this.backgroundForType,
			};
		},
		backgroundForType() {
			if (this.type === 'image') {
				return {
					background: `url(${this.backgroundImage}) no-repeat`,
					backgroundSize: '100% 100%',
				};
			}
			return { backgroundColor: colors[this.iconTypeMap[this.type].backgroundColor] };
		},
		iconSize() {
			return this.isMobile ? 'Medium' : 'Large';
		},
		closeIconName() {
			return this.isMobile ? 'IconCloseMediumLine' : 'IconCloseLargeLine';
		},
		iconTypeMap() {
			return {
				information: {
					backgroundColor: 'gray000',
					color: 'gray600',
					icon: `IconInformation${this.iconSize}Line`,
				},
				notice: { backgroundColor: 'blue000', color: 'primary', icon: `IconMegaphone${this.iconSize}Line` },
				success: { backgroundColor: 'green000', color: 'success', icon: `IconCheckRound${this.iconSize}Line` },
				error: { backgroundColor: 'red000', color: 'error', icon: `IconExclamation${this.iconSize}Line` },
			};
		},
	},
	methods: {
		handleClose() {
			this.$emit('close');
		},
	},
	components: { IconButton, NewGrid, NewRow, NewCol, Icon, Typography },
};
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
