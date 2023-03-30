import { createQuery } from '@tanstack/svelte-query'

import API from '$api/api'
import type { Location } from '$api/api-response-types'

export const useGetLocations = () =>
	createQuery<Location[], Error>({
		queryKey: ['locations'],
		queryFn: API.locations.getAll,
	})
