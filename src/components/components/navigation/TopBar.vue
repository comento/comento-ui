<template>
	<div class="c-top-bar" :class="{ transparent: isTransparent }">
		<NewGrid>
			<NewRow>
				<NewCol :col-sm="12">
					<!-- 공통 -->
					<div class="c-top-bar-container">
						<div v-if="type === 'detail'" class="c-top-bar-backward">
							<Icon
								name="IconBackwardLargeLine"
								color="gray800"
								class="mr-4 c-pointer"
								@click="$emit('click-backward')"
							/>
							<Typography type="body1" :font-weight="500" color="gray900">
								{{ title }}
							</Typography>
						</div>
						<div v-else class="preload-image-container">
							<Logo
								name="LogoComentoTypoType"
								:color="isTransparent ? 'white' : 'primary'"
								width="105"
								height="18"
								@click="$emit('click-logo')"
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
import NewGrid from '@/components/layout/NewGrid';
import NewRow from '@/components/layout/NewRow';
import NewCol from '@/components/layout/NewCol';
import Logo from '@/components/elements/core/logo/Logo';
import Icon from '@/components/elements/core/icon/Icon';
import Typography from '@/components/elements/core/typography/Typography';
export const headerTypes = ['default', 'detail'];

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
	},
	components: { NewCol, NewRow, NewGrid, Logo, Icon, Typography },
};
</script>

<style lang="scss" scoped>
.c-top-bar {
	width: 100%;
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

	&-backward {
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
