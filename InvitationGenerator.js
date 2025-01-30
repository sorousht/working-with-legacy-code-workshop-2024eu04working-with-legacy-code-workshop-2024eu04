const constants = require("./constants");

class InvitationGenerator {
    generate(participants, template = constants.INVITATION_TEMPLATE) {
        return participants.map(participant => template.replace('$firstName',participant.firstName)
        .replace('$fullName',participant.firstName + ' ' + participant.lastName)).join('\r\n\r\n==============================\r\n\r\n');
    }
}
module.exports = InvitationGenerator;