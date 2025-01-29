const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('employees.db');

db.serialize(() => {

    // Create managers table
    db.run(`CREATE TABLE IF NOT EXISTS managers (
        id INTEGER PRIMARY KEY ,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL
    )`);

    // Create employees table
    db.run(`CREATE TABLE IF NOT EXISTS employees (
        id INTEGER PRIMARY KEY ,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        manager_id INTEGER REFERENCES managers(id) ON UPDATE CASCADE
    )`);

    // Insert sample data into managers table
    db.run(`INSERT INTO managers (id,first_name, last_name) VALUES 
        (100,'Jane', 'Smith'),
        (200,'Thomas', 'William')`);

    // Insert sample data into employees table
    db.run(`INSERT INTO employees (id,first_name, last_name, manager_id) VALUES 
        (1,'John', 'Doe',100),
        (2,'Alice', 'Johnson',100),
        (3,'Bob', 'Brown',200)`);


});

db.close();