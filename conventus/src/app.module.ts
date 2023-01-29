import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LocationsModule } from './locations/locations.module'
import { PeopleModule } from './people/people.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [PrismaModule, PeopleModule, LocationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
