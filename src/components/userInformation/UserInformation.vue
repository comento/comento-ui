<template>
	<div class="c-application c-user-information" :class="[type]">
		<div v-if="$slots['avatar']" class="avatar-wrapper">
			<slot name="avatar" />
		</div>
		<div class="information-wrapper">
			<div class="name-company-wrapper">
				<div class="name-icon-wrapper">
					<div v-if="$slots['name']" class="name-wrapper">
						<slot name="name" v-bind:type="type" />
					</div>
					<div v-if="$slots['user-info']" class="user-info-wrapper">
						<slot name="user-info" />
					</div>
				</div>
			</div>

			<div class="other-wrapper" :style="[computedOtherWrapperStyle]">
				<slot name="other" />
			</div>
		</div>
	</div>
</template>

<script>
export const userInformationTypes = ['simple', 'normal', 'full'];

/**
 * @displayName c-user-information
 */
export default {
	name: 'UserInformation',
	props: {
		/**
		 * 타입(simple, normal, full)
		 */
		type: {
			type: String,
			default: 'normal',
			validator(value) {
				return userInformationTypes.includes(value);
			},
		},
	},
	computed: {
		computedOtherWrapperStyle() {
			return this.type === 'full' ? { marginTop: '4px' } : null;
		},
	},
};
</script>

<style lang="scss" scoped>
.c-user-information {
	@include flexbox();
	@include flex-direction(row);
	@include align-items(center);
	overflow: hidden;
	.name {
		&-wrapper {
			margin-right: 4px;
		}
	}
	.user-info-wrapper {
		@include flexbox();
		@include align-items(center);
		> * + * {
			margin-left: 4px;
		}
	}
	&.full {
		.name-company-wrapper {
			@include flexbox();
			@include flex-direction(row);
			@include align-items(center);
			overflow-x: inherit;
			.company {
				@include ellipsis(1);
			}
		}
		.information-wrapper {
			min-height: 44px;
		}
		.avatar-wrapper {
			margin-right: 8px;
		}
	}
	&.normal {
		.information-wrapper {
			min-height: 33px;
		}
		.avatar-wrapper {
			margin-right: 8px;
		}
	}
	&.simple {
		.avatar-wrapper {
			margin-right: 6px;
		}
	}
	.information-wrapper {
		overflow: hidden;
		@include flexbox();
		@include flex-direction(column);
		@include justify-content(center);
	}
	.avatar-wrapper {
		@include flexbox();
	}
	.name-icon-wrapper {
		position: relative;
		@include flexbox();
		@include flex-direction(row);
		@include align-items(center);
		> * + * {
			margin-right: 4px;
		}
	}
	.icon-wrapper {
		@include flexbox();
		@include align-items(center);
		padding-left: 2px;
	}
	.other-wrapper {
		display: block;
	}
}
</style>
