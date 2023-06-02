<template>
	<CTypography
		v-bind="[$attrs]"
		class="user-information-name ellipsis"
		:class="[computedEllipsisClass]"
		:type="computedType"
		:font-weight="600"
	>
		<slot />
	</CTypography>
</template>

<script>
import { userInformationTypes } from '@/components/components/dataDisplay/content/CUserInformation.vue';
import CTypography, { TypographyTypes } from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CUserInformationName',
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
	components: { CTypography },
});
</script>

<style lang="scss" scoped>
.user-information-name {
	&.ellipsis {
		@include ellipsis(1);
	}
}
</style>
