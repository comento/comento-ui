<template>
	<Modal
		:show="show"
		:show-close-button="showCloseButton"
		:max-width="maxWidth"
		:persistent="persistent"
		:max-height="!isMobile ? '640px' : ''"
		@close="close"
	>
		<div class="c-modal--wrapper">
			<!-- title 영역 -->
			<Typography class="mb-16" type="headline5" :align="align">
				<slot name="title" />
			</Typography>

			<!-- contents 영역 -->
			<Typography type="body2" :align="align" color="gray700">
				<div class="c-modal--contents-wrapper">
					<slot name="contents" />
				</div>
			</Typography>
		</div>

		<!-- button 영역 -->
		<div v-if="showActionButton" class="mt-20">
			<Button size="large" :loading="loading" full @click="successCallback">
				{{ successMessage }}
			</Button>
		</div>
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
			default: () => {},
		},
		successMessage: {
			type: String,
			default: '확인',
		},
		showCloseButton: {
			type: Boolean,
			default: true,
		},
		showActionButton: {
			type: Boolean,
			default: false,
		},
		persistent: {
			type: Boolean,
			default: false,
		},
		maxWidth: {
			type: String,
		},
	},
	methods: {
		close() {
			this.$emit('update:show', false);
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
	&--wrapper {
		@include pc {
			max-height: calc(640px - 148px);
			overflow-y: auto;
		}
	}
	&--contents-wrapper {
		&::v-deep * + * {
			margin-top: 8px;
		}
	}
}
</style>
