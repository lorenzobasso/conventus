import { getRestAPI } from './api-client'
import type { Location, NewPerson, Person } from './api-response-types'

type PeopleAPI = {
	getAll: () => Promise<Person[]>
	create: (newPerson: NewPerson) => Promise<Person>
	delete: (personId: number) => Promise<Person>
}

type LocationsAPI = {
	getAll: () => Promise<Location[]>
}

type APIType = {
	people: PeopleAPI
	locations: LocationsAPI
}

const API: APIType = {
	people: {
		getAll: () => getRestAPI().get('/people'),
		create: newPerson => getRestAPI().put('/people', newPerson),
		delete: personId => getRestAPI().delete(`/people/${personId}`),
	},
	locations: {
		getAll: () => getRestAPI().get('/locations'),
	},
}

export default API
