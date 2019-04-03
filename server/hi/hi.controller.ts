import { Controller, Get } from '@nestjs/common';
import { DB } from '../data';

@Controller('hi')
export class HiController {
    @Get()
    findAll() {
        return DB.query('SELECT * FROM components');
    }
}
