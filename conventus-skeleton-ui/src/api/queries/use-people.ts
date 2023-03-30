import API from '$api/api'
import type { Person } from '$api/api-response-types'
import { errorToastSettings } from '$atoms/alert-toast'

import { toastStore } from '@skeletonlabs/skeleton'
import { createMutation, createQuery, useQueryClient } from '@tanstack/svelte-query'

export const useGetPeople = () =>
	createQuery<Person[], Error>({
		queryKey: ['people'],
		queryFn: API.people.getAll,
	})

export const useCreatePerson = () => {
	const queryClient = useQueryClient()

	return createMutation({
		mutationFn: API.people.create,
		onSuccess: (newPerson: Person) => {
			queryClient.invalidateQueries({ queryKey: ['people'] })
			queryClient.setQueryData(['people'], (oldData: unknown) => [
				...(oldData as Person[]),
				newPerson,
			])
		},
		onError: () => {
			toastStore.trigger({
				message: 'Failed to create the person',
				...errorToastSettings,
			})
		},
	})
}

export const useDeletePerson = () => {
	const queryClient = useQueryClient()

	return createMutation({
		mutationFn: (personId: number) => API.people.delete(personId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['people'] })
		},
		onError: () => {
			toastStore.trigger({
				message: 'Failed to delete the person',
				...errorToastSettings,
			})
		},
	})
}
