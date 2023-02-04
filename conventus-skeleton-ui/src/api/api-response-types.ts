export type Location = {
	id: number
	name: string
	timezone: string
}

export type Person = {
	id: number
	firstName: string
	lastName: string
	email: string
	locationId?: number
	location?: Location
}
