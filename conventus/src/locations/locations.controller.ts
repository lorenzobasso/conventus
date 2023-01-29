import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Put,
} from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'

import { CreateLocationDto } from './dto/create-location.dto'
import { UpdateLocationDto } from './dto/update-location.dto'
import { Location } from './entities/location.entity'
import { LocationsService } from './locations.service'

@Controller('locations')
@ApiTags('Locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Put()
  @ApiCreatedResponse({ type: Location, isArray: true })
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationsService.create(createLocationDto)
  }

  @Get()
  @ApiOkResponse({ type: Location })
  findAll() {
    return this.locationsService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: Location })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.locationsService.findOne(id)
  }

  @Patch(':id')
  @ApiOkResponse({ type: Location })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationsService.update(id, updateLocationDto)
  }

  @Delete(':id')
  @ApiOkResponse({ type: Location })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.locationsService.remove(id)
  }
}
