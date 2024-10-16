import { Controller, Get, Post, Body } from '@nestjs/common';
import { APIService } from './api.service';

@Controller('api')
export class APIController {
    constructor(private readonly itemsService: APIService) {}

    @Get('hello')
    async getHello() {
        return this.itemsService.getHello();
    }

    @Post()
    async createItem(@Body() item: { id: number; name: string }) {
        return this.itemsService.createItem(item);
    }
}
