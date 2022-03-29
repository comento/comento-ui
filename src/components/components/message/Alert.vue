<template>
	<transition :name="computedTransition">
		<div class="c-application c-alert" :class="classes">
			<NewGrid>
				<NewRow class="c-alert--row">
					<NewCol :col-lg="12" class="c-alert--col">
						<div class="c-alert--wrapper">
							<div class="c-alert--content">
								<slot name="icon" />
								<Icon name="IconSecurityLargeFill" :color="computedIconColor" class="c-alert--icon" />
								<Typography class="c-alert--message" color="gray800" type="body2">
									<slot />
								</Typography>
							</div>

							<!-- 닫기 -->
							<Icon
								v-if="closable"
								class="c-alert--close-button"
								name="IconCloseLargeLine"
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

export const AlertTypes = ['information', 'warning'];

/**
 * @displayName c-alert
 */
export default {
	name: 'Alert',
	props: {
		/**
		 * 타입(information, warning)
		 */
		type: {
			type: String,
			default: 'information',
			validator(value) {
				return AlertTypes.indexOf(value) !== -1;
			},
		},
		closable: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		computedIconColor() {
			const colorMap = {
				information: 'gray600',
				warning: 'red600',
			};
			return colorMap[this.type];
		},
		classes() {
			return [`${this.type}`];
		},
		computedTransition() {
			return this.closable ? 'c-alert--fade' : null;
		},
	},
	methods: {
		handleClose() {
			this.$emit('close');
		},
	},
	components: { NewGrid, NewRow, NewCol, Icon, Typography },
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
	height: $alert-height;
	white-space: nowrap;
	padding: 16px 0;

	&::v-deep a {
		text-decoration: underline !important;
	}

	// type
	&.information {
		background-color: $gray000;
	}
	&.warning {
		background-color: $red000;
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

	&--icon {
		flex-shrink: 0;
		margin-right: 8px;
		cursor: default;
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
	}

	&--message {
		width: 100%;
		word-break: keep-all;
		&::v-deep strong {
			@include f-regular();
		}

		@include pc {
			width: 100%;
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
