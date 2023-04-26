<template>
	<nav
		id="subHeader"
		class="c-sub-header"
		:class="{
			search: isSearch,
			transparent: isTransparent,
			appear: isAppear,
			'scroll-top': isScrollTop,
			'with-alert': withAlert,
		}"
	>
		<NewGrid :fluid="isMobileView">
			<NewRow>
				<NewCol>
					<Tabs
						ref="subHeader"
						class="c-sub-header-tabs"
						:tab-index="tabIndex"
						with-header
						:type="isMobileView ? 'swiper' : 'basic'"
						@changeTabIndex="changeTabs"
					>
						<template v-for="(menu, index) in items" :slot="'item' + index">
							<span
								v-if="newMenuIndex === index"
								:key="`newMenu${index}`"
								class="c-sub-header-new-notice"
							/>
							<!--    nuxt 유무에 따라 핸들링          -->
							<nuxt-link v-if="isNuxt" :key="menu.path" :to="menu.path" :data-cy="menu.name">
								<Button :key="index" class="c-sub-header-menu" :class="{ active: tabIndex === index }">
									{{ menu.name }}
								</Button>
							</nuxt-link>
							<a v-else :key="menu.path" :href="menu.path" :data-cy="menu.name">
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
		isMobileView: {
			type: Boolean,
			default: false,
		},
		withAlert: {
			type: Boolean,
			default: false,
		},
		newMenuIndex: {
			type: Number,
			default: -1,
		},
	},
	computed: {
		tabIndex() {
			return this.items.findIndex(item => item.active);
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
	width: 100vw;
	top: 24px;
	left: 0;
	background-color: $white;
	transition: top 0.1s linear, opacity 0.1s ease-in;
	z-index: 80;
	position: fixed;
	::v-deep .c-tabs--menu-container {
		border-bottom: 1px solid $gray100;
		@include pc {
			// sub header 높이를 맞추기 위한 border
			border-bottom: 1px solid transparent;
		}
	}
	@include mobile {
		top: 52px;
	}
	&-new-notice {
		position: absolute;
		bottom: 32px;
		right: 0;
		width: 4px;
		height: 4px;
		background: $secondary;
		@include border-radius(4px);
	}

	&.appear {
		top: 52px;
		@include pc {
			top: 69px;
		}
		&.with-alert {
			top: calc(52px + 64px);
			@include pc {
				top: calc(69px + 56px);
			}
		}
	}

	&.scroll-top {
		position: relative;
	}

	&-tabs {
		overflow: visible;
		@include mobile {
			padding: 0 12px;
		}
	}

	&.search {
		background-color: $gray050;
		::v-deep .c-tabs--menu-container {
			background-color: $gray050;
			@include pc {
				// sub header 높이를 맞추기 위한 border
				border-bottom: 1px solid transparent;
			}
		}
		@include mobile {
			background-color: $white;
			::v-deep .c-tabs--menu-container {
				border-bottom: 1px solid $gray100;
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
