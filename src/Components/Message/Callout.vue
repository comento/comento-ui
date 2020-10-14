<template>
	<div class="c-application c-callout_container" :class="[computedSize, computedType, computedFull]">
		<div class="c-callout_wrapper">
			<Icon :name="mapIconNameFromSize(size)" :color="computedIconColor" />
			<Typography class="c-callout_message" color="gray700" :type="size === 'medium' ? 'body2' : 'caption1'">
				<slot />
			</Typography>
		</div>
	</div>
</template>

<script>
import Icon from '@/src/Elements/Core/Icon/Icon';
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'Callout',
	props: {
		type: {
			type: String,
			default: 'information',
			validator(value) {
				return ['information', 'alert', 'success'].indexOf(value) !== -1;
			},
		},
		size: {
			type: String,
			default: 'small',
			validator(value) {
				return ['x-small', 'small', 'medium'].indexOf(value) !== -1;
			},
		},
		full: {
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
			background-color: $gray100;
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
