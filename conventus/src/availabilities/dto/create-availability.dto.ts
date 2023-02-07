import { ApiProperty } from '@nestjs/swagger'

import { IsBoolean, IsInt, Min } from 'class-validator'

export class CreateAvailabilityDto {
  @IsInt()
  @Min(0)
  @ApiProperty()
  personId: number

  @IsBoolean()
  @ApiProperty()
  isRepeat: boolean

  @IsInt()
  @Min(0)
  @ApiProperty()
  numTimesAvailable: number

  @IsInt()
  @Min(0)
  @ApiProperty()
  numTimesSkip: number
}
