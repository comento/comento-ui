<template>
	<div class="c-application c-banner" :class="[type]" :style="computedStyleVariables">
		<div class="c-banner--background">
			<slot name="background" />
		</div>
		<div class="c-banner--content" :class="[computedAlignItems]">
			<!-- slot-based -->
			<div v-if="$slots.title || $slots.description" class="c-banner--wrapper">
				<div v-if="$slots.title" class="c-banner--title">
					<slot name="title" />
				</div>
				<div v-if="$slots.description" class="c-banner--description">
					<slot name="description" />
				</div>
			</div>

			<!-- prop-based -->
			<div v-else class="c-banner--wrapper">
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
			</div>
			<div v-if="isButtonVisible" class="c-banner--buttons">
				<slot name="button" />
			</div>
		</div>
	</div>
</template>

<script>
import Typography from '@/components/elements/core/typography/Typography';
import { defineComponent } from 'vue';
import useWindowResize from '@/services/useWindowResize';

export const bannerTypes = ['full', 'standard'];

/**
 * @displayName c-banner
 */
export default defineComponent({
	name: 'Banner',
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
	setup() {
		const { isMobile } = useWindowResize();
		return { isMobile };
	},
	computed: {
		computedStyleVariables() {
			return {
				'--align-items': this.alignItems,
				'--justify-content': this.isMobileWithButton ? 'space-between' : 'center',
				'--wrapper-margin': this.isMobileWithButton ? '48px' : '0px',
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
				return this.isMobile ? 'headline7' : 'headline5';
			}
			return this.isMobile ? 'body1' : 'headline7';
		},
		computedDescriptionWeight() {
			if (this.type === 'full' && this.isMobile) {
				return 'light';
			}

			return 'regular';
		},
		isButtonVisible() {
			return this.$slots['button'];
		},
		computedAlignItems() {
			return `c-banner--${this.alignItems}`;
		},
		isMobileWithButton() {
			return this.isButtonVisible && this.isMobile;
		},
	},
	components: { Typography },
});
</script>

<style lang="scss" scoped>
.c-banner {
	position: relative;
	display: grid;
	height: 464px;

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
		@include align-items(var(--align-items));
		@include justify-content(var(--justify-content));
		z-index: 1;
	}

	&--wrapper {
		@include flexbox();
		@include flex-direction(column);
		@include align-items(var(--align-items));
		margin-top: var(--wrapper-margin);
	}

	&--background {
		& > * {
			width: 100%;
			max-height: 100%;
			height: var(--height);
			object-fit: cover;
		}
	}

	&--description {
		margin-top: 8px;
	}

	&--buttons {
		margin-bottom: 20px;
		width: 100%;
	}

	@include pc {
		height: 390px;

		&.standard {
			height: 189px;
		}

		&--buttons {
			width: inherit;
			margin-top: 32px;
			margin-bottom: 0px;
		}
	}
}
</style>
