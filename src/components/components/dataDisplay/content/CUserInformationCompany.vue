<template>
	<div class="user-information-company">
		<CTypography :type="computedType" color="gray500" class="ellipsis">
			<slot />
		</CTypography>
		<CIcon name="IconCheckRoundXSmallFill" color="primary" class="ml-2" />
	</div>
</template>

<script>
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import { defineComponent, computed, toRefs } from 'vue';

export default defineComponent({
	name: 'CUserInformationCompany',
	props: {
		type: String,
	},
	setup(props) {
		const { type } = toRefs(props);
		const computedType = computed(() =>
			String({ full: 'body2', normal: 'body2', simple: 'caption1' }[type] || 'body2'),
		);
		const computedEllipsisClass = () => (type.value === 'full' ? 'ellipsis' : null);
		return { computedType, computedEllipsisClass };
	},
	computed: {},
	components: { CTypography, CIcon },
});
</script>

<style lang="scss" scoped>
.user-information-company {
	@include flexbox();
	@include align-items(center);
}
.ellipsis {
	@include mobile {
		@include ellipsis(1);
		&.c-body2 {
			max-width: 120px;
		}
		&.c-caption1 {
			max-width: 104px;
		}
	}
}
</style>
