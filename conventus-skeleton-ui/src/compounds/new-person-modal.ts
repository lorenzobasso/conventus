import { type ModalSettings, modalStore } from '@skeletonlabs/skeleton'

import type { NewPerson } from '$api/api-response-types'
import NewPersonModal from '$compounds/NewPersonModal.svelte'

export const openCreatePersonModal = (response: (data: NewPerson) => void) =>
	modalStore.trigger({
		type: 'component',
		title: 'Create a new person',
		component: {
			ref: NewPersonModal,
			props: {},
		},
		response,
	} as ModalSettings)
