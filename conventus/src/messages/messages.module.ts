import { Module } from '@nestjs/common'

import { PrismaModule } from 'src/prisma/prisma.module'

import { MessagesController } from './messages.controller'
import { MessagesService } from './messages.service'

@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
  imports: [PrismaModule],
})
export class MessagesModule {}
