<template>
	<div class="c-application c-list-item--container" tabindex="0" :class="size" v-on="$listeners">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'ListItem',
	props: {
		size: {
			type: String,
			default: 'medium',
			validator(value) {
				return ['small', 'medium', 'large'].indexOf(value) !== -1;
			},
		},
	},
};
</script>

<style lang="scss" scoped>
.c-list-item {
	&--container {
		padding: 8px 6px;
		cursor: pointer;
		outline: none;

		&:hover,
		&:focus {
			background: $gray100;
		}

		&.small {
			padding: 6px 4px;
		}

		&.large {
			padding: 12px;
		}
	}
}
</style>
