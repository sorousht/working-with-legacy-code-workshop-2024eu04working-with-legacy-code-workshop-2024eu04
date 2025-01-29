const Employee = require('./Employee');
class EmployeeService {
    static loadEmployees(data) {
        return data.map(line => {
            const token = line.split(';');
            return new Employee(token[0], token[1], token[2], token[3]);
        });
    }
}
module.exports = EmployeeService;
