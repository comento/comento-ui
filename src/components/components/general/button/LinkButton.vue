<template>
	<div class="c-application c-link-button" :class="color">
		<!-- external link -->
		<a v-if="external" v-bind="$attrs" :href="to" :target="target" v-on="$listeners">
			<Typography :type="type" :color="color">
				<slot />
			</Typography>
		</a>
		<!-- internal link -->
		<template v-else>
			<nuxt-link v-if="nuxt" :to="to" v-bind="$attrs" v-on="$listeners">
				<Typography :type="type" :color="color">
					<slot />
				</Typography>
			</nuxt-link>
			<router-link v-else :to="to" tag="a" v-bind="$attrs" v-on="$listeners">
				<Typography :type="type" :color="color">
					<slot />
				</Typography>
			</router-link>
		</template>
	</div>
</template>

<script>
import Typography, { TypographyTypes } from '@/src/components/elements/core/typography/Typography';

export const linkButtonColors = ['blue600', 'blue400'];
export const linkButtonTargets = ['_blank', '_self', '_parent', '_top'];

export default {
	name: 'LinkButton',
	inheritAttrs: false,
	props: {
		type: {
			type: String,
			default: 'body1',
			validator(value) {
				return TypographyTypes.indexOf(value) !== -1;
			},
		},
		to: {
			type: [String, Object],
			default: 'javascript:void(0);',
			validator(value) {
				const isString = typeof value === 'string';
				const isObject = typeof value === 'object' && value.constructor === Object;

				return isString || isObject;
			},
		},
		color: {
			type: String,
			default: 'blue600',
			validator(value) {
				return linkButtonColors.indexOf(value) !== -1;
			},
		},
		external: {
			type: Boolean,
			default: true,
		},
		nuxt: {
			type: Boolean,
			default: false,
		},
		// external일 때만 적용됨
		target: {
			type: String,
			default: '_self',
			validator(value) {
				return linkButtonTargets.indexOf(value) !== -1;
			},
		},
	},
	components: { Typography },
};
</script>

<style lang="scss" scoped>
.c-link-button {
	a {
		text-decoration: none;
		cursor: pointer;

		&:hover,
		&:focus {
			text-decoration: underline;
			text-decoration-color: $blue600;
		}
	}

	&.blue400 a {
		&:hover,
		&:focus {
			text-decoration-color: $blue400;
		}
	}
}
</style>
