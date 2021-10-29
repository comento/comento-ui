<template>
	<div class="c-application c-reply">
		<div class="c-reply--user-information">
			<slot name="user-information" />
		</div>
		<Box class="c-reply--box" :paddings="[12, 16, 12, 16]" background-color="gray100">
			<Typography type="body2" v-html="nl2br(value)" />
		</Box>
		<div class="c-reply--append">
			<Label type="dataDisplay" class="c-reply--date" v-html="date" />
			<Button v-if="showReport" type="text" color="secondary" size="small" @click="clickReportButton()">
				신고
			</Button>
		</div>
	</div>
</template>

<script>
import Box from '@/src/components/components/general/Box';
import Typography from '@/src/components/elements/core/typography/Typography';
import Button from '@/src/components/components/general/button/Button';
import Label from '@/src/components/components/dataDisplay/Label';
import nl2br from '@/src/utils/nl2br';

export default {
	name: 'Reply',
	props: {
		value: {
			type: String,
		},
		date: {
			type: String,
		},
		showReport: {
			type: Boolean,
			default: true,
		},
	},
	methods: {
		nl2br,
		clickReportButton() {
			this.$emit('clickReportButton');
		},
	},
	components: {
		Button,
		Typography,
		Box,
		Label,
	},
};
</script>

<style lang="scss" scoped>
.c-reply {
	&--user-information {
		margin-bottom: 4px;
	}
	&--box {
		border-radius: 20px;
	}
	&--append {
		@include flexbox();
		@include flex-direction(row);
		@include justify-content(space-between);
		@include align-items(center);
		padding: 0 8px 0 16px;
		height: 24px;
	}
}
</style>
