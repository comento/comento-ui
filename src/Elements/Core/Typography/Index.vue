<template>
	<div>
		<Typography element="h1" type="display1">Display1</Typography>
		<Typography element="h1" type="headline1">Headline1</Typography>
		<Typography element="h2" type="headline2">Headline2</Typography>
		<Typography element="h3" type="headline3">Headline3</Typography>
		<Typography element="h4" type="headline4">Headline4</Typography>
		<Typography element="h5" type="headline5">Headline5</Typography>
		<Typography element="h6" type="headline6">Headline6</Typography>
		<Typography type="body1">Body1</Typography>
		<Typography type="body2">Body2</Typography>
		<Typography type="caption1">Caption1</Typography>
		<Typography type="caption2">Caption2</Typography>
	</div>
</template>
<script>
import Typography from './Typography';
export default {
	name: 'Index',
	components: {
		Typography,
	},
};
</script>

<style scoped></style>
