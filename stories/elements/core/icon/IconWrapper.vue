<template>
	<div class="icon-wrapper">
		<Tooltip placement="bottom">
			<component :is="component" :name="name" :color="color" :rotate="rotate" @click="copyToClipboard(name)">
				<slot />
			</component>
			<template v-slot:popover>
				<div>{{ name }}</div>
			</template>
		</Tooltip>
	</div>
</template>

<script>
import AnimationIcon from '@/components/elements/core/icon/CAnimationIcon';
import EtcIcon from '@/components/elements/core/icon/CEtcIcon';
import Icon from '@/components/elements/core/icon/CIcon';
import Tooltip from '@/components/components/message/CTooltip';
import copyToClipboard from '@/utils/copy-to-clipboard';

export default {
	name: 'IconWrapper',
	props: {
		component: {
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
