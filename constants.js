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

module.exports = {
    INVITATION_TEMPLATE,
    MAIN_MENU
};