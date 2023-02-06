<template>
	<div class="flex align-items-center">
		<Logo name="LogoComentoTypoType" width="101px" height="16px" @click="clickLogo" />
		<ul class="ml-26 flex">
			<li
				v-for="(menu, index) in items"
				:key="`menu-${index}`"
				class="menu"
				:class="{ active: activatedMenu === menu.name, hovered: hoveredMenu === menu.name }"
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
	},
	methods: {
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
.menu {
	@include body2();
	color: $gray700;

	&.active {
		color: $blue600 !important;
		font-weight: 600;
	}
	&.hovered {
		color: $blue800;
		font-weight: 600;
	}

	&:not(:first-child) {
		margin-left: 24px;
	}
}
</style>
