<template>
	<section class="c-contents">
		<Typography type="body2" element="p" color="gray400" class="mb-8 c-contents--overline">
			<slot name="overline" />
		</Typography>
		<Typography type="headline6" element="h1" color="gray900" class="mb-8 c-contents--title">
			<slot name="title" />
		</Typography>
		<Typography type="body1" element="p" color="gray700" class="mb-16 c-contents--body">
			<slot name="body" />
		</Typography>
		<Typography type="body2" element="p" color="gray300" class="mb-8 c-contents--caption">
			<slot name="caption" />
		</Typography>
		<slot name="action" />
	</section>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'Contents',
	components: { Typography },
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

.c-contents {
	position: relative;
	&--body {
		min-height: 78px;
	}
}
</style>
