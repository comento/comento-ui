<template>
	<article class="c-application c-empty-box" :class="full && 'full'">
		<div v-if="type === 'emphasized'" class="c-empty-box--emphasized-container">
			<CBox :paddings="[40, 16, 40, 16]">
				<CTypography type="body1" color="gray700" align="center" :font-weight="600">
					<slot name="title" />
				</CTypography>
				<CTypography class="mt-4" type="body2" color="gray500" align="center">
					<slot name="contents" />
				</CTypography>
				<a v-if="external" :href="to" class="c-empty-box--emphasized-button">
					<CButton v-if="$slots['link']" color="light-primary" size="large" @click="onClickButton">
						<slot name="link" />
					</CButton>
				</a>
				<router-link v-else :to="to" class="c-empty-box--emphasized-button">
					<CButton v-if="$slots['link']" color="light-primary" size="large" @click="onClickButton">
						<slot name="link" />
					</CButton>
				</router-link>
			</CBox>
		</div>
		<div v-if="type === 'simple'" class="c-empty-box--simple-container">
			<CTypography type="caption1" color="gray600" align="center" font-weight="semi-bold">
				<slot name="title" />
			</CTypography>
			<CTypography type="caption1" color="gray600" align="center" font-weight="semi-bold">
				<slot name="contents" />
			</CTypography>
			<CLinkButton
				v-if="$slots['link']"
				:to="to"
				:target="target"
				class="c-empty-box--link"
				type="caption1"
				:external="external"
				@click="onClickButton"
			>
				<slot name="link" />
			</CLinkButton>
		</div>
	</article>
</template>

<script>
import CBox from '@/components/components/general/CBox.vue';
import CTypography from '@/components/elements/core/typography/CTypography.vue';
import CLinkButton from '@/components/components/general/button/CLinkButton.vue';
import CButton from '@/components/components/general/button/CButton.vue';
import { defineComponent } from 'vue';

export const Types = ['simple', 'emphasized'];

export default defineComponent({
	name: 'CEmptyBox',
	props: {
		/**
		 * 타입(simple, emphasized)
		 */
		type: {
			type: String,
			default: 'simple',
			validator(value) {
				const isValid = Types.indexOf(value) !== -1;
				if (!isValid) {
					console.error(`${value} is not a valid name of the empty box type`);
				}
				return isValid;
			},
		},
		to: {
			type: String,
		},
		target: {
			type: String,
			default: '_self',
		},
		external: {
			type: Boolean,
			default: false,
		},
		full: {
			type: Boolean,
			default: true,
		},
	},
	emits: ['click-button'],
	setup(props, { emit }) {
		const onClickButton = () => emit('click-button');
		return {
			onClickButton,
		};
	},
	components: {
		CBox,
		CTypography,
		CLinkButton,
		CButton,
	},
});
</script>

<style lang="scss" scoped>
.c-empty-box {
	display: block;

	&.full {
		width: 100%;
	}

	&--link {
		@include flexbox();
		@include justify-content(center);
		margin-top: 14px;
	}

	&--emphasized {
		padding: 40px 16px;
		&-button {
			@include flexbox();
			@include justify-content(center);
			margin-top: 16px;
		}
	}

	& a {
		text-decoration: none;
	}
}
</style>
