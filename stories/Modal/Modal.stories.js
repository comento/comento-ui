import { storiesOf } from '@storybook/vue';
import Modal from '@/src/Components/Message/Modal';

storiesOf('Modal', module)
	.add('Basic Modal', () => ({
		components: { Modal },
		template: `<div style="width: 100%;display: flex; justify-content: space-between">
			<Modal :show="true">
				<template v-slot:title>
					Basic modal
				</template>
				<template v-slot:contents>
					본문을 작성하세요.
				</template>
				<template v-slot:sub-contents>
					문단을 분리할 때에는 margin:8px로 구분합니다.
				</template>
			</Modal>
    </div>`,
	}))
	.add('WithForm Modal', () => ({
		components: { Modal },
		template: `<div style="width: 100%;display: flex; justify-content: space-between">
			<Modal :show="true" type="withForm" :form-validator="val => val === '제출합니다'">
				<template v-slot:title>
					Modal with form
				</template>
				<template v-slot:contents>
					본문을 작성하세요.
				</template>
				<template v-slot:sub-contents>
					문단을 분리할 때에는 margin:8px로 구분합니다.
				</template>
			</Modal>
	</div>`,
	}))
	.add('Permission Modal', () => ({
		components: { Modal },
		template: `<div style="width: 100%;display: flex; justify-content: space-between">
			<Modal :show="true" type="permission">
				<template v-slot:title>
					Permission modal
				</template>
				<template v-slot:contents>
					본문은 없거나 한 줄만 가능합니다.
				</template>

			</Modal>
	</div>`,
	}))
	.add('test Modal', () => ({
		components: { Modal },
		template: `<div style="width: 100%;display: flex; justify-content: space-between">
			<Modal :show="true" :form-validator="val => val === '제출합니다'">
				<template v-slot:title>
					Modal with form
				</template>
				<template v-slot:contents>
					본문을 작성하세요.
				</template>
				<template v-slot:sub-contents>
					문단을 분리할 때에는 margin:8px로 구분합니다.
				</template>
			
				<template v-slot:other-contents>
				<div>여기에 기존에 없던것을 추가 합니다.</div>
				</template>
			</Modal>
	</div>`,
	}));
