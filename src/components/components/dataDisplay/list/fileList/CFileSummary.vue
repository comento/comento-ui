<template>
	<div class="c-application c-file--summary">
		<div class="c-file--summary-info-wrapper">
			<CIcon name="IconFileMediumLineLight"></CIcon>
			<CTypography type="body2" color="gray500"> 첨부파일 ({{ length }}개) </CTypography>
		</div>
		<CButton type="outlined" size="small" color="secondary" @click="$emit('clickAllFileDownloadButton')">
			전체 다운로드
		</CButton>
	</div>
</template>

<script>
import CButton from '@/components/components/general/button/CButton';
import CTypography from '@/components/elements/core/typography/CTypography';
import CIcon from '@/components/elements/core/icon/CIcon';

export default {
	name: 'CFileSummary',
	props: {
		length: {
			type: Number,
			default: 0,
		},
	},
	components: {
		CButton,
		CTypography,
		CIcon,
	},
};
</script>

<style lang="scss" scoped>
.c-file {
	&--summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		&-info {
			&-wrapper {
				display: flex;
				align-items: center;
				svg {
					margin-right: 2px;
				}
			}
		}
	}
}
</style>
