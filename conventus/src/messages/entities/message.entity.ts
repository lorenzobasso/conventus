import { ApiProperty } from '@nestjs/swagger'

export class Message {
  @ApiProperty()
  title: string

  @ApiProperty()
  description: string
}
