<template>
	<div class="c-top-bar" :class="{ transparent: isTransparent, 'with-alert': withAlert }">
		<NewGrid>
			<NewRow>
				<NewCol :col-sm="12">
					<!-- 공통 -->
					<div class="c-top-bar-container">
						<div v-if="type === 'logo'" class="c-top-bar-logo-type">
							<Logo
								name="LogoComentoTypoType"
								:color="isTransparent ? 'white' : 'primary'"
								width="105"
								height="18"
								:url="logoUrl"
							/>
							<Divider class="mx-6" style="height: 16px" vertical />
							<Typography type="body2" :font-weight="500" :color="isTransparent ? 'white' : 'gray500'">
								{{ title }}
							</Typography>
						</div>
						<div v-else-if="type === 'backward'" class="c-top-bar-backward">
							<Icon
								name="IconBackwardLargeLine"
								:color="isTransparent ? 'white' : 'gray800'"
								class="mr-4 c-pointer"
								@click="$emit('click-backward')"
							/>
							<Typography type="body1" :font-weight="500" :color="isTransparent ? 'white' : 'gray900'">
								{{ title }}
							</Typography>
						</div>
						<div v-else class="preload-image-container">
							<Logo
								name="LogoComentoTypoType"
								:color="isTransparent ? 'white' : 'primary'"
								width="105"
								height="18"
								:url="logoUrl"
							/>
						</div>

						<div class="c-top-bar-content">
							<slot name="actions" />
						</div>
					</div>
				</NewCol>
			</NewRow>
		</NewGrid>
	</div>
</template>

<script>
import NewGrid from '@/components/layout/NewGrid.vue';
import NewRow from '@/components/layout/NewRow.vue';
import NewCol from '@/components/layout/NewCol.vue';
import Logo from '@/components/elements/core/logo/Logo.vue';
import Icon from '@/components/elements/core/icon/Icon.vue';
import Typography from '@/components/elements/core/typography/Typography.vue';
import Divider from '@/components/elements/utility/Divider.vue';
export const headerTypes = ['default', 'backward', 'logo'];

/**
 * @displayName c-top-bar
 */

export default {
	name: 'TopBar',
	props: {
		isTransparent: {
			type: Boolean,
			default: false,
		},
		type: {
			type: String,
			default: 'default',
		},
		title: {
			type: String,
			default: '',
		},
		withAlert: {
			type: Boolean,
			default: false,
		},
		logoUrl: {
			type: String,
			default: 'https://comento.kr',
		},
	},
	components: { NewCol, NewRow, NewGrid, Logo, Icon, Typography, Divider },
};
</script>

<style lang="scss" scoped>
.c-top-bar {
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	background-color: $white;
	z-index: 100;

	&-container {
		height: 52px;
		@include flexbox();
		@include justify-content(space-between);
		@include align-items(center);
	}

	&.transparent {
		background-color: transparent;
	}

	&.with-alert {
		top: 64px;
	}

	&-backward {
		@include flexbox();
		@include justify-content(center);
		@include align-items(flex-start);
	}

	&-logo-type {
		@include flexbox();
		@include justify-content(center);
		@include align-items(center);
	}

	&-content {
		display: flex;
		> * + * {
			margin-left: 8px;
		}
	}
}
</style>
