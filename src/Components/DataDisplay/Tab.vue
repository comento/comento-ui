<template>
	<div class="tab_menu_wrapper">
		<div class="tab_menu_container">
			<button
				v-for="(item, index) in items"
				:key="`tab-item-${item}`"
				class="tab_menu_button"
				:class="{ active: index === selectedNo }"
				@click="setSelectedNo(index)"
			>
				{{ item }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tab',
	props: {
		items: {
			type: Array,
			default() {
				return ['item1', 'item2', 'item3', 'item4', 'item5'];
			},
		},
	},
	data() {
		return {
			selectedNo: 0,
		};
	},
	methods: {
		setSelectedNo(index) {
			this.selectedNo = index;
			this.$emit('changeSelectedNo', index);
		},
	},
};
</script>

<style scoped lang="scss">
button {
	background: none;
	border: 0;
	outline: 0;
	cursor: pointer;
	color: $gray800;
}
.tab_menu {
	&_wrapper {
		background-color: $white;
	}
	&_container {
		display: flex;
		justify-content: space-evenly;
		border-bottom: 1px solid $gray200;
	}
	&_button {
		width: 100%;
		height: 36px;
		transition: 0.3s all;
		&.active {
			border-bottom: 2px solid $gray600;
			font-weight: 700;
			color: $gray800;
		}
		&:hover {
			background-color: $gray100;
		}
	}
}
</style>
