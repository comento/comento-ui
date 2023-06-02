<template>
	<div v-if="show" class="c-application" @click="handleCloseModal">
		<COverlay :show="show" :z-index="9998" :persistent="persistent" @close="close">
			<div class="c-modal" :style="[computedStyle]" @click.stop>
				<div v-if="showCloseButton" class="c-modal--close-button" @click="close">
					<CIcon name="IconCloseXLargeLine" color="gray400" class="c-pointer" />
				</div>
				<slot />
			</div>
		</COverlay>
	</div>
</template>

<script>
import { toggleNotScroll } from '@/utils/not-scroll';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import COverlay from '@/components/elements/utility/COverlay.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CModal',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		showCloseButton: {
			type: Boolean,
			default: true,
		},
		maxWidth: {
			type: String,
		},
		persistent: {
			type: Boolean,
			default: false,
		},
		maxHeight: {
			type: String,
		},
		width: {
			type: String,
			default: 'auto',
		},
	},
	computed: {
		computedStyle() {
			return {
				maxWidth: !this.isMobile && this.maxWidth,
				maxHeight: this.maxHeight,
				minHeight: this.minHeight,
				width: this.width,
			};
		},
	},
	watch: {
		show() {
			toggleNotScroll(this.show);
		},
	},
	methods: {
		handleCloseModal() {
			if (!this.persistent) {
				this.close();
			}
		},
		close() {
			this.$emit('close');
		},
	},
	components: { COverlay, CIcon },
});
</script>

<style lang="scss" scoped>
.c-modal {
	max-width: 90%;
	margin: 0 auto;
	background-color: $white;
	@include border-radius(10px);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	box-sizing: border-box;

	@include pc {
		min-width: 337px;
		max-width: 420px;
	}

	&--close-button {
		position: absolute;
		top: 12px;
		right: 12px;

		@include pc {
			top: 0;
			right: -38px;
		}
	}
}
</style>
