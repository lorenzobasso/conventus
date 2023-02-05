import API from '$api/api'
import type { Person } from '$api/api-response-types'

import { createMutation, createQuery, useQueryClient } from '@tanstack/svelte-query'

export const useGetPeople = () =>
	createQuery<Person[], Error>({ queryKey: ['people'], queryFn: API.people.getAll })

export const useCreatePerson = () => {
	const queryClient = useQueryClient()

	return createMutation({
		mutationFn: API.people.create,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['people'] })
		},
	})
}
