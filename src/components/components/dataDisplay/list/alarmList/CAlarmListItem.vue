<template>
	<div class="c-application c-alarm-list-item" tabindex="0" v-bind="$attrs">
		<div class="c-alarm-list-item--icon">
			<slot name="icon" />
		</div>
		<div class="c-alarm-list-item--content">
			<CTypography type="body2" color="gray850" class="c-alarm-list-item--message mb-8">
				<slot name="message" />
			</CTypography>
			<CTypography v-if="$slots['date']" type="caption1" color="gray400">
				<slot name="date" />
			</CTypography>
		</div>
	</div>
</template>

<script>
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CAlarmListItem',
	components: { CTypography },
});
</script>

<style lang="scss" scoped>
.c-alarm-list-item {
	padding: 20px;
	cursor: pointer;
	@include flexbox();
	@include flex-direction(row);
	background-color: white;

	&.alarm-unread {
		background-color: $blue000;
	}
	&.alarm-edu {
		background-color: $blue000;
	}

	&--icon {
		flex: none;
		:deep(img) {
			width: 30px;
			height: 30px;
			margin-right: 12px;
		}
	}

	&--message,
	&--message:deep(*) {
		word-break: break-all !important;
	}
}
</style>
