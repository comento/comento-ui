<template>
	<div class="c-application c-reply">
		<div class="c-reply--user-information">
			<slot name="user-information" />
		</div>
		<Box class="c-reply--box" :paddings="[12, 16, 12, 16]" background-color="gray100">
			<Typography
				v-linkify:options="{ className: 'linkified' }"
				type="body2"
				:color="fontColor"
				v-html="nl2br(value)"
			/>
		</Box>
		<div class="c-reply--append">
			<Label type="dataDisplay" class="c-reply--date">
				<Typography type="caption1" color="gray400">{{ date }}</Typography>
			</Label>
			<Button v-if="showReport" type="text" color="info" size="small" @click="clickReportButton()"> 신고 </Button>
		</div>
	</div>
</template>

<script>
import linkify from 'vue-linkify';
import Box from '@/components/components/general/Box';
import Typography from '@/components/elements/core/typography/Typography';
import Button from '@/components/components/general/button/Button';
import Label from '@/components/components/dataDisplay/Label';
import nl2br from '@/utils/nl2br';
import { defineComponent } from 'vue';

/**
 * @displayName c-reply
 */
export default defineComponent({
	name: 'Reply',
	props: {
		value: {
			type: String,
		},
		date: {
			type: String,
		},
		fontColor: {
			type: String,
			default: 'gray700',
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
	directives: {
		linkify,
	},
});
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
