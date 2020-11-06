import { storiesOf } from '@storybook/vue';
import BasicModal from '@/src/Components/Message/Modal/BasicModal';
import WithFormModal from '@/src/Components/Message/Modal/WithFormModal';
import PermissionModal from '@/src/Components/Message/Modal/PermissionModal';
import FullscreenModal from '@/src/Components/Message/Modal/FullscreenModal';
import Input from '@/src/DataEntry/Input';
import Button from '@/src/Components/Button/Button';

storiesOf('Modal', module)
	.add('BasicModal', () => ({
		components: { BasicModal },
		template: `
			<div style="width: 100%; display: flex; justify-content: space-between">
				<BasicModal :show="true" :show-close-button="true" :persistent="true">
					<template v-slot:title>
						Basic Modal
					</template>
					<template v-slot:contents>
						<div>본문을 작성하세요.</div>
						<div>문단을 분리할 때에는 margin:8px로 구분합니다.</div>
					</template>
				</BasicModal>
			</div>`,
	}))
	.add('WithFormModal', () => ({
		components: { WithFormModal, Input, Button },
		template: `
			<div style="width: 100%; display: flex; justify-content: space-between">
				<WithFormModal :show="true">
					<template v-slot:title>
						Modal with form
					</template>
					<template v-slot:contents>
						<div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between" class="mb-12">
							<Input type="underlined" placeholder="underlined input: 버튼 height: 36px" full class="mr-4" />
							<Button type="outlined">버튼1</Button>
						</div>
						<div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
							<Input full placeholder="outlined input: 버튼 height 40px" class="mr-4" />
							<Button type="outlined">버튼2</Button>
						</div>
					</template>
				</WithFormModal>
			</div>`,
	}))
	.add('PermissionModal', () => ({
		components: { PermissionModal },
		template: `
			<div style="width: 100%; display: flex; justify-content: space-between">
				<PermissionModal :show="true">
					<template v-slot:title>
						Permission modal
					</template>
					<template v-slot:contents>
						본문은 없거나 한 줄만 가능합니다.
					</template>
				</PermissionModal>
			</div>`,
	}))
	.add('FullscreenModal', () => ({
		components: { FullscreenModal },
		template: `
			<div style="width: 100%; display: flex; justify-content: space-between">
				<FullscreenModal :show="true">
					Fullscreen Modal
				</FullscreenModal>
			</div>`,
	}));
