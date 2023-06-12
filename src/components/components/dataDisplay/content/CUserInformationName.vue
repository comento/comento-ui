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
import { defineComponent, toRefs } from 'vue';

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
	setup(props) {
		const { type } = toRefs(props);
		const computedType = () => {
			return (
				{
					simple: 'caption1',
					normal: 'body2',
					full: 'body1',
				}[type] || type
			);
		};
		const computedEllipsisClass = () => (type.value === 'full' ? 'ellipsis' : null);
		return {
			computedType,
			computedEllipsisClass,
		};
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
