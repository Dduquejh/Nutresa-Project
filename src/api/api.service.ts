import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class APIService {
    private readonly apiUrl = 'http://127.0.0.1:8000'; // URL del backend FastAPI

    async getHello() {
        const response = await axios.get(`${this.apiUrl}/`);
        return response.data;
    }

    async createItem(item: { id: number; name: string }) {
        const response = await axios.post(`${this.apiUrl}/items/`, item);
        return response.data;
    }
}
