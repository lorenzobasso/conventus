import { ApiProperty } from '@nestjs/swagger'

import { IsString, MinLength } from 'class-validator'

export class CreateMessageDto {
  @IsString()
  @MinLength(10)
  @ApiProperty()
  title: string

  @IsString()
  @MinLength(50)
  @ApiProperty()
  description: string
}
