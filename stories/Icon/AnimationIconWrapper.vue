<template>
	<div class="animation-icon-wrapper">
		<Tooltip placement="bottom">
			<AnimationIcon :name="name" :color="color" :rotate="rotate" @click="copyToClipboard(name)" />
			<template v-slot:popover>
				<div>{{ name }}</div>
			</template>
		</Tooltip>
	</div>
</template>

<script>
import Tooltip from '@/src/Components/Message/Tooltip';
import AnimationIcon from '@/src/Elements/Core/Icon/AnimationIcon';

export default {
	name: 'AnimationIconWrapper',
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
		copyToClipboard(text) {
			let textarea = document.createElement('textarea');
			textarea.value = text;
			document.body.appendChild(textarea);
			textarea.select();
			textarea.setSelectionRange(0, 9999);
			document.execCommand('copy');
			document.body.removeChild(textarea);
		},
	},
	components: {
		AnimationIcon,
		Tooltip,
	},
};
</script>

<style lang="scss" scoped>
.animation-icon-wrapper {
	display: flex;
	width: 24px;
	height: 24px;
	margin-right: 24px;
	margin-bottom: 24px;
	align-items: center;
	justify-content: center;
}
</style>
