import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { AvailabilitiesService } from './availabilities.service'
import { CreateAvailabilityDto } from './dto/create-availability.dto'

@Controller('availabilities')
@ApiTags('Availabilities')
export class AvailabilitiesController {
  constructor(private readonly availabilitiesService: AvailabilitiesService) {}

  @Post()
  upsert(@Body() createAvailabilityDto: CreateAvailabilityDto) {
    return this.availabilitiesService.upsert(createAvailabilityDto)
  }

  @Get()
  findAll() {
    return this.availabilitiesService.findAll()
  }
}
