import { Module } from '@nestjs/common'

import { PrismaModule } from 'src/prisma/prisma.module'

import { PeopleController } from './people.controller'
import { PeopleService } from './people.service'

@Module({
  controllers: [PeopleController],
  providers: [PeopleService],
  imports: [PrismaModule],
})
export class PeopleModule {}
