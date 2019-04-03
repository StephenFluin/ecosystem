"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var data_1 = require("../data");
var HiController = /** @class */ (function () {
    function HiController() {
    }
    HiController.prototype.findAll = function () {
        return data_1.DB.query('SELECT * FROM components');
    };
    __decorate([
        common_1.Get()
    ], HiController.prototype, "findAll", null);
    HiController = __decorate([
        common_1.Controller('hi')
    ], HiController);
    return HiController;
}());
exports.HiController = HiController;
