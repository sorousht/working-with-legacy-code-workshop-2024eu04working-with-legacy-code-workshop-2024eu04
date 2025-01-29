
class InvitationGenerator {
    constructor(template) {
        this.template = template;
    }

    generate(employees) {
        return employees.map(employee => this.template.replace('$firstName',employee.firstName)
        .replace('$fullName',employee.firstName + ' ' + employee.lastName)).join('\r\n\r\n==============================\r\n\r\n');
    }

}
module.exports = InvitationGenerator;