<template>
	<Typography
		v-bind="[$attrs]"
		class="user-information-name ellipsis"
		:class="[computedEllipsisClass]"
		:type="computedType"
		:font-weight="600"
	>
		<slot />
	</Typography>
</template>

<script>
/**
 * @displayName c-user-information-name
 */
import { userInformationTypes } from '@/components/components/dataDisplay/content/UserInformation.vue';
import Typography, { TypographyTypes } from '@/components/elements/core/typography/Typography.vue';

export default {
	name: 'UserInformationName',
	props: {
		type: {
			type: String,
			default: 'full',
			validator(value) {
				return [...userInformationTypes, ...TypographyTypes].includes(value);
			},
		},
	},
	computed: {
		computedType() {
			return (
				{
					simple: 'caption1',
					normal: 'body2',
					full: 'body1',
				}[this.type] || this.type
			);
		},
		computedEllipsisClass() {
			return this.type === 'full' ? 'ellipsis' : null;
		},
	},
	components: { Typography },
};
</script>

<style lang="scss" scoped>
.user-information-name {
	&.ellipsis {
		@include ellipsis(1);
	}
}
</style>
