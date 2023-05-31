<template>
	<div class="c-application c-alarm-list">
		<slot />
	</div>
</template>

<script>
import { defineComponent } from 'vue';

/**
 * @displayName c-alarm-list
 */
export default defineComponent({
	name: 'AlarmList',
});
</script>

<style lang="scss" scoped>
.c-alarm-list {
	background: $white;
}
</style>
