<template>
	<div class="c-application c-reply">
		<div class="c-reply--user-information" :class="isSimpleType ? 'mb-10' : 'mb-8'">
			<slot name="user-information" />
		</div>
		<div v-if="isEditing">
			<slot name="value" />
		</div>
		<Typography
			v-else
			v-linkify:options="{ className: 'linkified' }"
			type="body1"
			:font-weight="400"
			color="gray800"
		>
			<slot name="value" />
		</Typography>
		<div v-if="$slots['actions']" class="c-reply--actions">
			<slot name="actions" />
		</div>
		<div v-if="$slots['interactions']" class="c-reply--interactions">
			<slot name="interactions" />
		</div>
	</div>
</template>

<script>
import linkify from 'vue-linkify';
import Typography from '@/components/typography/Typography.vue';

/**
 * @displayName c-reply
 */
export default {
	name: 'Reply',
	props: {
		type: {
			type: String,
			default: 'default',
		},
		isEditing: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		isSimpleType() {
			return this.type === 'simple';
		},
	},
	directives: {
		linkify,
	},
	components: { Typography },
};
</script>

<style lang="scss" scoped>
.c-reply {
	position: relative;
	&--actions {
		position: absolute;
		top: 0;
		right: 0;
	}
	&--interactions {
		margin-top: 4px;
	}
}
</style>
