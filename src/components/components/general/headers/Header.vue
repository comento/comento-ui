<template>
	<div class="c-header">
		<Logo
			:color="isTransparent ? 'white' : 'primary'"
			name="LogoComentoTypoType"
			width="101px"
			height="16px"
			@click="clickLogo"
		/>
		<ul class="ml-26 flex">
			<li
				v-for="(menu, index) in items"
				:key="`menu-${index}`"
				class="c-header-menu"
				:class="getHeaderNavClass(menu.name)"
				@mouseenter="onMouseEntered(menu.name)"
			>
				<!--    nuxt 유무에 따라 핸들링          -->
				<nuxt-link v-if="nuxt" v-bind="$attrs" :to="menu.path" v-on="$listeners">{{ menu.name }}</nuxt-link>
				<router-link v-else v-bind="$attrs" :to="menu.path" v-on="$listeners">{{ menu.name }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import Logo from '@/components/elements/core/logo/Logo';

export default {
	name: 'Header',
	props: {
		activatedMenu: {
			type: String,
			default: '',
		},
		hoveredMenu: {
			type: String,
			default: '',
		},
		nuxt: {
			type: Boolean,
			default: false,
		},
		items: {
			type: Array,
			default: () => [],
		},
		isTransparent: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		getHeaderNavClass(name) {
			return {
				active: this.activatedMenu === name,
				hovered: this.hoveredMenu === name,
				transparent: this.isTransparent,
			};
		},
		onMouseEntered(name) {
			this.$emit('update-nav', name);
		},
		clickLogo() {
			this.$emit('click-logo');
		},
	},
	components: { Logo },
};
</script>

<style lang="scss" scoped>
.c-header {
	@include flexbox();
	@include align-items(center);

	&-menu {
		list-style: none;
		color: $gray700;
		@include body2();

		&.active {
			color: $blue600 !important;
			font-weight: 600;

			&.transparent {
				color: $white !important;
			}
		}
		&.hovered {
			color: $blue800;
			font-weight: 600;
			&.transparent {
				color: $white !important;
			}
		}

		&:not(:first-child) {
			margin-left: 24px;
		}
	}
}
</style>
