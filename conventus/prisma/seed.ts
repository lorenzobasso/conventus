import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

// Number of fake db entities to create
const numToCreate = 30

async function main() {
  const people = Array.from({ length: numToCreate }).map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  }))

  for (const person of people) {
    await prisma.person.upsert({
      where: { email: person.email },
      update: {},
      create: person,
    })
  }

  console.log(`Successfully created ${numToCreate} people`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
