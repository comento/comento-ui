<template>
	<div class="icon-wrapper">
		<Tooltip placement="bottom">
			<Icon :name="name" :color="color" @click="copyToClipboard(name)"></Icon>
			<template v-slot:popover>
				<div>{{ name }}</div>
			</template>
		</Tooltip>
	</div>
</template>

<script>
import Icon from '@/src/Elements/Core/Icon/Icon';
import Tooltip from '@/src/Components/Message/Tooltip';
export default {
	name: 'IconWrapper',
	props: {
		name: {
			type: String,
		},
		color: {
			type: String,
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
