<template>
	<transition :name="computedTransition">
		<div
			class="c-application c-callout--container"
			:class="[computedSize, computedType, computedFull]"
			v-bind="$attrs"
			v-on="$listeners"
		>
			<div class="c-callout--wrapper">
				<!-- 아이콘 -->
				<slot v-if="$slots['icon']" name="icon" />
				<Icon v-else :name="mapIconNameFromSize(size)" :color="computedIconColor" />

				<!-- 문구 -->
				<Typography class="c-callout--message" color="gray700" :type="computedFontType">
					<slot />
				</Typography>

				<!-- 닫기 -->
				<Icon
					v-if="closable"
					class="c-callout--close-button c-pointer"
					:name="computedCloseIconName"
					@click.stop.capture="handleClose"
				/>
			</div>
		</div>
	</transition>
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
		computedCloseIconName() {
			const iconSize = this.size === 'x-small' ? 'Small' : 'Medium';
			return `IconClose${iconSize}Line`;
		},
		computedTransition() {
			return this.closable ? 'callout-fade' : null;
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
		handleClose() {
			this.$emit('closeCallout');
		},
	},
	components: {
		Typography,
		Icon,
	},
};
</script>

<style scoped lang="scss">
@mixin callout-icon-margin-right($margin-right) {
	::v-deep svg:first-child {
		overflow: inherit; //overflow: hidden 때문에 margin을 주면 아이콘이 짤려서 추가함
		margin-right: $margin-right;
		cursor: auto;
	}
}

.c-callout {
	&--container {
		display: inline-flex;
		align-items: center;
		&.full {
			width: 100%;
		}
		svg:first-child {
			flex-shrink: 0;
		}

		&.x-small {
			padding: 4px 8px;
			border-radius: 4px;
			@include callout-icon-margin-right(4px);
		}
		&.small {
			padding: 8px;
			border-radius: 4px;
			@include callout-icon-margin-right(6px);
		}
		&.medium {
			padding: 16px 16px 16px 16px;
			border-radius: 6px;
			@include callout-icon-margin-right(8px);
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
	&--wrapper {
		display: inline-flex;
		width: 100%;
		position: relative;
		align-items: center;
	}
	&--message {
		width: 100%;
		word-break: keep-all;
		white-space: normal;
		&::v-deep strong {
			@include f-normal();
		}

		@include pc {
			width: 100%;
		}
	}
	&--close-button {
		margin-left: 4px;
	}
}

.callout-fade-leave-active {
	transition: all 0.2s;
}
.callout-fade-enter, .callout-fade-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(-100%);
	opacity: 0;
}
</style>
