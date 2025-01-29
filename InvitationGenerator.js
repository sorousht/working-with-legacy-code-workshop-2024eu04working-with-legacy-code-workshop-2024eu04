
class InvitationGenerator {
    constructor(template) {
        this.template = template;
    }

    generate(employee) {
        return this.template.replace('$firstName',employee.firstName)
        .replace('$fullName',employee.firstName + ' ' + employee.lastName)
    }

}
module.exports = InvitationGenerator;