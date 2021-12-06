<template>
	<div class="c-application c-reply">
		<div class="c-reply--user-information">
			<slot name="user-information" />
		</div>
		<CBox class="c-reply--box" :paddings="[12, 16, 12, 16]" background-color="gray100">
			<CTypography type="body2" v-html="nl2br(value)" />
		</CBox>
		<div class="c-reply--append">
			<CLabel type="dataDisplay" class="c-reply--date" v-html="date" />
			<CButton v-if="showReport" type="text" color="secondary" size="small" @click="clickReportButton()">
				신고
			</CButton>
		</div>
	</div>
</template>

<script>
import CBox from '@/components/components/general/CBox';
import CTypography from '@/components/elements/core/typography/CTypography';
import CButton from '@/components/components/general/button/CButton';
import CLabel from '@/components/components/dataDisplay/CLabel';
import nl2br from '@/utils/nl2br';

export default {
	name: 'CReply',
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
		CButton,
		CTypography,
		CBox,
		CLabel,
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
