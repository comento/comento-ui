<template>
	<div class="icon-wrapper">
		<CTooltip placement="bottom">
			<component :is="component" :name="name" :color="color" :rotate="rotate" @click="copyToClipboard(name)">
				<slot />
			</component>
			<template #popover>
				<div>{{ name }}</div>
			</template>
		</CTooltip>
	</div>
</template>

<script>
import CAnimationIcon from '@/components/elements/core/icon/CAnimationIcon.vue';
import EtcIcon from '@/components/elements/core/icon/EtcIcon.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import CTooltip from '@/components/components/message/CTooltip.vue';
import copyToClipboard from '@/utils/copy-to-clipboard';
import { defineComponent } from 'vue';

export default defineComponent({
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
		CAnimationIcon,
		EtcIcon,
		CIcon,
		CTooltip,
	},
});
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
