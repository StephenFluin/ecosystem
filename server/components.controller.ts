import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { DB } from './database-connection';
import SQL from 'sql-template-strings';

@Controller('components')
export class ComponentsController {
    @Get()
    list(): Promise<any> {
        return DB.query(SQL`SELECT * FROM component`);

    }

    @Post()
    create(@Body() component): Promise<any> {
        return DB.execute(SQL`INSERT INTO component (name, description, package, ngAdd, ngUpdate, \`accessible\`, bundleSize) VALUES (
            ${component.name},
            ${component.description},
            ${component.package},
            ${component.ngAdd},
            ${component.ngUpdate},
            ${component.accessible},
            ${component.bundleSize}
            )
        `
        );
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() component): Promise<any> {
        return DB.query(SQL`UPDATE component SET
            name = ${component.name},
            description = ${component.description},
            package = ${component.package},
            ngAdd = ${component.ngAdd},
            ngUpdate = ${component.ngUpdate},
            \`accessible\` = ${component.accessible},
            bundleSize = ${component.bundleSize}
        WHERE id = ${id}
        `
        );
    }
}
