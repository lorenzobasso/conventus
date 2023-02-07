export type Location = {
	id: number
	name: string
	timezone: string
}

export type AvailabilityPatch = {
	personId: number
	isRepeat: boolean
	numTimesAvailable: number
	numTimesSkip: number
}

export type Availability = AvailabilityPatch & {
	id: number
	createdAt: string
}

type PersonCommon = {
	firstName: string
	lastName: string
	email: string
}

export type NewPerson = PersonCommon & {
	locationId: number
}

export type Person = NewPerson & {
	id: number
	locationId?: number
	location?: Location
	availability?: Availability
}

export type PersonAvailability = Availability & {
	person: PersonCommon & { id: number; locationId: number }
}
