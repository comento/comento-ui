<template>
	<div class="c-application c-banner" :class="[computedType]" :style="computedHeight">
		<div class="c-banner--background" :class="[computedBlur]">
			<slot name="background" />
		</div>
		<div class="c-banner--content">
			<slot />
		</div>
	</div>
</template>

<script>
export const bannerTypes = ['full', 'standard'];

/**
 * @displayName c-banner
 */
export default {
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
		blur: {
			type: Boolean,
			default: false,
		},
		height: {
			type: String,
		},
	},
	computed: {
		computedType() {
			return this.type;
		},
		computedBlur() {
			return this.blur ? 'blur' : '';
		},
		computedHeight() {
			return {
				'--height': this.height,
			};
		},
	},
};
</script>

<style scoped lang="scss">
.c-banner {
	position: relative;
	display: grid;
	height: var(--height);

	&.standard {
		max-width: 1108px;
		overflow: hidden;
		@include border-radius(20px);
	}

	&--content,
	&--background {
		grid-area: 1/-1;
	}

	&--background {
		height: 100%;

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
}
</style>
