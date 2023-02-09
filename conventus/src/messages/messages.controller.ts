import { Body, Controller, Get, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { CreateMessageDto } from './dto/create-message.dto'
import { MessagesService } from './messages.service'

@Controller('messages')
@ApiTags('Message')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Put()
  upsert(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.upsert(createMessageDto)
  }

  @Get()
  find() {
    return this.messagesService.find()
  }
}
