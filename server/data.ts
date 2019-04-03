import * as sqlite from 'sqlite';

export class DatabaseConnection {
    db;
    constructor() {
        const dbPromise = sqlite.open('ecosystem.sqlite');
        dbPromise.then(db=> {
            this.db = db
            this.db.run(`CREATE TABLE IF NOT EXISTS component (
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
    query(statement, ...args): Promise<any[]> {
        return this.db.all(statement, args);
    }
}
export const DB = new DatabaseConnection();