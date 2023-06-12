<template>
	<div class="c-application c-file--summary" :class="computedClass">
		<div class="c-file--summary-info-wrapper">
			<CIcon name="IconFileSmallLine" color="gray500"></CIcon>
			<CTypography type="body2" color="gray500"> 첨부파일 ({{ length }}개) </CTypography>
		</div>
		<CButton
			type="outline"
			size="small"
			color="info"
			class="c-file--summary-download-button"
			@click="$emit('clickAllFileDownloadButton')"
		>
			전체 다운로드
		</CButton>
	</div>
</template>

<script>
import CButton from '@/components/components/general/button/CButton.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import CIcon from '@/components/elements/core/icon/CIcon.vue';
import { defineComponent, computed, toRefs } from 'vue';

export default defineComponent({
	name: 'CFileSummary',
	props: {
		length: {
			type: Number,
			default: 0,
		},
		full: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['clickAllFileDownloadButton'],
	setup(props) {
		const { full } = toRefs(props);
		const computedClass = computed(() => ({ full }));
		return { computedClass };
	},
	components: {
		CButton,
		CTypography,
		CIcon,
	},
});
</script>

<style lang="scss" scoped>
.c-file {
	&--summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		&.full {
			width: 100%;
		}
		&-info {
			&-wrapper {
				display: flex;
				align-items: center;
				svg {
					margin-right: 2px;
				}
			}
		}
		&-download-button {
			@include border-radius(6px);
		}
	}
}
</style>
