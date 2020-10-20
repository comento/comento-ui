<template>
	<aside class="c-toast c-toast_container" :class="[computedType]">
		<Typography class="c-toast_message" element="p" type="body2">
			<slot />
		</Typography>
	</aside>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'Toast',
	props: {
		type: {
			type: String,
			default: 'information',
			validator(value) {
				return ['information', 'alert', 'success'].indexOf(value) !== -1;
			},
		},
	},
	computed: {
		computedType() {
			return this.type;
		},
	},
	methods: {
		mapIconNameFromSize(size) {
			const iconSet = {
				'x-small': 'IconExclamationSmallFill',
				small: 'IconExclamationMediumLine',
				medium: 'IconExclamationLargeLine',
			};
			return iconSet[size];
		},
	},
	components: {
		Typography,
	},
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/
.c-toast {
	position: fixed;
	bottom: 16px;
	left: 50%;
	transform: translateX(-50%);
	padding: 0 16px;
	@include border-radius(2px);
	&.information {
		background: $gray900;
		color: $white;
	}
	&.alert {
		background: $red600;
		color: $white;
	}
	&.success {
		background: $blue600;
		color: $white;
	}
	@include pc {
		bottom: 32px;
	}
}
</style>
