<template>
	<div class="top-bar" :class="{ transparent: isTransparent }">
		<NewGrid>
			<NewRow>
				<NewCol :col-sm="12">
					<!-- 공통 -->
					<div class="flex flex-row justify-content-between align-items-center py-12">
						<div class="preload-image-container">
							<Logo
								name="LogoComentoTypoType"
								color="logo"
								width="105"
								height="18"
								@click="$emit('click-logo')"
							/>
						</div>

						<div class="top-bar-content">
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
	},
	components: { NewCol, NewRow, NewGrid, Logo },
};
</script>

<style lang="scss" scoped>
.top-bar {
	width: 100%;
	height: 64px;
	position: fixed;
	top: 0;
	left: 0;
	background-color: $white;
	z-index: 100;

	&.transparent {
		background-color: transparent;
	}

	&-content {
		display: flex;
		> * + * {
			margin-left: 8px;
		}
	}
}
</style>
