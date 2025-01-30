
const Manager = require('./Manager');

class Employee {
    constructor(firstName, lastName, managerFirstName, managerLastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.manager = new Manager(managerFirstName, managerLastName)
    }
}
module.exports = Employee;