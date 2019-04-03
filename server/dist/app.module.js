"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var ng_universal_1 = require("@nestjs/ng-universal");
var path_1 = require("path");
var hi_controller_1 = require("./hi/hi.controller");
var components_controller_1 = require("./components.controller");
var ApplicationModule = /** @class */ (function () {
    function ApplicationModule() {
    }
    ApplicationModule = __decorate([
        common_1.Module({
            imports: [
                ng_universal_1.AngularUniversalModule.forRoot({
                    viewsPath: path_1.join(process.cwd(), 'dist/browser'),
                    // This is ignored?!?!?!?!? TODO
                    bundle: require('../../dist/server/main')
                })
            ],
            controllers: [hi_controller_1.HiController, components_controller_1.ComponentsController]
        })
    ], ApplicationModule);
    return ApplicationModule;
}());
exports.ApplicationModule = ApplicationModule;
