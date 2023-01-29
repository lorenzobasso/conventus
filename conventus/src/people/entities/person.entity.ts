import { ApiProperty } from '@nestjs/swagger'

export class Person {
  @ApiProperty()
  firstName: string

  @ApiProperty()
  lastName: string

  @ApiProperty()
  email: string

  @ApiProperty({ required: false })
  locationId?: number
}
