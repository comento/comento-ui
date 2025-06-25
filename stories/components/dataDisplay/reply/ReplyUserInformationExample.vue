<template>
	<div class="flex flex-row align-center">
		<slot name="avatar" />
		<div class="ml-8">
			<div class="flex flex-row align-center">
				<Typography :type="isSimpleType ? 'caption1' : 'body2'" color="gray850" :font-weight="600">
					<slot name="name" />
				</Typography>
				<div v-if="$slots['meta']" class="flex flex-row align-center ml-4">
					<slot name="meta" />
				</div>
			</div>
			<Typography v-if="$slots['content']" type="caption1" :font-weight="400" color="gray500">
				<slot name="content" />
			</Typography>
		</div>
	</div>
</template>

<script>
import Typography from '@/components/typography/Typography.vue';

export default {
	name: 'ReplyUserInformationExample',
	props: {
		type: {
			type: String,
		},
	},
	computed: {
		isSimpleType() {
			return this.type === 'simple';
		},
	},
	components: { Typography },
};
</script>

<style scoped lang="scss"></style>
