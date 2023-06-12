<template>
	<div class="c-application c-reply">
		<div class="c-reply--user-information">
			<slot name="user-information" />
		</div>
		<CBox class="c-reply--box" :paddings="[12, 16, 12, 16]" background-color="gray100">
			<CTypography
				v-linkify:options="{ className: 'linkified' }"
				type="body2"
				:color="fontColor"
				v-html="nl2br(value)"
			/>
		</CBox>
		<div class="c-reply--append">
			<CLabel type="dataDisplay" class="c-reply--date">
				<CTypography type="caption1" color="gray400">
					{{ date }}
				</CTypography>
			</CLabel>
			<CButton v-if="showReport" type="text" color="info" size="small" @click="clickReportButton()">
				신고
			</CButton>
		</div>
	</div>
</template>

<script>
import linkify from 'vue-linkify';
import CBox from '@/components/components/general/CBox.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import CButton from '@/components/components/general/button/CButton.vue';
import CLabel from '@/components/components/dataDisplay/CLabel.vue';
import nl2br from '@/utils/nl2br';
import { defineComponent, reactive } from 'vue';

/**
 * @displayName c-reply
 */
export default defineComponent({
	name: 'CReply',
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
	emits: ['clickReportButton'],
	setup(props, { emit }) {
		const reactiveProps = reactive(props);
		const clickReportButton = () => emit('clickReportButton');

		return { ...reactiveProps, nl2br, clickReportButton };
	},
	components: {
		CButton,
		CTypography,
		CBox,
		CLabel,
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
