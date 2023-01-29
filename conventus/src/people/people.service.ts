import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/prisma/prisma.service'

import { CreatePersonDto } from './dto/create-person.dto'
import { UpdatePersonDto } from './dto/update-person.dto'

@Injectable()
export class PeopleService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPersonDto: CreatePersonDto) {
    return this.prisma.person.create({
      data: {
        firstName: createPersonDto.firstName,
        lastName: createPersonDto.lastName,
        email: createPersonDto.email,
        locationId: createPersonDto.locationId,
      },
      include: { location: true },
    })
  }

  findAll() {
    return this.prisma.person.findMany({ include: { location: true } })
  }

  findOne(id: number) {
    return this.prisma.person.findUniqueOrThrow({
      where: { id },
      include: { location: true },
    })
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return this.prisma.person.update({
      where: { id },
      data: {
        firstName: updatePersonDto.firstName,
        lastName: updatePersonDto.lastName,
        email: updatePersonDto.email,
        locationId: updatePersonDto.locationId,
      },
      include: { location: true },
    })
  }

  remove(id: number) {
    return this.prisma.person.delete({ where: { id } })
  }
}
