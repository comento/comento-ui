<template>
	<div class="c-application c-user-information" :class="[type]">
		<div v-if="$slots['avatar']" class="avatar-wrapper">
			<slot name="avatar" />
		</div>
		<div class="information-wrapper">
			<div class="name-company-wrapper">
				<div class="name-icon-wrapper">
					<Typography :type="computedNameTypography" color="gray850" font-weight="bold" class="name">
						<slot name="name" />
					</Typography>
					<div ref="icon" class="icon-wrapper">
						<slot name="icon" />
					</div>
				</div>

				<Typography
					v-if="isShowCompany"
					ref="company"
					:type="computedCompanyTypography"
					color="gray500"
					class="company"
				>
					<slot name="company" />
				</Typography>
			</div>

			<Typography v-if="isShowOther" class="other-wrapper" type="caption1" color="gray400">
				<slot name="other" />
			</Typography>
		</div>
	</div>
</template>

<script>
import Typography from '@/src/components/elements/core/typography/Typography';
export const userInformationTypes = ['simple', 'normal', 'full'];

export default {
	name: 'UserInformation',
	props: {
		type: {
			type: String,
			default: 'normal',
			validator(value) {
				return userInformationTypes.includes(value);
			},
		},
	},
	computed: {
		computedNameTypography() {
			return this.type === 'full' ? 'body1' : 'body2';
		},
		computedCompanyTypography() {
			return this.type === 'full' ? 'body2' : 'caption1';
		},
		isShowCompany() {
			return this.type !== 'simple';
		},
		isShowOther() {
			return this.$slots['other'] && this.type === 'full';
		},
	},
	mounted() {
		if (this.type === 'full') {
			this.$nextTick(() => {
				const $company = this.$refs.company.$el;
				const $icon = this.$refs.icon;
				$icon.style.right = `-${$icon.offsetWidth + $company.offsetWidth}px`;
			});
		}
	},
	components: { Typography },
};
</script>

<style lang="scss" scoped>
.c-user-information {
	@include flexbox();
	@include flex-direction(row);
	@include align-items(center);
	overflow: hidden;
	padding: 2px 0;
	&.full {
		.icon-wrapper {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
		.name-company-wrapper {
			@include flexbox();
			@include flex-direction(row);
			@include align-items(center);
			overflow-x: inherit;
			.name {
				margin-right: 4px;
				@include ellipsis(1);
			}
			.company {
				@include ellipsis(1);
				margin-right: 14px;
			}
		}
		.information-wrapper {
			min-height: 44px;
		}
	}
	&.normal {
		.information-wrapper {
			min-height: 33px;
		}
	}
	.information-wrapper {
		overflow: hidden;
	}
	.avatar-wrapper {
		margin-right: 6px;
		@include flexbox();
	}
	.name-company-wrapper {
		position: relative;
	}
	.name-icon-wrapper {
		position: relative;
		@include flexbox();
		@include flex-direction(row);
	}
	.icon-wrapper {
		padding-left: 2px;
	}
	.other-wrapper {
		margin-top: 4px;
		display: block;
		::v-deep.c-chip-group {
			display: inline-block;
			vertical-align: text-bottom;
			margin-left: 2px;
		}
	}
}
</style>
