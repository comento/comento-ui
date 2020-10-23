<template>
	<div v-show="sync_show" class="c-application c-modal_mask" @click="close">
		<div class="c-modal_container" :class="[computedType, computedFullscreen]" @click.stop>
			<template v-if="fullscreen">
				<slot name="fullscreen-content"></slot>
			</template>
			<template v-else>
				<!--title 영역-->
				<Typography v-if="type !== 'permission'" class="mb-16" type="headline5" :align="align">
					<slot name="title"> </slot>
				</Typography>
				<Typography v-else class="mb-8" type="body1" :align="align">
					<slot name="title"> </slot>
				</Typography>
				<!--contents 영역-->
				<Typography class="mb-8" type="body2" :align="align" color="gray700">
					<div class="c-modal_contents_wrapper">
						<slot name="contents"> </slot>
					</div>
				</Typography>
				<!--sub-contents 영역-->
				<Typography v-if="type !== 'permission'" class="mb-20" type="body2" :align="align" color="gray700">
					<slot name="sub-contents"> </slot>
				</Typography>
				<!--textField 영역-->
				<Input
					v-if="type === 'withForm'"
					:value.sync="checkMessage"
					class="text-center mb-24"
					float="none"
					align="center"
					:placeholder="placeholder"
				/>
				<!--기타 영역-->
				<template>
					<slot name="other-contents"></slot>
				</template>
				<!--Button 영역-->
				<Button
					v-if="type !== 'permission'"
					size="large"
					:disabled="type === 'withForm' && !canSubmit"
					:loading="loading"
					full
					@click="successCallback"
				>
					{{ successMessage }}
				</Button>
				<template v-else>
					<div class="c-modal_button_group">
						<div class="c-modal_cancel_button c-pointer" @click="close">
							<Typography type="body1" :color="leftButtonColor" align="center">취소</Typography>
						</div>
						<div class="c-modal_confirm_button c-pointer" @click="successCallback">
							<Typography type="body1" :color="rightButtonColor" align="center">{{
								successMessage
							}}</Typography>
						</div>
					</div>
				</template>
			</template>
		</div>
	</div>
</template>

<script>
import Typography from '@/src/Elements/Core/Typography/Typography';
import Button from '@/src/Components/Button/Button';
import Input from '@/src/DataEntry/Input';
export default {
	name: 'Modal',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: '제목',
		},
		contents: {
			type: String,
			default: '컨텐츠',
		},
		// default, withForm, permission
		type: {
			type: String,
			default: 'default',
		},
		placeholder: {
			type: String,
			default: 'placeholder',
			validator(value) {
				return typeof value === 'string';
			},
		},
		formValidator: {
			type: Function,
			validator(value) {
				return typeof value === 'function';
			},
		},
		leftButtonColor: {
			type: String,
			default: 'gray600',
		},
		rightButtonColor: {
			type: String,
			default: 'gray600',
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
		align: {
			type: String,
			default: 'center',
		},
		fullscreen: {
			type: Boolean,
			default: false,
		},
		// 버튼 로딩
		loading: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			checkMessage: null,
		};
	},
	computed: {
		sync_show: {
			get() {
				return this.show;
			},
		},
		canSubmit() {
			return this.formValidator(this.checkMessage);
		},
		computedType() {
			return this.type;
		},
		computedFullscreen() {
			return this.fullscreen ? 'fullscreen' : '';
		},
	},
	mounted() {
		document.addEventListener('keydown', e => {
			if (this.show && e.keyCode === 27) {
				this.close();
			}
		});
	},
	methods: {
		close() {
			this.checkMessage = null;
			this.$emit('update:show', false);
		},
	},
	components: { Input, Button, Typography },
};
</script>

<style scoped lang="scss">
/*@import '@/assets/style/base/main';*/

.c-modal {
	&_contents {
		&_wrapper {
			&::v-deep * + * {
				margin-top: 8px;
			}
		}
	}
	&_mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		transition: opacity 0.3s ease;
	}
	&_container {
		min-width: 343px;
		width: auto;
		max-width: 520px;
		margin: 0 auto;
		padding: 40px 32px;
		background-color: $white;
		border-radius: 4px;
		/*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);*/
		/*transition: all 0.3s ease;*/
		/*font-family: Helvetica, Arial, sans-serif;*/
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		&.permission {
			padding: 32px 32px 0 32px;
		}
		@include pc {
			min-width: 420px;
		}
		&.fullscreen {
			width: 100%;
			height: 100%;
			border-radius: 0;
			padding: 0;
		}
	}
	&_button {
		&_group {
			display: flex;
			border-top: 1px solid $gray200;
			margin: 32px -32px 0 -32px;
			height: 46px;
		}
	}
	&_cancel_button,
	&_confirm_button {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&_cancel_button {
		border-right: 1px solid $gray200;
	}
}
@media (max-width: 480px) {
	.c-modal-container {
		width: 90% !important;
		min-width: 90%;
		/*모바일 & 액션이 있을 경우 (하단에서 올라오는 모션) type=footerMotion 넘기면 됨*/
		&.mobile-action {
			padding: 28px 26px 32px 26px;
			border-radius: 16px 16px 0 0;
			width: 100% !important;
			min-width: 100% !important;
			bottom: 0;
			top: auto;
			left: 0;
			transform: translate(0, 0);
			height: auto;
		}
	}
}
</style>
