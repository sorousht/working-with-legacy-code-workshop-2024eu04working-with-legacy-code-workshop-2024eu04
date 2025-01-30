const Employee = require('./employee');
const FileManager = require('./fileManager');
const fs = require('fs');

class EmployeeFileService {
    constructor() {
        this.fileManager = new FileManager();
    }

    loadEmployees(dataSource) {
        console.log('Reading employee list from ' + fs.realpathSync(dataSource));
        const data =  this.fileManager.readFile(dataSource);
        return data.slice(1).map(line => {
            const token = line.split(';');
            return new Employee(token[0], token[1], token[2], token[3]);
        });
    }
}

module.exports = EmployeeFileService;
