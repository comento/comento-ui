<template>
	<transition :name="computedTransition">
		<div class="c-application c-alert" :class="classes">
			<Grid>
				<Row class="c-alert--row">
					<StyleCol :col-lg="12" class="c-alert--col">
						<div class="c-alert--wrapper">
							<div class="c-alert--content">
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
					</StyleCol>
				</Row>
			</Grid>
		</div>
	</transition>
</template>

<script>
import Grid from '@/src/Components/Layout/Grid';
import Row from '@/src/Components/Layout/Row';
import StyleCol from '@/src/Components/Layout/StyleCol';
import Icon from '@/src/Elements/Core/Icon/Icon';
import Typography from '@/src/Elements/Core/Typography/Typography';

export const AlertTypes = ['information', 'warning'];

export default {
	name: 'Alert',
	props: {
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
	components: { Grid, Row, StyleCol, Icon, Typography },
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
			@include f-normal();
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
