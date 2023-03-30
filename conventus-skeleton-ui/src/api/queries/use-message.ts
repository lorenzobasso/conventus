import { createQuery } from '@tanstack/svelte-query'

import API from '$api/api'
import type { Message } from '$api/api-response-types'

export const useGetMessage = () =>
	createQuery<Message, Error>({
		queryKey: ['message'],
		queryFn: API.message.get,
	})
