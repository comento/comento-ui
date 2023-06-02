<template>
	<component :is="element" class="c-application c-box" :class="classes" :style="styles" v-bind="$attrs">
		<slot />
	</component>
</template>

<script>
import { setBackgroundColor, setBorderColor } from '@/utils/get-colors';
import getPadding from '@/utils/get-padding';
import { defineComponent } from 'vue';
export const Elements = ['div', 'article'];

export default defineComponent({
	name: 'CBox',
	props: {
		hasBorder: {
			type: Boolean,
			default: false,
		},
		backgroundColor: {
			type: String,
			default: null,
		},
		borderColor: {
			type: String,
			default: null,
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
		element: {
			type: String,
			default: 'div',
		},
	},
	computed: {
		classes() {
			return {
				'c-box--has-border': this.hasBorder,
				'c-box--has-shadow': this.hasShadow,
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
				...(this.backgroundColor && setBackgroundColor(this.backgroundColor)),
				...(this.borderColor && setBorderColor(this.borderColor)),
				...getPadding(paddings),
			};
		},
	},
});
</script>

<style lang="scss" scoped>
.c-box {
	display: block;
	&--has-border {
		border: 1px solid;
		border-radius: 2px;
	}
	&--has-shadow {
		@include shadow2();
	}
}
</style>
