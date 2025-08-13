<template>
	<Popover :placement="placement" class="reply-actions-popover">
		<IconButton icon-name="IconThreeDotSmallFill" color="gray400" />
		<template v-slot:popover>
			<List size="large">
				<ListItem size="large">
					<Typography type="body2" color="gray800" :font-weight="400" class="flex flex-row align-center">
						<Icon name="IconSirenSmallLine" color="gray700" class="mr-10" />
						신고하기
					</Typography>
				</ListItem>
				<Divider color="gray100" class="my-6" />
				<ListItem size="large">
					<Typography type="body2" color="gray800" :font-weight="400" class="flex flex-row align-center">
						<Icon name="IconBlockSmallLine" color="gray700" class="mr-10" />
						차단하기
					</Typography>
				</ListItem>
			</List>
		</template>
	</Popover>
</template>

<script>
import IconButton from '@/components/button/IconButton.vue';
import Popover from '@/components/popover/Popover.vue';
import List from '@/components/list/list/List.vue';
import ListItem from '@/components/list/list/ListItem.vue';
import Typography from '@/components/typography/Typography.vue';
import Icon from '@/components/icon/Icon.vue';
import Divider from '@/components/divider/Divider.vue';

export default {
	name: 'ReplyActionsExample',
	props: {
		placement: {
			type: String,
			default: 'bottom-left',
		},
	},
	components: {
		Divider,
		Icon,
		Typography,
		ListItem,
		List,
		Popover,
		IconButton,
	},
};
</script>

<style lang="scss" scoped>
.reply-actions-popover::v-deep {
	.c-popover {
		.c-popover--inner {
			@include border-radius(10px);
			@include shadow4();
		}
		.c-popover--arrow {
			display: none;
		}
	}
}
</style>
