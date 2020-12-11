<template>
	<section class="c-application c-content">
		<Typography type="body2" element="p" color="gray400" class="mb-8 c-content--overline">
			<slot name="overline" />
		</Typography>
		<Typography type="headline6" element="h1" color="gray900" class="mb-8 c-content--title">
			<slot name="title" />
		</Typography>
		<Typography type="body1" element="p" color="gray700" class="mb-16 c-content--body">
			<slot name="body" />
		</Typography>
		<Typography type="body2" element="p" color="gray300" class="mb-8 c-content--caption">
			<slot name="caption" />
		</Typography>
		<slot name="action" />
	</section>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';

export default {
	name: 'Content',
	components: { Typography },
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

.c-content {
	position: relative;
	&--body {
		min-height: 78px;
	}
}
</style>
