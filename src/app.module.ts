import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessageController } from './message/message.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [MessageController],
  providers: [],
})
export class AppModule {}