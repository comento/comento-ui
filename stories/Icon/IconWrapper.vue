<template>
	<div class="icon-wrapper">
		<Tooltip placement="bottom">
			<component :is="componentName" :name="name" :color="color" :rotate="rotate" @click="copyToClipboard(name)">
				<slot />
			</component>
			<template v-slot:popover>
				<div>{{ name }}</div>
			</template>
		</Tooltip>
	</div>
</template>

<script>
import AnimationIcon from '@/src/Elements/Core/Icon/AnimationIcon';
import EtcIcon from '@/src/Elements/Core/Icon/EtcIcon';
import Icon from '@/src/Elements/Core/Icon/Icon';
import Tooltip from '@/src/Components/Message/Tooltip';
import copyToClipboard from '@/utils/copy-to-clipboard';

export default {
	name: 'IconWrapper',
	props: {
		componentName: {
			type: String,
			validator(value) {
				return ['AnimationIcon', 'EtcIcon', 'Icon'].indexOf(value) !== -1;
			},
		},
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
		AnimationIcon,
		EtcIcon,
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
