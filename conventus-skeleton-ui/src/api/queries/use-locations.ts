import API from '$api/api'
import type { Location } from '$api/api-response-types'

import { createQuery } from '@tanstack/svelte-query'

export const useGetLocations = () =>
	createQuery<Location[], Error>({ queryKey: ['locations'], queryFn: API.locations.getAll })
