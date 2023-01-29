import { Module } from '@nestjs/common'

import { PrismaModule } from 'src/prisma/prisma.module'

import { LocationsController } from './locations.controller'
import { LocationsService } from './locations.service'

@Module({
  controllers: [LocationsController],
  providers: [LocationsService],
  imports: [PrismaModule],
})
export class LocationsModule {}
