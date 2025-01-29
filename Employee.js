
class Employee {
    constructor(firstName, lastName, managerFirstName, managerLastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.manager = {
            firstName: managerFirstName,
            lastName: managerLastName
        };
    }
}
module.exports = Employee;