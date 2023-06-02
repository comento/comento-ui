<template>
	<div>
		<div class="c-application c-table" :class="classes">
			<!-- head -->
			<div v-if="$slots['head']" class="c-table--head">
				<slot name="head" />
			</div>

			<!-- body -->
			<slot v-if="$slots['body']" name="body" />
		</div>

		<!-- empty -->
		<div v-if="$slots['empty']" class="c-table--empty">
			<slot name="empty" />
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export const cursors = ['pointer', 'default'];

export default defineComponent({
	name: 'CTable',
	props: {
		/**
		 * 커서 모양(pointer, default)
		 */
		cursor: {
			type: String,
			default: 'default',
			validator(value) {
				return cursors.indexOf(value) !== -1;
			},
		},
	},
	computed: {
		classes() {
			return [this.computedCursor];
		},
		computedCursor() {
			return `c-${this.cursor}`;
		},
	},
});
</script>

<style lang="scss" scoped>
$tablePaddingX: 12px;

.c-table {
	display: table;
	width: 100%;
	table-layout: auto;
	border-collapse: collapse;

	&--head {
		display: table-row;
		text-align: center;
		border-bottom: 1px solid $gray200;

		> * {
			@include caption1();
			color: $gray400 !important;
			display: table-cell;
			padding: 12px 6px;
			&:first-child {
				padding-left: $tablePaddingX;
			}
			&:last-child {
				padding-right: $tablePaddingX;
			}
		}
	}

	// table body
	> ul {
		display: table-row;
		border-bottom: 1px solid $gray100;

		> li {
			display: table-cell;
			text-align: center;
			vertical-align: middle;
			padding: 18px 6px;
			&:first-child {
				padding-left: $tablePaddingX;
			}
			&:last-child {
				padding-right: $tablePaddingX;
			}

			> div,
			button {
				display: block;
			}
		}
	}

	&.c-pointer {
		> ul > li {
			cursor: pointer;
		}
	}

	&--empty {
		padding: 40px 0;
		@include flexbox();
		@include justify-content(center);
	}
}
</style>
