const Employee = require('./Employee');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('employees.db');

class EmployeeDatabaseService {
    loadEmployees() {
        console.log('Reading employee list from database');
        const sql = "SELECT employees.first_name as employee_first_name, employees.last_name as employee_last_name, managers.first_name as manager_first_name, managers.last_name as manager_last_name FROM employees JOIN managers ON employees.manager_id = managers.id"
        return new Promise((resolve, reject) => {
            db.all(sql, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    const employees = rows.map(row => new Employee(row.employee_first_name, row.employee_last_name, row.manager_first_name, row.manager_last_name));
                    resolve(employees);
                }
            });
        });

    }
}

module.exports = EmployeeDatabaseService;
