/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosInstance } from 'axios'

import { baseURL } from './urls'

type AxiosParamsType = any

type RestAPIType = {
	get: <T>(endpoint: string, params?: AxiosParamsType) => Promise<T>
}

let APIClient: AxiosInstance | null = null

const getAPIClient = () => {
	if (APIClient) return APIClient

	APIClient = axios.create({ baseURL })

	return APIClient
}

export const getRestAPI: () => RestAPIType = () => ({
	get: (enpoint, params = {}) =>
		getAPIClient()
			.get(enpoint, { params })
			.then(response => response.data),
})
