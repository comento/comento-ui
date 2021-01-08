<template>
	<div class="c-application c-alert_container" :class="classes">
		<Grid>
			<Row class="flex justify-content-between">
				<StyleCol :col-lg="12" class="flex flex-row justify-content-between">
					<div class="c-alert_wrapper">
						<Icon name="IconSecurityLargeFill" :color="computedIconColor" />
						<Typography class="c-alert_message" color="gray800" type="body2">
							<slot />
						</Typography>
					</div>
				</StyleCol>
			</Row>
		</Grid>
	</div>
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
	},
	methods: {},
	components: { Grid, Row, StyleCol, Icon, Typography },
};
</script>

<style lang="scss" scoped>
.c-alert {
	&_container {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		width: 100%;
		height: $alert-height;
		svg {
			flex-shrink: 0;
			margin-right: 8px;
		}
		&::v-deep a {
			text-decoration: underline !important;
		}
		padding: 16px 0;

		// type
		&.information {
			background-color: $gray000;
		}
		&.warning {
			background-color: $red000;
		}
	}
	&_wrapper {
		display: inline-flex;
		align-items: center;
	}
	&_message {
		width: 100%;
		word-break: keep-all;
		&::v-deep strong {
			@include f-normal();
		}

		@include pc {
			width: 100%;
		}
	}
}
</style>
