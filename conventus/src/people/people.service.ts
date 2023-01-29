import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/prisma/prisma.service'

import { CreatePersonDto } from './dto/create-person.dto'
import { UpdatePersonDto } from './dto/update-person.dto'

@Injectable()
export class PeopleService {
  constructor(private prisma: PrismaService) {}
  create(createPersonDto: CreatePersonDto) {
    return 'This action adds a new person'
  }

  findAll() {
    return this.prisma.person.findMany()
  }

  findOne(id: number) {
    return this.prisma.person.findUniqueOrThrow({ where: { id } })
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`
  }

  remove(id: number) {
    return `This action removes a #${id} person`
  }
}
