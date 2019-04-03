import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { HiController } from './hi/hi.controller';
import { ComponentsController } from './components.controller';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      // This is ignored?!?!?!?!? TODO
      bundle: require('../../dist/server/main')
    })
  ],
  controllers: [HiController, ComponentsController]
})
export class ApplicationModule {}
