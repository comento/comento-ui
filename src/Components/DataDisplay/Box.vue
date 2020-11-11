<template>
	<div class="c-box" :class="classes" :style="styles">
		<slot />
	</div>
</template>

<script>
import colorMixin from '../../../mixins/colorMixin';
import paddingMixin from '../../../mixins/paddingMixin';

export default {
	name: 'Box',
	mixins: [colorMixin, paddingMixin],
	props: {
		hasBorder: {
			type: Boolean,
			default: false,
		},
		backgroundColor: {
			type: String,
			default: 'white',
		},
		borderColor: {
			type: String,
		},
		paddings: {
			type: Array,
			default() {
				return null;
			},
		},
		hasShadow: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		classes() {
			return {
				'c-box--has-border': this.hasBorder,
			};
		},
		styles() {
			let paddings;
			if (!this.paddings) {
				if (this.isMobile) {
					paddings = [16, 16, 16, 16];
				} else {
					paddings = [16, 20, 16, 20];
				}
			} else {
				paddings = this.paddings;
			}
			return {
				...(this.backgroundColor && this.$_setBackgroundColor(this.backgroundColor)),
				...(this.borderColor && this.$_setBorderColor(this.borderColor)),
				...this.$_setPadding(paddings),
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.c-box {
	display: inline-block;
	&--has-border {
		border: 1px solid;
		border-radius: 2px;
	}
	&--has-shadow {
		@include shadow2();
	}
}
</style>
