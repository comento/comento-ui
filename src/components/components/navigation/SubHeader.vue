<template>
	<nav
		id="subHeader"
		class="c-sub-header"
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
								<Button :key="index" class="c-sub-header-menu" :class="{ active: tabIndex === index }">
									{{ menu.name }}
								</Button>
							</nuxt-link>
							<a v-else :key="menu.url" :href="menu.url" :data-cy="menu.name">
								<Button :key="index" class="c-sub-header-menu" :class="{ active: tabIndex === index }">
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
			if (this.isMobile) {
				return { padding: '0 12px' };
			}
			return {};
		},
		computedStyle() {
			if (this.isMobile) {
				return { '--triggered-top': '52px', position: 'fixed' };
			}
			return {
				'--triggered-top': this.isAppear ? '69px' : '24px',
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
.c-sub-header {
	width: 100%;
	top: var(--triggered-top);
	left: 0;
	background-color: $white;
	transition: top 0.1s ease-in-out;
	z-index: 1;
	::v-deep .c-tabs--menu-container {
		border-bottom: 1px solid $gray100;
		@include pc {
			// sub header 높이를 맞추기 위한 border
			border-bottom: 1px solid transparent;
		}
	}

	&.search {
		background-color: $gray050;
		::v-deep .c-tabs--menu-container {
			background-color: $gray050;
			@include pc {
				// sub header 높이를 맞추기 위한 border
				border: 1px solid transparent;
			}
		}
		@include mobile {
			background-color: $white;
			::v-deep .c-tabs--menu-container {
				border-bottom: 1px solid $white;
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

::v-deep .swiper-slide {
	&.active {
		&::after {
			background-color: $blue600;
		}
	}
}

::v-deep .c-tabs--menu-button {
	> a {
		text-decoration: none;
	}
	&:hover {
		background-color: transparent !important;
		& .c-button {
			color: $blue800;
		}
	}
	.c-button {
		&.active {
			@include body2();
			font-weight: 500 !important;
			color: $blue600 !important;
		}
	}
	&.active::after {
		background-color: $blue600;
	}
}
</style>
