<template>
	<Modal :show.sync="show" :show-close-button="showCloseButton" :max-width="maxWidth" :persistent="persistent">
		<!-- title 영역 -->
		<Typography class="mb-16" type="headline5" :align="align">
			<slot name="title" />
		</Typography>

		<!-- contents 영역 -->
		<Typography class="mb-20" type="body2" :align="align" color="gray700">
			<div class="c-modal_contents_wrapper">
				<slot name="contents" />
			</div>
		</Typography>

		<!-- button 영역 -->
		<template v-if="showActionButton">
			<Button size="large" :loading="loading" full @click="successCallback">
				{{ successMessage }}
			</Button>
		</template>
	</Modal>
</template>

<script>
import Modal from '@/src/Components/Message/Modal/Modal';
import Typography from '@/src/Elements/Core/Typography/Typography';
import Button from '@/src/Components/Button/Button';

export default {
	name: 'BasicModal',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		align: {
			type: String,
			default: 'center',
			validator(value) {
				return ['center', 'left', 'right'].indexOf(value) !== -1;
			},
		},
		// 버튼 로딩
		loading: {
			type: Boolean,
			default: false,
		},
		successCallback: {
			type: Function,
			default() {
				return () => console.log('success');
			},
		},
		successMessage: {
			type: String,
			default: '확인',
		},
		showCloseButton: {
			type: Boolean,
			default: false,
		},
		showActionButton: {
			type: Boolean,
			default: true,
		},
		persistent: {
			type: Boolean,
			default: false,
		},
		maxWidth: {
			type: String,
		},
	},
	components: {
		Typography,
		Modal,
		Button,
	},
};
</script>

<style lang="scss" scoped>
.c-modal {
	&_contents_wrapper {
		&::v-deep * + * {
			margin-top: 8px;
		}
	}
}
</style>
