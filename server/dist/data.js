"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite = __importStar(require("sqlite"));
var DatabaseConnection = /** @class */ (function () {
    function DatabaseConnection() {
        var _this = this;
        var dbPromise = sqlite.open('ecosystem.sqlite');
        dbPromise.then(function (db) {
            _this.db = db;
            _this.db.run("CREATE TABLE IF NOT EXISTS component (\n                id INTEGER PRIMARY KEY,\n                name TEXT, \n                description TEXT,\n                package TEXT,\n                bundleSize TEXT,\n                accessible TEXT, \n                ngAdd TEXT,\n                ngUpdate TEXT\n                )");
        });
    }
    DatabaseConnection.prototype.query = function (statement) {
        return this.db.all(statement);
    };
    return DatabaseConnection;
}());
exports.DatabaseConnection = DatabaseConnection;
exports.DB = new DatabaseConnection();
