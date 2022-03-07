<template>
	<div class="c-application c-reply">
		<div class="c-reply--user-information">
			<slot name="user-information" />
		</div>
		<Box class="c-reply--box" :paddings="[12, 16, 12, 16]" background-color="gray100">
			<Typography type="body2" color="gray700" v-html="nl2br(value)" />
		</Box>
		<div class="c-reply--append">
			<Label type="dataDisplay" class="c-reply--date">
				<c-typography type="caption2" color="gray400">{{ date }}</c-typography>
			</Label>
			<Button v-if="showReport" type="text" color="gray" size="small" @click="clickReportButton()"> 신고 </Button>
		</div>
	</div>
</template>

<script>
import Box from '@/components/components/general/Box';
import Typography from '@/components/elements/core/typography/Typography';
import Button from '@/components/components/general/button/Button';
import Label from '@/components/components/dataDisplay/Label';
import nl2br from '@/utils/nl2br';

/**
 * @displayName c-reply
 */
export default {
	name: 'Reply',
	props: {
		value: {
			type: String,
		},
		date: {
			type: String,
		},
		/**
		 * 신고 버튼 보여주기
		 */
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
	&--box {
		margin-top: 4px;
		@include border-radius(4px);
	}
	&--append {
		@include flexbox();
		@include flex-direction(row);
		@include justify-content(space-between);
		@include align-items(center);
	}

	&--date {
		padding: 5.5px 8px;
	}
}
</style>
