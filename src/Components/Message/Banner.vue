<template>
	<div class="c-application c-banner" :class="[computedType]">
		<div class="c-banner--img">
			<slot name="img" />
		</div>
		<div class="c-banner--container">
			<div class="c-banner--container--title">
				<slot name="title" />
			</div>
			<div class="c-banner--container--discription mt-8">
				<slot name="discription" />
			</div>
			<div class="c-banner--container--action">
				<slot name="action" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Banner',
	props: {
		type: {
			type: String,
			default: 'standard',
			validator(value) {
				return ['full', 'standard'].indexOf(value) !== -1;
			},
		},
	},
	computed: {
		computedType() {
			return this.type;
		},
	},
};
</script>

<style scoped lang="scss">
.c-banner {
	position: relative;
	&.full {
		max-width: 1920px;
		width: 100%;
	}
	&.standard {
		max-width: 1108px;
		width: 100%;
		@include border-radius(20px);
		overflow: hidden;
	}
	&--container {
		position: absolute;
		top: 50%;
		left: 50%;
		@include transform(translate(-50%, -50%));
	}
	&--img {
		display: block;
		vertical-align: top;
		width: 100%;
	}
}
</style>
