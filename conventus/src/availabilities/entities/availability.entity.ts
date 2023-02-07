import { ApiProperty } from '@nestjs/swagger'

export class Availability {
  @ApiProperty()
  personId: number

  @ApiProperty()
  isRepeat: boolean

  @ApiProperty()
  numTimesAvailable: number

  @ApiProperty()
  numTimesSkip: number
}
