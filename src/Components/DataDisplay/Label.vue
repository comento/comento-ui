<template>
	<p class="c-application c-label" :class="[computedType]">
		<slot />
	</p>
</template>

<script>
export const labelTypes = ['dataEntry', 'dataDisplay'];
export default {
	name: 'Label',
	props: {
		type: {
			type: String,
			default: 'dataEntry',
			validator(value) {
				return labelTypes.indexOf(value) !== -1;
			},
		},
	},
	computed: {
		computedType() {
			return `${this.type}`;
		},
	},
};
</script>

<style scoped lang="scss">
.c-label {
	display: inline-block;
	&.dataEntry {
		@include body2();
		color: $gray600;
	}
	&.dataDisplay {
		@include caption1();
		color: $gray300;
	}
}
</style>
