<template>
	<div v-if="show" class="c-application" @click="handleCloseModal">
		<Overlay :show="show" :z-index="9998" :persistent="persistent" @close="close">
			<div class="c-modal" :style="[computedStyle]" @click.stop>
				<div v-if="showCloseButton" class="c-modal--close-button" @click="close">
					<Icon name="IconCloseXLargeLine" color="gray400" />
				</div>
				<slot />
			</div>
		</Overlay>
	</div>
</template>

<script>
import scrollMixin from '@/mixins/scrollMixin';
import Icon from '@/src/Elements/Core/Icon/Icon';
import Overlay from '@/src/Elements/Utility/Overlay';

export default {
	name: 'Modal',
	mixins: [scrollMixin],
	props: {
		show: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		showCloseButton: {
			type: Boolean,
			default: true,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		maxWidth: {
			type: String,
			validator(value) {
				return typeof value === 'string';
			},
		},
		persistent: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		maxHeight: {
			type: String,
			validator(value) {
				return typeof value === 'string';
			},
		},
	},
	computed: {
		computedStyle() {
			return {
				'max-width': !this.isMobile && this.maxWidth,
				'max-height': this.maxHeight,
			};
		},
	},
	watch: {
		show() {
			this.$_handleNotScroll(this.show);
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
	components: { Overlay, Icon },
};
</script>

<style lang="scss" scoped>
.c-modal {
	max-width: 90%;
	margin: 0 auto;
	background-color: $white;
	border-radius: 4px;
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
