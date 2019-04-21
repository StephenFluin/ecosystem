import * as mysql from 'mysql2/promise';
import { SQLStatement } from 'sql-template-strings';
import { config } from './config';

export class DatabaseConnection {
    connection: mysql.Connection;
    constructor() {
      mysql.createConnection(config.db)
      .then(connection => this.connection = connection);

    }
    query(statement: SQLStatement) {

        return this.connection.query(statement)
        .then(result => result[0])
        .catch(error => console.log(error));
    }
    execute(statement: SQLStatement) {
      return this.connection.execute(statement);
    }
}
export const DB = new DatabaseConnection();
