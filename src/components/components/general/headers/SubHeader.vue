<template>
	<nav
		id="subHeader"
		class="sub-header"
		:class="{ search: isSearch, transparent: isTransparent }"
		:style="computedStyle"
	>
		<NewGrid :fluid="isMobile">
			<NewRow>
				<NewCol>
					<Tabs
						ref="subHeader"
						:tab-index="tabIndex"
						with-header
						:type="isMobile ? 'swiper' : 'basic'"
						:style="tabStyle"
						@changeTabIndex="changeTabs"
					>
						<template v-for="(menu, index) in items" :slot="'item' + index">
							<!--    nuxt 유무에 따라 핸들링          -->
							<nuxt-link v-if="isNuxt" :key="menu.url" :to="menu.url" :data-cy="menu.name">
								<Button :key="index" class="sub-header-menu" :class="{ active: tabIndex === index }">
									{{ menu.name }}
								</Button>
							</nuxt-link>
							<a v-else :key="menu.url" :href="menu.url" :data-cy="menu.name">
								<Button :key="index" class="sub-header-menu" :class="{ active: tabIndex === index }">
									{{ menu.name }}
								</Button>
							</a>
						</template>
					</Tabs>
				</NewCol>
			</NewRow>
		</NewGrid>
	</nav>
</template>

<script>
import NewCol from '@/components/layout/NewCol';
import Tabs from '@/components/components/dataDisplay/Tabs';
import NewGrid from '@/components/layout/NewGrid';
import NewRow from '@/components/layout/NewRow';
import Button from '@/components/components/general/button/Button';
import windowMixin from '@/mixins/windowMixin';

/**
 * @displayName c-sub-header
 */

export default {
	name: 'SubHeader',
	mixins: [windowMixin],
	props: {
		// 헤더가 숨어있다가 나오는지 여부
		isAppear: {
			type: Boolean,
			default: false,
		},
		isScrollTop: {
			type: Boolean,
			default: true,
		},
		items: {
			type: Array,
			default: () => [],
		},
		isSearch: {
			type: Boolean,
			default: false,
		},
		isNuxt: {
			type: Boolean,
			default: false,
		},
		isTransparent: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		tabIndex() {
			return this.items.findIndex(item => item.active);
		},
		tabStyle() {
			const tabContentStyle = { height: '44px' };
			if (this.isMobile) {
				return { ...tabContentStyle, padding: '0 12px' };
			}
			return tabContentStyle;
		},
		computedStyle() {
			if (this.isMobile) {
				const triggerTop = this.isSearch ? '64px' : '52px';
				return { '--triggered-top': triggerTop, position: 'fixed' };
			}
			return {
				'--triggered-top': this.isAppear ? '24px' : '69px',
				position: this.isScrollTop ? 'relative' : 'fixed',
			};
		},
	},
	methods: {
		changeTabs(tabs) {
			this.$emit('change-tab-index', this.tabIndex, tabs);
		},
	},
	components: { NewRow, NewGrid, Tabs, NewCol, Button },
};
</script>

<style lang="scss" scoped>
$active-bar-transparent: white;
$hover-background-transparent: rgba(21, 22, 23, 0.1);
.sub-header {
	width: 100%;
	top: var(--triggered-top);
	left: 0;
	background-color: $white;
	transition: top 0.1s ease-in-out;
	z-index: 1;

	&.search {
		background-color: $gray050;
		::v-deep .c-tabs--menu-container {
			background-color: $gray050;
			@include pc {
				border: none !important;
			}
		}
		@include mobile {
			background-color: $white;
			border-top: 1px solid $gray200;
			::v-deep .c-tabs--menu-container {
				background-color: $white;
			}
		}
	}
	&:not(.transparent) {
		@include pc {
			@include shadow3();
		}
	}

	&.transparent {
		background-color: transparent;
		.c-tabs--menu-container {
			background: transparent;
			border-bottom: none;

			::v-deep .c-tabs--menu-button {
				&:hover {
					& .c-button {
						color: $white;
					}
				}
			}
		}

		::v-deep {
			.c-tabs--menu-wrapper,
			.swiper-wrapper {
				.c-tabs--menu-button {
					@include pc {
						&:hover {
							background-color: $hover-background-transparent !important;
						}
					}

					&.active {
						.c-button {
							color: $active-bar-transparent !important;
						}

						&:after {
							background: $active-bar-transparent !important;
						}
					}
				}
				@include mobile {
					.active {
						.c-button {
							color: $active-bar-transparent !important;
						}
						&:after {
							background: $active-bar-transparent !important;
						}
					}
				}
			}
		}
	}
}

::v-deep .c-tabs--menu-button {
	&:hover {
		background-color: transparent !important;
		& .c-button {
			color: $blue800;
		}
	}

	&.active .c-button {
		@include body2();
		font-weight: 500;
		color: $blue600;
	}

	&.active::after {
		background-color: $blue600;
	}
}
</style>
