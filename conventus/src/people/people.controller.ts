import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
} from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'

import { CreatePersonDto } from './dto/create-person.dto'
import { UpdatePersonDto } from './dto/update-person.dto'
import { Person } from './entities/person.entity'
import { PeopleService } from './people.service'

@Controller('people')
@ApiTags('People')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Put()
  @ApiCreatedResponse({ type: Person })
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.peopleService.create(createPersonDto)
  }

  @Get()
  @ApiOkResponse({ type: Person, isArray: true })
  findAll() {
    return this.peopleService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: Person })
  findOne(@Param('id') id: string) {
    return this.peopleService.findOne(+id)
  }

  @Patch(':id')
  @ApiOkResponse({ type: Person })
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.peopleService.update(+id, updatePersonDto)
  }

  @Delete(':id')
  @ApiOkResponse({ type: Person })
  remove(@Param('id') id: string) {
    return this.peopleService.remove(+id)
  }
}
