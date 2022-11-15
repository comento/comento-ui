<template>
	<div class="user-information-company">
		<Typography :type="computedType" color="gray500" class="ellipsis">
			<slot />
		</Typography>
		<Icon name="IconCheckRoundSmallFill" color="primary" class="ml-2" />
	</div>
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
