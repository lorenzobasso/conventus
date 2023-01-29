import { ApiProperty, PartialType } from '@nestjs/swagger'

import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator'

import { CreatePersonDto } from './create-person.dto'

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string

  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string

  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ required: false })
  locationId?: number
}
