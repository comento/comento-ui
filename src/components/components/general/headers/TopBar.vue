<template>
	<div class="c-top-bar" :class="{ transparent: isTransparent }">
		<NewGrid>
			<NewRow>
				<NewCol :col-sm="12">
					<!-- 공통 -->
					<div class="c-top-bar-container">
						<div class="preload-image-container">
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
.c-top-bar {
	width: 100%;
	height: 64px;
	position: fixed;
	top: 0;
	left: 0;
	background-color: $white;
	z-index: 100;

	&-container {
		height: 64px;
		@include flexbox();
		@include justify-content(space-between);
		@include align-items(center);
	}

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
