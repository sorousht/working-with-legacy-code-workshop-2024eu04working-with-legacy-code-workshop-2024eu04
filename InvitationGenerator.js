
class InvitationGenerator {
    constructor(template) {
        this.template = template;
    }

    generate(participants) {
        return participants.map(participant => this.template.replace('$firstName',participant.firstName)
        .replace('$fullName',participant.firstName + ' ' + participant.lastName)).join('\r\n\r\n==============================\r\n\r\n');
    }
}
module.exports = InvitationGenerator;