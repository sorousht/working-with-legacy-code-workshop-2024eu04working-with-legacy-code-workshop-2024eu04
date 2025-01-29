const Employee = require('./Employee');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('employees.db');

class EmployeeDatabaseService {
    static loadEmployees() {
        console.log('Reading employee list from database');
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM employees JOIN managers ON employees.manager_id = managers.id', (err, rows) => {
                 
                if (err) {
                    reject(err);
                } else {
                    console.log(rows);
                    const employees = rows.map(row => new Employee(row.first_name, row.last_name));
                    resolve(employees);
                }
            });
        });

    }
}

module.exports = EmployeeDatabaseService;
