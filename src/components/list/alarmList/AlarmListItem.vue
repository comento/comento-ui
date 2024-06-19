<template>
	<div class="c-application c-alarm-list-item" tabindex="0" v-on="$listeners">
		<div class="c-alarm-list-item--icon">
			<slot name="icon" />
		</div>
		<div class="c-alarm-list-item--content">
			<Typography type="body2" color="gray850" class="c-alarm-list-item--message mb-8">
				<slot name="message" />
			</Typography>
			<Typography v-if="$slots['date']" type="caption1" color="gray400">
				<slot name="date" />
			</Typography>
		</div>
	</div>
</template>

<script>
import Typography from '@/components/typography/Typography';

/**
 * @displayName c-alarm-list-item
 */
export default {
	name: 'AlarmListItem',
	components: { Typography },
};
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
		::v-deep img {
			width: 30px;
			height: 30px;
			margin-right: 12px;
		}
	}

	&--message,
	&--message::v-deep * {
		word-break: break-all !important;
	}
}
</style>
