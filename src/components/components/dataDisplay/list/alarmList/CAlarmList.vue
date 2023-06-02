<template>
	<div class="c-application c-alarm-list">
		<slot />
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CAlarmList',
});
</script>

<style lang="scss" scoped>
.c-alarm-list {
	background: $white;
}
</style>
