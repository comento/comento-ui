<template>
	<aside ref="toast" class="c-toast c-toast_container" :class="[computedType]" :style="motionStyle">
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
		time: {
			type: Number,
			default: 4000,
		},
		motion: {
			type: String,
			default: 'slideDown',
		},
	},
	data() {
		return {
			motionStyle: null,
		};
	},
	computed: {
		computedType() {
			return this.type;
		},
	},
	watch: {},
	mounted() {
		this.setMotion();
	},
	methods: {
		setMotion() {
			const toast = this.$refs.toast;
			const bottom = toast.getBoundingClientRect().bottom;
			/*toast의 절대 위치값을 구한 후 -값 만큼 안보이도록 이동한다*/
			setTimeout(() => {
				if (this.motion === 'slideDown') {
					this.motionStyle = toast.style.bottom = -bottom + 'px';
				}
			}, this.time);
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
	padding: 13.5px 16px;
	text-align: center;
	transform: translateX(-50%);
	@include border-radius(2px);
	@include shadow4();
	@include transition(all 2s ease-in-out);
	&_message {
		margin: 0;
	}
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
