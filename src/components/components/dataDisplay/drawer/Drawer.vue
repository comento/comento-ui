<template>
	<div class="c-application c-drawer">
		<transition name="fade" mode="out-in">
			<div v-if="$slots.default" :style="indexClass()" :class="{ mask }" @click="onMask" />
		</transition>
		<transition :enter-active-class="directionInClass" :leave-active-class="directionOutClass">
			<div
				v-if="$slots.default"
				:class="{ closeable, [direction.toLowerCase()]: true }"
				class="c-drawer"
				:style="styles"
			>
				<div v-if="closeable" class="c-drawer--close-button" @click.stop="close">
					<Icon class="c-pointer" name="IconCloseLargeLine" color="gray400" />
				</div>
				<slot />
			</div>
		</transition>
	</div>
</template>
<script>
import Icon from '@/components/elements/core/icon/Icon.vue';
import getPadding from '@/utils/get-padding';
import scrollMixin from '@/mixins/scrollMixin';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Drawer',
	mixins: [scrollMixin],
	props: {
		direction: {
			type: String,
			default: 'right',
			validator(value) {
				return ['left', 'up', 'right', 'down'].indexOf(value) !== -1;
			},
		},
		closeable: {
			type: Boolean,
			default: true,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		mask: {
			type: Boolean,
			default: true,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		maskClosable: {
			type: Boolean,
			default: false,
			validator(value) {
				return typeof value === 'boolean';
			},
		},
		paddings: {
			type: Array,
			default() {
				return null;
			},
		},
		zIndex: {
			type: Number,
			default() {
				return 1000;
			},
			validator(value) {
				return typeof value === 'number';
			},
		},
		maxHeight: {
			type: String,
		},
	},
	computed: {
		directionInClass() {
			return `animated bounceIn${this.direction.toLowerCase()}`;
		},
		directionOutClass() {
			return `animated bounceOut${this.direction.toLowerCase()}`;
		},
		directionCloseClass() {
			return `close-${this.direction.toLowerCase()}`;
		},
		computedIndex() {
			return this.zIndex;
		},
		computedPaddings() {
			if (this.paddings) {
				return this.paddings;
			} else {
				return [0, 0, 0, 0];
			}
		},
		computedMaxHeight() {
			return { 'max-height': this.maxHeight };
		},
		styles() {
			return {
				...getPadding(this.computedPaddings),
				...this.indexClass(),
				...this.computedMaxHeight,
			};
		},
	},
	methods: {
		close() {
			this.$emit('close');
		},
		onMask() {
			if (this.maskClosable) {
				this.close();
			}
		},
		indexClass(offset = 0) {
			return {
				zIndex: this.computedIndex + offset,
			};
		},
	},
	components: {
		Icon,
	},
});
</script>
<style lang="scss" scoped>
@import '@/assets/style/base/animation.scss';

$--c-drawer-close-width: 14px !default;
.c-drawer {
	background: $white;
	// common
	position: fixed;
	@include shadow1();
	min-height: 266px;

	&.closeable {
		padding-top: 25px;
	}
	&.left {
		left: 0;
		top: 0;
		bottom: 0;
	}

	&.right {
		right: 0;
		top: 0;
		bottom: 0;
	}
	&.up {
		top: 0;
		left: 0;
		right: 0;
	}

	&.down {
		bottom: 0;
		left: 0;
		right: 0;
	}

	&--close-button {
		position: absolute;
		right: 20px;
		top: 20px;
		// z-index: 100;
		color: currentColor;
		font-size: 20px;
		cursor: pointer;
		user-select: none;
		.close {
			margin: 60px 0 0 5px;
			position: absolute;
		}
	}
}
.mask {
	position: fixed;
	background: $black;
	opacity: 0.6;
	width: 100%;
	left: 0;
	top: 0;
	height: 100%;
}

// mask interaction
.fade-enter-active {
	transition: opacity 0.2s;
}

.fade-leave-active {
	transition: opacity 0.35s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
