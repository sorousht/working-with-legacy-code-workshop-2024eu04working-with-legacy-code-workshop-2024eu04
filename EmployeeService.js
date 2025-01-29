const Employee = require('./Employee');
const FileManager = require('./FileManager');
const fs = require('fs');
class EmployeeService {
    static loadEmployees(dataSource) {
        console.log('Reading employee list from ' + fs.realpathSync(dataSource));
        const data = FileManager.readFile(dataSource);
        return data.map(line => {
            const token = line.split(';');
            return new Employee(token[0], token[1], token[2], token[3]);
        });
    }
}
module.exports = EmployeeService;
