<template>
	<div class="c-application c-file--summary" :class="computedClass">
		<div class="c-file--summary-info-wrapper">
			<Icon name="IconFileSmallLine" color="gray500"></Icon>
			<Typography type="body2" color="gray500"> 첨부파일 ({{ length }}개) </Typography>
		</div>
		<Button
			type="outline"
			size="small"
			color="info"
			class="c-file--summary-download-button"
			@click="$emit('clickAllFileDownloadButton')"
		>
			전체 다운로드
		</Button>
	</div>
</template>

<script>
import Button from '@/components/button/Button.vue';
import Typography from '@/components/typography/Typography.vue';
import Icon from '@/components/icon/Icon.vue';

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
		full: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		computedClass() {
			return { full: this.full };
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
