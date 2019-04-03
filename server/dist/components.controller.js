"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var data_1 = require("./data");
var sql_template_strings_1 = __importDefault(require("sql-template-strings"));
var ComponentsController = /** @class */ (function () {
    function ComponentsController() {
    }
    ComponentsController.prototype.list = function () {
        return data_1.DB.query(sql_template_strings_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["SELECT * FROM component"], ["SELECT * FROM component"]))));
    };
    ComponentsController.prototype.create = function (component) {
        return data_1.DB.query(sql_template_strings_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["INSERT INTO component (name, description, package, ngAdd, ngUpdate, accessible, bundleSize) VALUES (\n            ", ", \n            ", ",\n            ", ",\n            ", ",\n            ", ",\n            ", ",\n            ", "\n            )\n        "], ["INSERT INTO component (name, description, package, ngAdd, ngUpdate, accessible, bundleSize) VALUES (\n            ", ", \n            ", ",\n            ", ",\n            ", ",\n            ", ",\n            ", ",\n            ", "\n            )\n        "])), component.name, component.description, component.package, component.ngAdd, component.ngUpdate, component.accessible, component.bundleSize));
    };
    ComponentsController.prototype.update = function (id, component) {
        return data_1.DB.query(sql_template_strings_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["UPDATE component SET \n            name = ", ", \n            description = ", ",\n            package = ", ",\n            ngAdd = ", ",\n            ngUpdate = ", ",\n            accessible = ", ",\n            bundleSize = ", "\n        WHERE id = ", "\n        "], ["UPDATE component SET \n            name = ", ", \n            description = ", ",\n            package = ", ",\n            ngAdd = ", ",\n            ngUpdate = ", ",\n            accessible = ", ",\n            bundleSize = ", "\n        WHERE id = ", "\n        "])), component.name, component.description, component.package, component.ngAdd, component.ngUpdate, component.accessible, component.bundleSize, id));
    };
    __decorate([
        common_1.Get()
    ], ComponentsController.prototype, "list", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], ComponentsController.prototype, "create", null);
    __decorate([
        common_1.Put(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], ComponentsController.prototype, "update", null);
    ComponentsController = __decorate([
        common_1.Controller('components')
    ], ComponentsController);
    return ComponentsController;
}());
exports.ComponentsController = ComponentsController;
var templateObject_1, templateObject_2, templateObject_3;
