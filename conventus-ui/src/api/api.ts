import { getRestAPI } from './api-client'
import type { Person } from './api-response-types'

type PeopleAPI = {
	getAll: () => Promise<Person[]>
}

type APIType = {
	people: PeopleAPI
}

const API: APIType = {
	people: {
		getAll: () => getRestAPI().get('/people'),
	},
}

export { API }
