import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/prisma/prisma.service'

import { CreateMessageDto } from './dto/create-message.dto'

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async upsert(createMessageDto: CreateMessageDto) {
    const oldMessage = await this.prisma.message.findFirst()
    const data = {
      title: createMessageDto.title,
      description: createMessageDto.description,
    }

    return this.prisma.message.upsert({
      create: data,
      update: data,
      where: { id: oldMessage?.id ?? 1 },
    })
  }

  find() {
    return this.prisma.message.findFirst()
  }
}
