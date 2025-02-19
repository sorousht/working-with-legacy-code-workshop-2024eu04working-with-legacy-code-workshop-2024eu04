const INVITATION_TEMPLATE = "$fullName\r\n" +
    "----------\r\n" +
    "Hello $firstName,\r\n\r\n" +
    "Welcome to the XYZ group!" +
    "Please accept this invitation to SAP Jam group XYZ.\r\n\r\n" +
    "Many thanks and best regards,\r\n" +
    "Markus Peter";

const MAIN_MENU = "\r\n" +
    "  Jam Invitation and Page Generator\r\n" +
    "  --------------------------------- \r\n" +
    "0. Exit\r\n" +
    "1. Create Jam Invitations For Employees & Jam Group XYZ using CSV \r\n" +
    "2. Create Jam Invitations For Employees & Jam Group XYZ using DB \r\n" +
    "3. Create Jam Invitations For Managers & Jam Group XYZ' \r\n" +
    "4. Create Member Overview Page \r\n";

const EMPLOYEE_INVITELIST_NAME = 'EmployeeInvitations.txt';

const MANAGER_INVITELIST_NAME = 'ManagerInvitations.txt';

module.exports = {
    INVITATION_TEMPLATE,
    MAIN_MENU,
    EMPLOYEE_INVITELIST_NAME,
    MANAGER_INVITELIST_NAME,
    EXIT: "0", 
    GENERATOR_EMPLOYEE_CSV: "1", 
    GENERATOR_EMPLOYEE_DB: "2", 
    GENERATOR_MANAGER: "3", 
    GENERATOR_OVERVIEW_PAGE: "4",
};