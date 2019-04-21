import { Controller, Get } from '@nestjs/common';
import { DB } from '../data';

@Controller('hi')
export class HiController {
  @Get()
  findAll() {
    // I had to explicitly cast this to any for some reason
    return DB.query('SELECT * FROM component' as any);
  }
}
