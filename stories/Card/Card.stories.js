import { storiesOf } from '@storybook/vue';
import Grid from '@/src/Components/Layout/Grid';
import Row from '@/src/Components/Layout/Row';
import StyleCol from '@/src/Components/Layout/StyleCol';
import Card from '@/src/DataDisplay/Card';
import Typography from '@/src/Elements/Core/Typography/Typography';

storiesOf('Card', module).add('Card', () => ({
	components: { Card, Typography, Grid, Row, StyleCol },
	template: `<Grid><Row><StyleCol col-lg="4"><Card/></StyleCol></Row></Grid>`,
}));
