const Manager = require('./manager');
const Person = require('./person');

class Employee extends Person {
    constructor(firstName, lastName, managerFirstName, managerLastName) {
        super(firstName, lastName);
        this.manager = new Manager(managerFirstName, managerLastName);
    }
}
module.exports = Employee;