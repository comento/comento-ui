<template>
	<div class="icon-wrapper">
		<Tooltip placement="bottom">
			<Icon :name="name" :color="color" :rotate="rotate" @click="copyToClipboard(name)" />
			<template v-slot:popover>
				<div>{{ name }}</div>
			</template>
		</Tooltip>
	</div>
</template>

<script>
import Icon from '@/src/Elements/Core/Icon/Icon';
import Tooltip from '@/src/Components/Message/Tooltip';
import copyToClipboard from '@/utils/copy-to-clipboard';

export default {
	name: 'IconWrapper',
	props: {
		name: {
			type: String,
		},
		color: {
			type: String,
		},
		rotate: {
			type: Number,
		},
	},
	methods: {
		copyToClipboard,
	},
	components: {
		Icon,
		Tooltip,
	},
};
</script>

<style lang="scss" scoped>
.icon-wrapper {
	display: flex;
	width: 24px;
	height: 24px;
	margin-right: 24px;
	margin-bottom: 24px;
	align-items: center;
	justify-content: center;
}
</style>
