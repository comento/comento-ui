<template>
	<div class="c-top-bar" :class="{ transparent: isTransparent, 'with-alert': withAlert }">
		<CNewGrid>
			<CNewRow>
				<CNewCol :col-sm="12">
					<!-- 공통 -->
					<div class="c-top-bar-container">
						<div v-if="type === 'logo'" class="c-top-bar-logo-type">
							<CLogo
								name="LogoComentoTypoType"
								:color="isTransparent ? 'white' : 'primary'"
								width="105"
								height="18"
								:url="logoUrl"
							/>
							<CDivider class="mx-6" style="height: 16px" vertical />
							<CTypography type="body2" :font-weight="500" :color="isTransparent ? 'white' : 'gray500'">
								{{ title }}
							</CTypography>
						</div>
						<div v-else-if="type === 'backward'" class="c-top-bar-backward">
							<CIcon
								name="IconBackwardLargeLine"
								:color="isTransparent ? 'white' : 'gray800'"
								class="mr-4 c-pointer"
								@click="$emit('click-backward')"
							/>
							<CTypography type="body1" :font-weight="500" :color="isTransparent ? 'white' : 'gray900'">
								{{ title }}
							</CTypography>
						</div>
						<div v-else class="preload-image-container">
							<CLogo
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
				</CNewCol>
			</CNewRow>
		</CNewGrid>
	</div>
</template>

<script>
import CNewGrid from '@/components/layout/CNewGrid.vue';
import CNewRow from '@/components/layout/CNewRow.vue';
import CNewCol from '@/components/layout/CNewCol.vue';
import CLogo from '@/components/elements/core/logo/CLogo.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import CDivider from '@/components/elements/utility/CDivider.vue';
import { defineComponent } from 'vue';
export const headerTypes = ['default', 'backward', 'logo'];

export default defineComponent({
	name: 'CTopBar',
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
	emits: ['click-backward'],
	components: { CNewCol, CNewRow, CNewGrid, CLogo, CIcon, CTypography, CDivider },
});
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
