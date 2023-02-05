import API from '$api/api'
import type { Person } from '$api/api-response-types'

import { createQuery } from '@tanstack/svelte-query'

export const useGetPeople = () =>
	createQuery<Person[], Error>({ queryKey: ['people'], queryFn: API.people.getAll })
