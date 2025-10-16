<template>
	<img :src="`https://cdn.comento.kr/images/illust/empty/${type}.svg`" alt="" width="82" height="82" />
</template>

<script>
export const ILLUST_SOURCES = [
	'bookmark',
	'class',
	'contents',
	'credit',
	'other',
	'payment',
	'reply',
	'review',
	'search',
];

export default {
	name: 'EmptyIllust',
	props: {
		type: {
			type: String,
			default: 'other',
			validator: value => ILLUST_SOURCES.includes(value),
		},
	},
};
</script>

<style scoped lang="scss"></style>
