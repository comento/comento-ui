<template>
	<button
		class="c-application c-rating-button"
		:class="[color, { loading: loading }]"
		v-bind="$attrs"
		:disabled="disabled"
		v-on="$listeners"
		@click="$event.target.blur()"
	>
		<Loader v-if="loading" size="small" :color="color" />
		<template v-else>
			<Icon :name="iconName" :color="computedColor" class="mr-4" />
			<Typography type="body2" :color="computedColor">{{ text }}</Typography>
		</template>
	</button>
</template>

<script>
import Icon from '@/components/icon/Icon.vue';
import Typography from '@/components/typography/Typography.vue';
import Loader from '@/components/loader/Loader.vue';

export const RATING_BUTTON_COLORS = ['primary', 'info', 'accent', 'secondary', 'success'];

/**
 * @displayName c-rating-button
 */
export default {
	name: 'RatingButton',
	props: {
		iconName: {
			type: String,
			default: 'IconCommentSmallLine',
		},
		text: {
			type: [Number, String],
			required: true,
		},
		color: {
			type: String,
			default: 'primary',
			validator(value) {
				const isValid = RATING_BUTTON_COLORS.includes(value);
				if (!isValid) {
					console.error(`${value} is not a valid value of RatingButton color`);
				}
				return isValid;
			},
		},
		loading: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		computedColor() {
			if (this.disabled) {
				return {
					primary: 'blue100',
					info: 'gray200',
					accent: 'red100',
					secondary: 'orange100',
					success: 'green100',
				}[this.color];
			}

			if (this.color === 'info') {
				return 'gray500';
			}

			return this.color;
		},
	},
	components: { Typography, Icon, Loader },
};
</script>

<style lang="scss" scoped>
.c-rating-button {
	@include flexbox();
	@include flex-direction(row);
	@include align-items(center);
	@include border-radius(6px);
	min-width: 50px;
	height: 28px;
	padding: 4px;
	cursor: pointer;
	border: 0;
	background: none;

	&.primary {
		@include state-style {
			background: $blue000;
		}
	}
	&.info {
		@include state-style {
			// info일 경우 100을 사용
			background: $gray100;
		}
	}
	&.accent {
		@include state-style {
			background: $red000;
		}
	}
	&.secondary {
		@include state-style {
			background: $orange000;
		}
	}
	&.success {
		@include state-style {
			background: $green000;
		}
	}

	&.loading {
		@include justify-content(center);
		@include align-items(center);
		cursor: wait;
		@include state-style {
			background: none;
		}
		.c-icon {
			margin: 1px 0;
		}
	}

	&:disabled {
		cursor: not-allowed;
		@include state-style {
			background: none;
		}
	}

	.c-icon {
		margin: 2px 4px 2px 0;
		cursor: inherit;
	}
}
</style>
