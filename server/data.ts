import * as sqlite from 'sqlite';
import { SQLStatement } from 'sql-template-strings';

export class DatabaseConnection {
    db;
    constructor() {
        const dbPromise = sqlite.open('ecosystem.sqlite');
        dbPromise.then(db=> {
            this.db = db
            this.db.run(`CREATE TABLE IF NOT EXISTS component (
                id INTEGER PRIMARY KEY,
                name TEXT, 
                description TEXT,
                package TEXT,
                bundleSize TEXT,
                accessible TEXT, 
                ngAdd TEXT,
                ngUpdate TEXT
                )`);
        });

        
    }
    query(statement: SQLStatement): Promise<any[]> {
        return this.db.all(statement);
    }
}
export const DB = new DatabaseConnection();