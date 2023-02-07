import { getRestAPI } from './api-client'
import type {
	Availability,
	AvailabilityPatch,
	Location,
	NewPerson,
	Person,
	PersonAvailability,
} from './api-response-types'

type PeopleAPI = {
	getAll: () => Promise<Person[]>
	create: (newPerson: NewPerson) => Promise<Person>
	delete: (personId: number) => Promise<Person>
	updateAvailability: (newAvailability: AvailabilityPatch) => Promise<Availability>
	getAvailable: () => Promise<PersonAvailability[]>
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
		updateAvailability: newAvailability => getRestAPI().post('/availabilities', newAvailability),
		getAvailable: () => getRestAPI().get('/availabilities'),
	},
	locations: {
		getAll: () => getRestAPI().get('/locations'),
	},
}

export default API
