<template>
	<div class="c-header">
		<h1>
			<Logo
				:color="isTransparent ? 'white' : 'primary'"
				name="LogoComentoTypoType"
				width="101px"
				height="16px"
				:url="logoUrl"
			/>
		</h1>
		<ul class="ml-26 flex">
			<li
				v-for="(menu, index) in items"
				:key="`menu-${index}`"
				class="c-header-menu"
				:class="getHeaderNavClass(index)"
				@mouseenter="onMouseEntered(index)"
			>
				<nuxt-link v-if="nuxt" v-bind="$attrs" :to="menu.path" v-on="$listeners">{{ menu.name }}</nuxt-link>
				<a v-else v-bind="$attrs" :href="menu.path" v-on="$listeners">{{ menu.name }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
import Logo from '@/components/elements/core/logo/Logo.vue';

/**
 * @displayName c-header
 */

export default {
	name: 'Header',
	props: {
		activatedMenu: {
			type: Number,
			default: -1,
		},
		hoveredMenu: {
			type: Number,
			default: -1,
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
		logoUrl: {
			type: String,
			default: 'https://comento.kr',
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
		onMouseEntered(index) {
			this.$emit('update-nav', index);
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
		cursor: pointer;
		@include body2();

		&.transparent > a {
			color: rgba($color: $white, $alpha: 0.4);
		}

		&.active {
			& > a {
				color: $blue600 !important;
				font-weight: 600;
			}
			&.transparent {
				& > a {
					color: $white !important;
				}
			}
		}
		&.hovered {
			& > a {
				color: $blue800;
				font-weight: 600;
			}
			&.transparent {
				& > a {
					color: $white !important;
				}
			}
		}

		&:not(:first-child) {
			margin-left: 24px;
		}
	}
}
</style>
