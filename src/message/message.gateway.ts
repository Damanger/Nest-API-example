import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class MessageGateway {
  @WebSocketServer()
  server: Server;

  // Handle incoming messages
  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() message: string): void {
    console.log('Received message:', message);
    this.server.emit('receiveMessage', message);
  }
}