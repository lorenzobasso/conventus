import { ApiProperty } from '@nestjs/swagger'

export class Location {
  @ApiProperty()
  name: string

  @ApiProperty()
  timezone: string
}
