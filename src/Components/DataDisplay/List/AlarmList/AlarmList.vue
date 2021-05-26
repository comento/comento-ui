<template>
	<div class="c-application c-alarm-list">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'AlarmList',
};
</script>

<style lang="scss" scoped>
.c-alarm-list {
	background: $white;

	// 마지막 divider 숨기기
	hr:last-child {
		display: none;
	}
}
</style>
