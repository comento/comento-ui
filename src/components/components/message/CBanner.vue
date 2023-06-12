<template>
	<div class="c-application c-banner" :class="[type]" :style="computedStyleVariables">
		<div class="c-banner--background">
			<slot name="background" />
		</div>
		<div class="c-banner--content" :class="[computedAlignItems]">
			<!-- slot-based -->
			<div v-if="hasTitleSlot || hasDescriptionSlot" class="c-banner--wrapper">
				<div v-if="hasTitleSlot" class="c-banner--title">
					<slot name="title" />
				</div>
				<div v-if="hasDescriptionSlot" class="c-banner--description">
					<slot name="description" />
				</div>
			</div>

			<!-- prop-based -->
			<div v-else class="c-banner--wrapper">
				<CTypography v-if="title" class="c-banner--title" :type="computedTitleType" font-weight="semi-bold">
					{{ title }}
				</CTypography>
				<CTypography
					v-if="description"
					class="c-banner--description"
					:type="computedDescriptionType"
					:font-weight="computedDescriptionWeight"
				>
					{{ description }}
				</CTypography>
			</div>
			<div v-if="isButtonVisible" class="c-banner--buttons">
				<slot name="button" />
			</div>
		</div>
	</div>
</template>

<script>
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent, toRefs, computed } from 'vue';
import useWindowResize from '@/services/useWindowResize';

export const bannerTypes = ['full', 'standard'];

export default defineComponent({
	name: 'CBanner',
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
	setup(props, { slots }) {
		const { alignItems, type } = toRefs(props);
		const { isMobile } = useWindowResize();

		const computedStyleVariables = computed(() => {
			return {
				'--align-items': alignItems.value,
				'--justify-content': isMobileWithButton.value ? 'space-between' : 'center',
				'--wrapper-margin': isMobileWithButton.value ? '48px' : '0px',
			};
		});

		const computedTitleType = computed(() => {
			if (type.value === 'full') {
				return isMobile ? 'headline1' : 'display1';
			}
			return isMobile ? 'headline2' : 'headline1';
		});

		const computedDescriptionType = computed(() => {
			if (type.value === 'full') {
				return isMobile ? 'headline7' : 'headline5';
			}
			return isMobile ? 'body1' : 'headline7';
		});

		const computedDescriptionWeight = computed(() => {
			if (type.value === 'full' && isMobile) {
				return 'light';
			}

			return 'regular';
		});

		const isButtonVisible = computed(() => {
			return !!slots['button'];
		});

		const computedAlignItems = computed(() => {
			return `c-banner--${alignItems.value}`;
		});

		const isMobileWithButton = computed(() => {
			return isButtonVisible.value && isMobile;
		});

		const hasTitleSlot = computed(() => slots.title);
		const hasDescriptionSlot = computed(() => slots.description);

		return {
			isMobile,
			computedStyleVariables,
			computedTitleType,
			computedDescriptionType,
			computedDescriptionWeight,
			isButtonVisible,
			computedAlignItems,
			isMobileWithButton,
			hasTitleSlot,
			hasDescriptionSlot,
		};
	},
	components: { CTypography },
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
