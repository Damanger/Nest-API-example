import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class MessageGateway {
  @WebSocketServer()
  server: Server;

  // Handle incoming messages
  @SubscribeMessage('sendMessage')
  handleMessage(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ): void {
    console.log('Received message:', message);

    // Broadcast the message to all clients (including the receiver)
    this.server.emit('receiveMessage', message);

    // Send a confirmation back to the sender
    client.emit('messageDelivered', { status: 'success', message: 'Message delivered to receiver' });
  }
}