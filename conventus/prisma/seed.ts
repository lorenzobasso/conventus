import { PrismaClient } from '@prisma/client'

import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

// Number of fake db entities to create
const numPeople = 30

async function main() {
  const name = faker.address.city()
  const timezone = faker.address.timeZone()
  const location = await prisma.location.upsert({
    where: { name },
    update: {},
    create: { name, timezone },
  })

  const people = Array.from({ length: numPeople }).map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    locationId: location.id,
  }))

  for (const person of people) {
    await prisma.person.upsert({
      where: { email: person.email },
      update: {},
      create: person,
    })
  }

  console.log(`Successfully created ${numPeople} people`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
