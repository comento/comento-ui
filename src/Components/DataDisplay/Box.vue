<template>
	<div class="c-box_component" :class="[computedBorder, computedBorderColor, computedBg]">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'Box',
	props: {
		border: {
			type: Boolean,
			default: false,
		},
		boxBg: {
			type: String,
			default: 'white',
		},
		/* boxBorderColor
		 * '기본색상' : gray100
		 * 기타 생성되면 추가 예정
		 * */
		boxBorderColor: {
			type: String,
			default: 'gray100',
		},
	},
	computed: {
		computedBorder() {
			if (this.border) {
				return `${this.border}`;
			} else {
				return null;
			}
		},
		computedBg() {
			if (this.boxBg !== 'white') {
				return `box_bg_${this.boxBg}`;
			} else {
				return null;
			}
		},
		computedBorderColor() {
			if (this.boxType !== 'default') {
				return `box_border_${this.boxBorderColor}`;
			} else {
				return null;
			}
		},
	},
};
</script>

<style scoped lang="scss">
.box_component {
	/*기본 패딩은 pc, mobile 16px*/
	padding: 16px;
	background: $white;
	&.border {
		border: 1px solid;
		border-radius: 2px;
	}
	&.box_border_gray100 {
		border-color: $gray100;
	}
	/*배경색상 있을 경우 추가*/

	@include pc {
		padding: 16px 20px;
	}
}
</style>
