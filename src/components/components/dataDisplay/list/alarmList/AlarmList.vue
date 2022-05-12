<template>
	<div class="c-application c-alarm-list">
		<slot />
	</div>
</template>

<script>
/**
 * @displayName c-alarm-list
 */
export default {
	name: 'AlarmList',
};
</script>

<style lang="scss" scoped>
.c-alarm-list {
	background: $white;
}
</style>
