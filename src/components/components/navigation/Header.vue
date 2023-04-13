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
				<template v-if="menu.name === '클래스' && !hideClassTooltip">
					<Tooltip open placement="bottom-left">
						<template v-slot:popover>
							<div class="flex flex-row align-center justify-between">
								<Typography type="caption1" color="white">
									5주 직무경험, 직무부트캠프는<br />
									클래스에서 만날 수 있어요!
								</Typography>
								<Icon name="IconCloseSmallLine" color="white" class="ml-8" @click="closeClassToolTip" />
							</div>
						</template>
					</Tooltip>
				</template>
			</li>
		</ul>
	</div>
</template>

<script>
import Logo from '@/components/elements/core/logo/Logo';
import Tooltip from '@/components/components/message/Tooltip.vue';
import Icon from '@/components/elements/core/icon/Icon.vue';
import Typography from '@/components/elements/core/typography/Typography.vue';

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
	data() {
		return {
			hideClassTooltip: false,
		};
	},
	mounted() {
		this.hideClassTooltip = localStorage.getItem('close-comento-class-tooltip');
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
		closeClassToolTip() {
			this.hideClassTooltip = true;
			localStorage.setItem('close-comento-class-tooltip', true);
		},
	},
	components: { Typography, Icon, Tooltip, Logo },
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
	::v-deep {
		.c-tooltip {
			left: 20px !important;
			&--inner {
				background: $primary;
			}
			&--arrow {
				border-color: $primary;
			}
		}
	}
}
</style>
