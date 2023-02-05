export type Location = {
	id: number
	name: string
	timezone: string
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
}
