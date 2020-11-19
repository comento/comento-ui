<template>
	<div>
		<transition name="fade" mode="out-in">
			<div v-if="$slots.default" :style="indexCls()" :class="{ mask }" @click="onMask"></div>
		</transition>
		<transition :enter-active-class="alignInCls" :leave-active-class="alignOutCls">
			<div
				v-if="$slots.default"
				:class="{ closeable, [align.toLowerCase()]: true }"
				class="c-application c-drawer"
				:style="styles"
			>
				<div v-if="closeable" class="c-drawer--close-button" @click.stop="close">
					<Icon name="IconCloseLargeLine" color="gray800" />
				</div>
				<slot></slot>
			</div>
		</transition>
	</div>
</template>
<script>
import Icon from '@/src/Elements/Core/Icon/Icon';
import paddingMixin from '@/mixins/paddingMixin';
export default {
	name: 'Drawer',
	mixins: [paddingMixin],
	props: {
		align: {
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
	},
	computed: {
		alignInCls() {
			return `animated bounceIn${this.align.toLowerCase()}`;
		},
		alignOutCls() {
			return `animated bounceOut${this.align.toLowerCase()}`;
		},
		alignCloseCls() {
			return `close-${this.align.toLowerCase()}`;
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
		styles() {
			return {
				...this.$_setPadding(this.computedPaddings),
				...this.indexCls(),
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
		indexCls(offset = 0) {
			return {
				zIndex: this.computedIndex + offset,
			};
		},
	},
	components: {
		Icon,
	},
};
</script>
<style lang="scss" scoped>
@import '@/assets/style/base/animation.scss';
$--c-drawer-close-width: 14px !default;
.c-drawer {
	background: $white;
	// common
	position: fixed;
	@include shadow1();

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
		right: 25px;
		top: 25px;
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
</style>
