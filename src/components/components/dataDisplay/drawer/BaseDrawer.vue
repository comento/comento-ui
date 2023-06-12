<template>
	<div class="c-application c-drawer">
		<transition name="fade" mode="out-in">
			<div v-if="$slots.default" :style="indexClass" :class="{ mask }" @click="onMask" />
		</transition>
		<transition :enter-active-class="directionInClass" :leave-active-class="directionOutClass">
			<div
				v-if="$slots.default"
				:class="{ closeable, [direction.toLowerCase()]: true }"
				class="c-drawer"
				:style="styles"
			>
				<div v-if="closeable" class="c-drawer--close-button" @click.stop="close">
					<CIcon class="c-pointer" name="IconCloseLargeLine" color="gray400" />
				</div>
				<slot />
			</div>
		</transition>
	</div>
</template>
<script>
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import getPadding from '@/utils/get-padding';
import { defineComponent, computed, toRefs } from 'vue';

export default defineComponent({
	name: 'BaseDrawer',
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
	emits: ['close'],
	setup(props, { emit }) {
		const { direction, paddings, zIndex, maskClosable, maxHeight } = toRefs(props);
		const directionInClass = computed(() => `animated bounceIn${direction.value.toLowerCase()}`);
		const directionOutClass = computed(() => `animated bounceOut${direction.value.toLowerCase()}`);
		const directionCloseClass = computed(() => `close-${direction.value.toLowerCase()}`);
		const computedPaddings = computed(() => (paddings.value ? paddings : [0, 0, 0, 0]));
		const computedMaxHeight = computed(() => {
			return { 'max-height': maxHeight };
		});
		const indexClass = (offset = 0) => {
			return { zIndex: zIndex.value + offset };
		};
		const styles = computed(() => {
			return {
				...getPadding(computedPaddings),
				...indexClass(),
				...computedMaxHeight,
			};
		});

		const close = () => emit('close');
		const onMask = () => (maskClosable.value ? close() : false);

		return {
			directionInClass,
			directionOutClass,
			directionCloseClass,
			computedPaddings,
			computedMaxHeight,
			styles,
			indexClass,
			close,
			onMask,
		};
	},
	components: {
		CIcon,
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
