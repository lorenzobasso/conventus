import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AvailabilitiesModule } from './availabilities/availabilities.module'
import { LocationsModule } from './locations/locations.module'
import { MessagesModule } from './messages/messages.module'
import { PeopleModule } from './people/people.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [
    PrismaModule,
    PeopleModule,
    LocationsModule,
    AvailabilitiesModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
