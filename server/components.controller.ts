import { Controller, Get } from '@nestjs/common';
import { DB } from './data';

@Controller('components')
export class ComponentsController {
    @Get()
    list(): Promise<any[]> {
        return DB.query('SELECT * FROM component');

    }
}
