<template>
	<section class="c-application c-content">
		<Typography type="caption1" element="p" color="gray400" class="c-content--overline">
			<slot name="overline" />
		</Typography>
		<Typography type="headline6" element="h2" color="gray900" class="c-content--title">
			<slot name="title" />
		</Typography>
		<Typography type="body1" element="p" color="gray850" class="c-content--body">
			<slot name="body" />
		</Typography>
		<Typography type="body2" element="p" color="gray300" class="c-content--caption">
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

<style lang="scss" scoped>
.c-content {
	position: relative;
	&--overline {
		margin-bottom: 6px;
	}
	&--title {
		margin-bottom: 8px;
	}
	&--body {
		min-height: 78px;
		margin-bottom: 16px;
	}
	&--caption {
		margin-bottom: 8px;
	}
}
</style>
