import { Controller, Post, Body, Get } from '@nestjs/common';

let storedMessage: string = '';

@Controller('message')
export class MessageController {
    @Post()
    receiveMessage(@Body('message') message: string): string {
        storedMessage = message;
        console.log('Received message:', message);
        return `Message received: ${message}`;
    }

    @Get()
    getMessage(): string {
        return storedMessage;
    }
}