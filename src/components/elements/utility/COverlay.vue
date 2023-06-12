<template>
	<aside
		v-if="show"
		class="c-application c-overlay"
		:class="[computedType]"
		:style="[computedZIndex]"
		@click="handleCloseModal"
	>
		<slot />
	</aside>
</template>

<script>
import { defineComponent, onBeforeUnmount, onMounted, computed, toRefs } from 'vue';
export const OverlayTypes = ['dimmer'];

export default defineComponent({
	name: 'COverlay',
	props: {
		show: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		/**
		 * 타입(dimmer)
		 */
		type: {
			type: String,
			default: 'dimmer',
			validator(value) {
				return OverlayTypes.indexOf(value) !== -1;
			},
		},
		zIndex: {
			type: Number,
			default: 9999,
			validator(value) {
				return typeof value === 'number';
			},
		},
		persistent: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
	},
	emits: ['close'],
	setup(props, { emit }) {
		const { type, zIndex, show, persistent } = toRefs(props);

		const computedType = computed(() => {
			return `c-overlay--type-${type.value}`;
		});

		const computedZIndex = computed(() => {
			return { zIndex: zIndex.value };
		});

		const handleCloseKeycode = e => {
			const isEsc = e.keyCode === 27;
			if (show.value && isEsc) {
				handleCloseModal();
			}
		};

		const handleCloseModal = () => {
			if (!persistent.value) {
				close();
			}
		};

		const close = () => {
			emit('close');
		};

		onMounted(() => {
			document.addEventListener('keydown', handleCloseKeycode);
		});

		onBeforeUnmount(() => {
			document.removeEventListener('keydown', handleCloseKeycode);
		});

		return {
			computedType,
			computedZIndex,
			handleCloseKeycode,
			handleCloseModal,
			close,
		};
	},
});
</script>

<style lang="scss" scoped>
.c-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	&--type-dimmer {
		background: rgba(0, 0, 0, 0.6);
	}
}
</style>
