import { Module } from '@nestjs/common';
import { SupportModule } from 'micro-support';
import { DocumentsController } from './documents.controller';
import { GatewayController } from './gateway.controller';
import { UsersController } from './users.controller';

@Module({
  imports: [SupportModule],
  controllers: [DocumentsController, GatewayController, UsersController],
  providers: [],
})
export class GatewayModule {}
