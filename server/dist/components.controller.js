"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var data_1 = require("./data");
var ComponentsController = /** @class */ (function () {
    function ComponentsController() {
    }
    ComponentsController.prototype.list = function () {
        return data_1.DB.query('SELECT * FROM component');
    };
    __decorate([
        common_1.Get()
    ], ComponentsController.prototype, "list", null);
    ComponentsController = __decorate([
        common_1.Controller('components')
    ], ComponentsController);
    return ComponentsController;
}());
exports.ComponentsController = ComponentsController;
