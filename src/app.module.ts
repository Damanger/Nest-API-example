import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessageGateway } from './message/message.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [MessageGateway],
})
export class AppModule {}