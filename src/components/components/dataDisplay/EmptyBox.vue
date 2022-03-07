<template>
	<article class="c-application c-empty-box" :class="type === 'emphasized' && 'full'">
		<div v-if="type === 'emphasized'" class="c-empty-box--emphasized-container">
			<Box :paddings="[40, 16, 40, 16]" backgroundColor="gray000">
				<Typography type="body1" color="gray700" align="center" :font-weight="600">
					<slot name="title" />
				</Typography>
				<Typography class="mt-4" type="body2" color="gray500" align="center">
					<slot name="contents" />
				</Typography>
				<a v-if="external" :href="to">
					<Button
						v-if="$slots['link']"
						class="c-empty-box--emphasized-button"
						color="light-primary"
						size="large"
					>
						<slot name="link" />
					</Button>
				</a>
				<router-link v-else :to="to">
					<Button
						v-if="$slots['link']"
						class="c-empty-box--emphasized-button"
						color="light-primary"
						size="large"
					>
						<slot name="link" />
					</Button>
				</router-link>
			</Box>
		</div>
		<div v-if="type === 'simple'" class="c-empty-box--simple-container">
			<Typography type="caption1" color="gray600" align="center" font-weight="bold">
				<slot name="title" />
			</Typography>
			<Typography type="caption1" color="gray600" align="center" font-weight="bold">
				<slot name="contents" />
			</Typography>
			<LinkButton
				v-if="$slots['link']"
				:to="to"
				:target="target"
				class="c-empty-box--link"
				type="caption1"
				align="center"
				:external="external"
			>
				<slot name="link" />
			</LinkButton>
		</div>
	</article>
</template>

<script>
import Box from '@/components/components/general/Box';
import Typography from '@/components/elements/core/typography/Typography';
import LinkButton from '@/components/components/general/button/LinkButton';
import Button from '@/components/components/general/button/Button';

export const Types = ['simple', 'emphasized'];

/**
 * @displayName c-empty-box
 */
export default {
	name: 'EmptyBox',
	props: {
		/**
		 * 타입(simple, emphasized)
		 */
		type: {
			type: String,
			default: 'simple',
			validator(value) {
				const isValid = Types.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the empty box type`);
				}
				return isValid;
			},
		},
		to: {
			type: String,
		},
		target: {
			type: String,
			default: '_self',
		},
		external: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		Box,
		Typography,
		LinkButton,
		Button,
	},
};
</script>

<style lang="scss" scoped>
.c-empty-box {
	display: block;

	&.full {
		width: 100%;
	}

	&--link {
		margin-top: 14px;
	}

	&--emphasized {
		padding: 40px 16px;
		&-button {
			margin: 16px auto auto;
		}
	}

	& a {
		text-decoration: none;
	}
}
</style>
