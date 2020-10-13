<template>
	<!--컴포넌트 전환시 캐싱 가능 keep-alive-->
	<keep-alive>
		<component
			:is="name"
			ref="icon"
			class="c-application c-icon"
			:class="computedSpinnerColor"
			:style="computedStyle"
		/>
	</keep-alive>
</template>

<script>
import IconSearchLargeLine from '@/assets/images/icon/icon-search-large-line.svg?inline';
import IconProfileLargeLine from '@/assets/images/icon/icon-profile-large-line.svg?inline';
import IconAlarmLargeLine from '@/assets/images/icon/icon-alarm-large-line.svg?inline';
import IconArrowLargeLine from '@/assets/images/icon/icon-arrow-large-line.svg?inline';
import IconMentoringLargeLine from '@/assets/images/icon/icon-mentoring-large-line.svg?inline';
import IconVodLargeLine from '@/assets/images/icon/icon-vod-large-line.svg?inline';
import IconAnswerLargeLine from '@/assets/images/icon/icon-answer-large-line.svg?inline';
import IconEduLargeLine from '@/assets/images/icon/icon-edu-large-line.svg?inline';
import IconCloseMediumFill from '@/assets/images/icon/icon-close-medium-fill.svg?inline';
import IconExclamationSmallFill from '@/assets/images/icon/icon-exclamation-small-fill.svg?inline';
import IconExclamationMediumLine from '@/assets/images/icon/icon-exclamation-medium-line.svg?inline';
import IconExclamationLargeLine from '@/assets/images/icon/icon-exclamation-large-line.svg?inline';
import IconSelectedLargeLine from '@/assets/images/icon/icon-selected-large-line.svg?inline';
import IconKeylineLarge from '@/assets/images/icon/icon-keyline-large.svg?inline';
import IconOverflowSmallFill from '@/assets/images/icon/icon-overflow-small-fill.svg?inline';
import IconCloseMediumLine from '@/assets/images/icon/icon-close-medium-line.svg?inline';
import IconSpinnerSmall from '@/assets/images/icon/icon-spinner-small.svg?inline';
import IconSpinnerMedium from '@/assets/images/icon/icon-spinner-medium.svg?inline';
import IconSpinnerLarge from '@/assets/images/icon/icon-spinner-large.svg?inline';
import IconPlusLargeLine from '@/assets/images/icon/icon-plus-large-line.svg?inline';
import { colors } from '@/src/Elements/Core/Colors';

export default {
	name: 'Icon',
	props: {
		name: {
			type: String,
			default: '',
		},
		color: {
			type: String,
			default: '',
		},
		loading: {
			type: Boolean,
			default: false,
		},
		spinnerColor: {
			type: String,
			default: 'gray',
			validator(value) {
				return ['gray', 'primary', 'success'].indexOf(value) !== -1;
			},
		},
		reversed: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		computedStyle() {
			return { fill: colors[this.color] };
		},
		computedSpinnerColor() {
			return this.spinnerColor;
		},
	},
	mounted() {
		const colorMap = {
			gray: {
				stroke: '#E8EAED',
				fill: '#979CA2',
			},
			primary: {
				stroke: '#DEFAEB',
				fill: '#00C854',
			},
			primaryReversed: {
				stroke: '#00B334',
				fill: 'white',
			},
			success: {
				stroke: '#D6EBFF',
				fill: '#1E90FF',
			},
			successReversed: {
				stroke: '#0074CC',
				fill: 'white',
			},
		};
		if (this.loading) {
			const colorMapKey =
				this.reversed && this.spinnerColor !== 'gray' ? `${this.spinnerColor}Reversed` : this.spinnerColor;
			this.$refs['icon']
				.getElementsByClassName('circle')[0]
				.setAttribute('stroke', colorMap[colorMapKey]['stroke']);
			this.$refs['icon'].getElementsByClassName('quarter')[0].setAttribute('fill', colorMap[colorMapKey]['fill']);
		}
	},
	components: {
		IconSearchLargeLine,
		IconProfileLargeLine,
		IconAlarmLargeLine,
		IconArrowLargeLine,
		IconMentoringLargeLine,
		IconVodLargeLine,
		IconAnswerLargeLine,
		IconEduLargeLine,
		IconCloseMediumFill,
		IconExclamationSmallFill,
		IconExclamationMediumLine,
		IconExclamationLargeLine,
		IconSelectedLargeLine,
		IconKeylineLarge,
		IconOverflowSmallFill,
		IconCloseMediumLine,
		IconSpinnerSmall,
		IconSpinnerMedium,
		IconSpinnerLarge,
		IconPlusLargeLine,
	},
};
</script>

<style lang="scss" scoped>
/*@import '@/assets/style/base/main';*/

.c-icon {
	cursor: pointer;
	background: transparent !important;
}
</style>
