import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const quantities = {
	locations: 4,
	people: 30
} as const;

const prisma = new PrismaClient();

await prisma.engagement.deleteMany();
await prisma.person.deleteMany();
await prisma.location.deleteMany();
await prisma.event.deleteMany();

const coffee = await prisma.event.create({ data: { name: 'Coffee' } });

const locations = await prisma.$transaction(
	Array.from({ length: quantities.locations }).map(() =>
		prisma.location.create({
			data: {
				name: faker.location.city(),
				timeZone: faker.location.timeZone()
			}
		})
	)
);
console.log(`Created ${locations.length} locations`);

const people = await prisma.$transaction(
	Array.from({ length: quantities.people }).map(() => {
		const name = faker.person.firstName();
		const surname = faker.person.lastName();

		return prisma.person.create({
			data: {
				name,
				surname,
				email: `${name}.${surname}@example.com`.toLowerCase(),
				locationId: faker.helpers.arrayElement(locations).id
			}
		});
	})
);
console.log(`Created ${people.length} people`);

const engagements = await prisma.$transaction(
	people.flatMap((person) =>
		[coffee].map((event) =>
			prisma.engagement.create({ data: { personId: person.id, eventId: event.id } })
		)
	)
);
console.log(`Created ${engagements.length} engagements`);

await prisma.$disconnect();
