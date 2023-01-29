import { ApiProperty, PartialType } from '@nestjs/swagger'

import { IsNotEmpty, IsString } from 'class-validator'

import { CreateLocationDto } from './create-location.dto'

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  timezone: string
}
