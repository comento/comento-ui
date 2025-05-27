<template>
	<div class="c-application c-file--summary" :class="computedClass">
		<Typography type="body2" color="gray600" :font-weight="400"> 첨부파일 ({{ length }}개) </Typography>
		<Button size="small" color="info" @click="$emit('clickAllFileDownloadButton')"> 전체 다운로드 </Button>
	</div>
</template>

<script>
import Button from '@/components/button/Button.vue';
import Typography from '@/components/typography/Typography.vue';

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
	},
};
</script>

<style lang="scss" scoped>
.c-file--summary {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2px;
	&.full {
		width: 100%;
	}
}
</style>
