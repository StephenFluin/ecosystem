import { Controller, Get } from '@nestjs/common';

@Controller('hi')
export class HiController {
    @Get()
    findAll() {
        return 'hi';
    }
}
