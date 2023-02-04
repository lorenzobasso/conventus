/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosInstance } from 'axios'

import { baseURL } from './urls'

let APIClient: AxiosInstance | null = null

const getAPIClient = () => {
	if (APIClient) return APIClient

	APIClient = axios.create({ baseURL })

	return APIClient
}

type AxiosParamsType = any

type RestAPIType = {
	get: <T>(endpoint: string, params?: AxiosParamsType) => Promise<T>
	delete: <T>(endpoint: string, params?: AxiosParamsType) => Promise<T>
	post: <T, D = any>(endpoint: string, data: D, params?: AxiosParamsType) => Promise<T>
	put: <T, D = any>(endpoint: string, data: D, params?: AxiosParamsType) => Promise<T>
	patch: <T, D = any>(endpoint: string, data: D, params?: AxiosParamsType) => Promise<T>
}

export const getRestAPI: () => RestAPIType = () => ({
	get: (enpoint, params = {}) =>
		getAPIClient()
			.get(enpoint, { params })
			.then(response => response.data),
	delete: (enpoint, params = {}) =>
		getAPIClient()
			.delete(enpoint, { params })
			.then(response => response.data),
	post: (enpoint, data, params = {}) =>
		getAPIClient()
			.post(enpoint, data, { params })
			.then(response => response.data),
	put: (enpoint, data, params = {}) =>
		getAPIClient()
			.put(enpoint, data, { params })
			.then(response => response.data),
	patch: (enpoint, data, params = {}) =>
		getAPIClient()
			.patch(enpoint, data, { params })
			.then(response => response.data),
})
