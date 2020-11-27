<template>
	<div class="c-dropdown--container">
		<!-- 드롭다운 아이템 영역 -->
		<div class="c-dropdown--item-wrapper">
			<slot />
		</div>

		<!-- 드롭다운 리스트 영역 -->
		<div v-if="$slots['content']" class="c-dropdown--list-wrapper" :style="computedStyle">
			<slot name="content" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Dropdown',
	props: {
		maxHeight: {
			type: String,
			default: 'auto',
		},
	},
	computed: {
		computedStyle() {
			return {
				maxHeight: this.maxHeight !== 'auto' && this.maxHeight,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.c-dropdown {
	&--container {
		position: relative;
	}

	&--list-wrapper {
		position: absolute;
		width: 100%;
		padding: 8px 12px;
		background: $white;
		@include shadow4();
		overflow-y: auto;
		box-sizing: border-box;
	}
}
</style>
