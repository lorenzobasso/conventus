import { Module } from '@nestjs/common'

import { PrismaModule } from 'src/prisma/prisma.module'

import { AvailabilitiesController } from './availabilities.controller'
import { AvailabilitiesService } from './availabilities.service'

@Module({
  controllers: [AvailabilitiesController],
  providers: [AvailabilitiesService],
  imports: [PrismaModule],
})
export class AvailabilitiesModule {}
