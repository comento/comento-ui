import { onMounted, onBeforeUnmount, readonly, ref } from 'vue';

export default function useWindowResize() {
	let isMobile = ref(false);
	function resize() {
		isMobile = window.innerWidth <= 768;
	}

	onMounted(() => {
		resize();
		window.addEventListener('resize', resize);
	});

	onBeforeUnmount(() => {
		if (typeof window === 'undefined') {
			return;
		}
		window.removeEventListener('resize', resize);
	});

	return { isMobile: readonly(isMobile) };
}
