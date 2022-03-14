<template>
	<div class="c-application c-banner" :class="[type]" :style="computedStyleVariables">
		<div class="c-banner--background" :class="[computedBlur]">
			<slot name="background" />
		</div>
		<div class="c-banner--content">
			<Typography v-if="title" class="c-banner--title" :type="computedTitleType" font-weight="semi-bold">
				{{ title }}
			</Typography>
			<Typography
				v-if="description"
				class="c-banner--description"
				:type="computedDescriptionType"
				:font-weight="computedDescriptionWeight"
			>
				{{ description }}
			</Typography>
			<div v-if="isButtonVisible" class="c-banner--buttons">
				<slot name="button" />
			</div>
		</div>
	</div>
</template>

<script>
import windowMixin from '@/mixins/windowMixin';
import Typography from '@/components/elements/core/typography/Typography';

export const bannerTypes = ['full', 'standard'];

/**
 * @displayName c-banner
 */
export default {
	name: 'Banner',
	mixins: [windowMixin],
	props: {
		/**
		 * 타입(full, standard)
		 */
		type: {
			type: String,
			default: 'full',
			validator(value) {
				const isValid = bannerTypes.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid value of Banner type`);
				}
				return isValid;
			},
		},
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		alignItems: {
			type: String,
			default: 'center',
		},
	},
	computed: {
		computedBlur() {
			return this.blur ? 'blur' : '';
		},
		computedStyleVariables() {
			return {
				'--align-items': this.alignItems,
			};
		},
		computedTitleType() {
			if (this.type === 'full') {
				return this.isMobile ? 'headline1' : 'display1';
			}
			return this.isMobile ? 'headline2' : 'headline1';
		},
		computedDescriptionType() {
			if (this.type === 'full') {
				return this.isMobile ? 'headline6' : 'headline5';
			}
			return this.isMobile ? 'body1' : 'headline6';
		},
		computedDescriptionWeight() {
			if (this.type === 'full' && this.isMobile) {
				return 'light';
			}

			return 'regular';
		},
		isButtonVisible() {
			return this.$slots['button'] && !this.isMobile;
		},
	},
	components: { Typography },
};
</script>

<style scoped lang="scss">
.c-banner {
	position: relative;
	display: grid;
	height: 464px;
	overflow: hidden;

	&.standard {
		height: 187px;
		max-width: 1108px;
		@include border-radius(20px);
	}

	&--content,
	&--background {
		grid-area: 1/-1;
		height: 100%;
	}

	&--content {
		@include flexbox();
		@include flex-direction(column);
		@include justify-content(center);
		@include align-items(var(--align-items));
		z-index: 1;
	}

	&--background {
		& > * {
			width: 100%;
			max-height: 100%;
			height: var(--height);
			object-fit: cover;
		}

		&.blur {
			position: relative;
			backdrop-filter: blur(0);

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.25);
				backdrop-filter: blur(30px);
			}
		}
	}

	&--description {
		margin-top: 8px;
	}

	&--buttons {
		margin-top: 32px;
	}

	@include pc {
		height: 382px;

		&.standard {
			height: 189px;
		}
	}
}
</style>
