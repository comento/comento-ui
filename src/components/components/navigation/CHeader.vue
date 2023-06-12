<template>
	<div class="c-header">
		<h1>
			<CLogo
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
				<nuxt-link v-if="nuxt" v-bind="$attrs" :to="menu.path">
					{{ menu.name }}
				</nuxt-link>
				<a v-else v-bind="$attrs" :href="menu.path">{{ menu.name }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
import CLogo from '@/components/elements/core/logo/CLogo.vue';
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
	name: 'CHeader',
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
	emits: ['update-nav'],
	setup(props, { emit }) {
		const { activatedMenu, hoveredMenu, isTransparent } = toRefs(props);
		const getHeaderNavClass = name => {
			return {
				active: activatedMenu.value === name,
				hovered: hoveredMenu.value === name,
				transparent: isTransparent.value,
			};
		};

		const onMouseEntered = index => {
			emit('update-nav', index);
		};

		return {
			getHeaderNavClass,
			onMouseEntered,
		};
	},
	components: { CLogo },
});
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
