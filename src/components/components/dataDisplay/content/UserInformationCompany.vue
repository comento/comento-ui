<template>
	<Typography :type="computedType" color="gray500" class="user-information-company">
		<slot />
		<Icon name="IconCheckRoundSmallFill" color="primary" class="ml-2" />
	</Typography>
</template>

<script>
import Typography from '@/components/elements/core/typography/Typography';
import Icon from '@/components/elements/core/icon/Icon';

export default {
	name: 'UserInformationCompany',
	props: {
		type: String,
	},
	computed: {
		computedType() {
			return (
				{
					full: 'body2',
					normal: 'body2',
					simple: 'caption1',
				}[this.type] || 'body2'
			);
		},
		computedEllipsisClass() {
			return this.type === 'full' ? 'ellipsis' : null;
		},
	},
	components: { Typography, Icon },
};
</script>

<style lang="scss" scoped>
.user-information-company {
	@include flexbox();
	@include align-items(center);
	&.ellipsis {
		@include ellipsis(1);
	}
}
</style>
