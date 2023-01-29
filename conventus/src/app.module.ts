import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PeopleModule } from './people/people.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [PrismaModule, PeopleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
