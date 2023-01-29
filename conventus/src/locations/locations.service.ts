import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/prisma/prisma.service'

import { CreateLocationDto } from './dto/create-location.dto'
import { UpdateLocationDto } from './dto/update-location.dto'

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createLocationDto: CreateLocationDto) {
    return this.prisma.location.create({
      data: {
        name: createLocationDto.name,
        timezone: createLocationDto.timezone,
      },
    })
  }

  findAll() {
    return this.prisma.location.findMany()
  }

  findOne(id: number) {
    return this.prisma.location.findUniqueOrThrow({ where: { id } })
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return this.prisma.location.update({
      where: { id },
      data: {
        name: updateLocationDto.name,
        timezone: updateLocationDto.timezone,
      },
    })
  }

  remove(id: number) {
    return this.prisma.location.delete({ where: { id } })
  }
}
