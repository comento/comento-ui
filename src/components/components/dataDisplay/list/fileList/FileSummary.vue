<template>
	<div class="c-application c-file--summary">
		<div class="c-file--summary-info-wrapper">
			<Icon name="IconFileMediumLineLight"></Icon>
			<Typography type="body2" color="gray500"> 첨부파일 ({{ length }}개) </Typography>
		</div>
		<Button type="outlined" size="small" color="secondary" @click="$emit('clickAllFileDownloadButton')">
			전체 다운로드
		</Button>
	</div>
</template>

<script>
import Button from '@/src/components/components/general/button/Button';
import Typography from '@/src/components/elements/core/typography/Typography';
import Icon from '@/src/components/elements/core/icon/Icon';

/**
 * @displayName c-file-summary
 */
export default {
	name: 'FileSummary',
	props: {
		length: {
			type: Number,
			default: 0,
		},
	},
	components: {
		Button,
		Typography,
		Icon,
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
