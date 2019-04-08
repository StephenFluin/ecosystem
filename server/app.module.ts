import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { ComponentsController } from './components.controller';
import { HiController } from './hi/hi.controller';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true,
    }),
  ],
  controllers: [HiController, ComponentsController],
})
export class ApplicationModule {}
