const Manager = require('./manager');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('employees.db');

class ManagerDatabaseService {
    loadManagers() {
        console.log('Reading employee list from database');
        const sql = "SELECT first_name, last_name FROM managers"
        return new Promise((resolve, reject) => {
            db.all(sql, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    const managers = rows.map(row => new Manager(row.first_name, row.last_name));
                    resolve(managers);
                }
            });
        });

    }
}

module.exports = ManagerDatabaseService;
