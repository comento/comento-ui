<template>
	<div class="c-application c-callout_container" :class="[computedSize, computedType, computedFull]">
		<div class="c-callout_wrapper">
			<Icon :name="mapIconNameFromSize(size)" :color="computedIconColor" />
			<Typography class="c-callout_message" color="gray700" :type="computedFontType">
				<slot />
			</Typography>
			<Icon v-if="closable" name="IconCloseSmallLine" />
		</div>
	</div>
</template>

<script>
import Icon from '@/src/Elements/Core/Icon/Icon';
import Typography from '@/src/Elements/Core/Typography/Typography';

export const CalloutTypes = ['information', 'alert', 'success'];
export const CalloutSizes = ['x-small', 'small', 'medium'];

export default {
	name: 'Callout',
	props: {
		type: {
			type: String,
			default: 'information',
			validator(value) {
				const isValid = CalloutTypes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid value of Callout type`);
				}
				return isValid;
			},
		},
		size: {
			type: String,
			default: 'small',
			validator(value) {
				const isValid = CalloutSizes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid value of Callout size`);
				}
				return isValid;
			},
		},
		full: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		closable: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
	},
	computed: {
		computedFull() {
			return this.full && 'full';
		},
		computedIconColor() {
			const iconColors = {
				information: 'gray500',
				alert: 'red600',
				success: 'blue600',
			};
			return iconColors[this.type];
		},
		computedSize() {
			return this.size;
		},
		computedType() {
			return this.type;
		},
		computedFontType() {
			const mapSizeToFontType = {
				medium: 'body2',
				small: 'caption1',
				'x-small': 'caption2',
			};
			return mapSizeToFontType[this.size];
		},
	},
	methods: {
		mapIconNameFromSize(size) {
			const iconSet = {
				'x-small': 'IconExclamationSmallFill',
				small: 'IconExclamationMediumLine',
				medium: 'IconExclamationLargeLine',
			};
			return iconSet[size];
		},
	},
	components: {
		Typography,
		Icon,
	},
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

.c-callout {
	&_container {
		display: inline-flex;
		align-items: center;
		&.full {
			width: 100%;
		}
		svg {
			flex-shrink: 0;
		}
		// color
		&.x-small {
			padding: 4px 8px;
			border-radius: 4px;
			svg {
				margin-right: 4px;
			}
		}
		&.small {
			padding: 8px;
			border-radius: 4px;
			svg {
				margin-right: 6px;
			}
		}
		&.medium {
			padding: 16px 16px 16px 16px;
			border-radius: 6px;
			svg {
				margin-right: 8px;
			}
		}

		// type
		&.information {
			background-color: $gray000;
		}
		&.alert {
			background-color: $red000;
		}
		&.success {
			background-color: $blue000;
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
