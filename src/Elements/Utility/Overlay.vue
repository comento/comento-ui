<template>
	<aside class="c-application c-overlay" :class="[computedType]"></aside>
</template>

<script>
export const OverlayTypes = ['dimmer', 'content', 'bluring'];
export default {
	name: 'Overlay',
	props: {
		type: {
			type: String,
			default: 'dimmer',
			validator(value) {
				return OverlayTypes.indexOf(value) !== -1;
			},
		},
	},
	data: () => ({}),
	computed: {
		computedType() {
			return `c-overlay--type--${this.type}`;
		},
	},
};
</script>

<style scoped lang="scss">
.c-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;
	&--type--dimmer {
		background: rgba(0, 0, 0, 0.6);
	}
}
</style>
