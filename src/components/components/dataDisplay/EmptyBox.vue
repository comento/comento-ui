<template>
	<article class="c-application c-empty-box">
		<div v-if="type === 'emphasized'" class="c-empty-box--emphasized-container">
			<Box :paddings="[20, 24, 20, 16]" backgroundColor="gray000">
				<slot name="contents" />
			</Box>
		</div>
		<div v-if="type === 'simple'" class="c-empty-box--simple-container">
			<Typography type="caption1">
				<slot name="contents" />
			</Typography>
		</div>
	</article>
</template>

<script>
import Box from '@/src/components/components/general/Box';
import Typography from '@/src/components/elements/core/typography/Typography';

export const Types = ['simple', 'emphasized'];

export default {
	name: 'EmptyBox',
	props: {
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
	},
	components: {
		Box,
		Typography,
	},
};
</script>

<style lang="scss" scoped>
.c-empty-box {
	display: block;
}
</style>
