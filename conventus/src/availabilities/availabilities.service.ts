import { BadRequestException, Injectable } from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger'

import { PrismaService } from 'src/prisma/prisma.service'

import { CreateAvailabilityDto } from './dto/create-availability.dto'
import { Availability } from './entities/availability.entity'

@Injectable()
export class AvailabilitiesService {
  constructor(private readonly prisma: PrismaService) {}

  @ApiCreatedResponse({ type: Availability })
  upsert(createAvailabilityDto: CreateAvailabilityDto) {
    const { personId, isRepeat, numTimesAvailable, numTimesSkip } =
      createAvailabilityDto
    const data = { personId, isRepeat, numTimesAvailable, numTimesSkip }

    if (isRepeat && numTimesAvailable) {
      throw new BadRequestException(
        'Cannot set both isRepeat and numTimesAvailable',
      )
    } else if (numTimesAvailable && numTimesSkip) {
      throw new BadRequestException('Cannot skip when isRepeat=false')
    }

    return this.prisma.availability.upsert({
      where: { personId },
      update: { ...data },
      create: { ...data },
    })
  }

  @ApiOkResponse({ type: Availability, isArray: true })
  findAll() {
    return this.prisma.availability.findMany({
      where: {
        OR: [{ isRepeat: true }, { numTimesAvailable: { gt: 0 } }],
      },
      include: { person: true },
    })
  }
}
