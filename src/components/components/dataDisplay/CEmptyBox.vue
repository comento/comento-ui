<template>
	<article class="c-application c-empty-box">
		<div v-if="type === 'emphasized'" class="c-empty-box--emphasized-container">
			<CBox :paddings="[20, 24, 20, 16]" backgroundColor="gray000">
				<slot name="contents" />
			</CBox>
		</div>
		<div v-if="type === 'simple'" class="c-empty-box--simple-container">
			<CTypography type="caption1">
				<slot name="contents" />
			</CTypography>
		</div>
	</article>
</template>

<script>
import CBox from '@/components/components/general/CBox';
import CTypography from '@/components/elements/core/typography/CTypography';

export const Types = ['simple', 'emphasized'];

export default {
	name: 'CEmptyBox',
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
	},
	components: {
		CBox,
		CTypography,
	},
};
</script>

<style lang="scss" scoped>
.c-empty-box {
	display: block;
}
</style>
