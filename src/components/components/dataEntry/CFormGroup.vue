<template>
	<div class="c-application c-form-group" v-bind="$attrs">
		<slot />
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CFormGroup',
});
</script>

<style scoped lang="scss">
.c-form-group {
	:deep(> *) {
		&:not(:last-child) {
			margin-bottom: 12px;
		}
	}
}
</style>
